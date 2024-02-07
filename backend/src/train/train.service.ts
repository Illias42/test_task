import {
  ConflictException,
  Inject,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { DataSource } from 'typeorm';
import { Train } from '../db/entities/train.entity';
import { TrainDto } from './dto/train.dto';
import { plainToInstance } from 'class-transformer';

@Injectable()
export class TrainService {
  constructor(private dataSource: DataSource) {}

  async getTrains(params?: any) {
    let trains;
    console.log({params})
    if (params) {
      trains = await this.dataSource
        .createQueryBuilder()
        .select('*')
        .from(Train, 'train')
        .where({
          from: params.from,
          to: params.to
        })
        .getRawMany();
    } else {
      trains = await this.dataSource
        .createQueryBuilder()
        .select('*')
        .from(Train, 'train')
        .limit(10)
        .getRawMany();
    }

    return trains.length > 0
      ? plainToInstance(Train, trains)
      : [];
  }

  async createTrain(body: TrainDto) {
    if (
      await this.dataSource
        .createQueryBuilder()
        .select('*')
        .from(Train, 'train')
        .where({ num: body.num })
        .getRawOne()
    ) {
      throw new ConflictException('Such train already exists');
    }
    await this.dataSource
      .createQueryBuilder()
      .insert()
      .into(Train)
      .values(body)
      .execute();
    return new Train(body);
  }

  async updateTrain(id: number, train: Partial<TrainDto>) {
    if (!(await this.isTrainExists(id))) {
      throw new NotFoundException('No such train');
    }
    delete train.num;
    await this.dataSource
      .createQueryBuilder()
      .update(Train)
      .set(train)
      .where({ id })
      .execute();
    return new Train(
      await this.dataSource
        .createQueryBuilder()
        .select('*')
        .from(Train, 'train')
        .where({ id: id })
        .getRawOne(),
    );
  }

  async deleteTrain(id: number) {
    if (!(await this.isTrainExists(id))) {
      throw new NotFoundException('No such train');
    }
    return await this.dataSource
      .createQueryBuilder()
      .delete()
      .from(Train)
      .where({ id })
      .execute();
  }

  async isTrainExists(id: number) {
    return await this.dataSource
      .createQueryBuilder()
      .select('*')
      .from(Train, 'train')
      .where({ id: id })
      .getRawOne();
  }
}

import {
    Body,
    Controller,
    Delete,
    Get,
    HttpCode,
    Param,
    Post,
    Put,
    Query,
  } from '@nestjs/common';
  import { TrainService } from './train.service';
  import { TrainBaseDto, TrainDto } from './dto/train.dto';

  @Controller('trains')
  export class TrainController {
    constructor(private trainService: TrainService) {}
  
    @Get('/')
    async getAllTrains() {
      return await this.trainService.getTrains();
    }
  
    @Get('/route')
    async getTrain(@Query() params) {
      return await this.trainService.getTrains(params);
    }
  
    @Post('/')
    @HttpCode(200)
    async createTrain(@Body() body: TrainDto) {
      return await this.trainService.createTrain(body);
    }
  
    @Put('/:id')
    async editTrain(
      @Param('id') id: number,
      @Body() body: Partial<TrainBaseDto>,
    ) {
      return await this.trainService.updateTrain(id, body);
    }
  
    @Delete('/:id')
    async deleteTrain(@Param('id') id: number) {
      return await this.trainService.deleteTrain(id);
    }
  }
  
import { Module } from '@nestjs/common';
import { TrainModule } from './train/train.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: `.env`,
      isGlobal: true
    }),
    TypeOrmModule.forRootAsync({
      useFactory: (configService: ConfigService) => {
        return {
          type: 'postgres',
          // host: configService.get('DB_HOST'),
          // port: configService.get('DB_PORT'),
          // username: configService.get('USERNAME'),
          // password: configService.get('PASS'),
          // database: configService.get('DB_NAME'),
          host: "localhost",
          port: 5432,
          username: "root",
          password: "root",
          database: "trains_db",
          synchronize: true,
          entities: [__dirname + '/db/entities/*{.js,.ts}'],
          logging: ['query', 'warn', 'error'],
        };
      },
      inject: [ConfigService],
    }),
    TrainModule,
    AuthModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
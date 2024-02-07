import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const enableCORS = false;
  const whiteList = ['http://localhost:5173', 'http://localhost:4173'];
  app.enableCors({
    origin: (origin, callback) => {
      if (!origin) {
        callback(null, true);
        return;
      }

      if (enableCORS && whiteList.includes(origin)) {
        callback(null, true);
      } else if (!enableCORS) {
        callback(null, true);
      } else {
        console.log('blocked cors for:', origin);
        // callback(new ImATeapotException('Not allowed by CORS'), false);
      }
    },
  });
  app.setGlobalPrefix('/api');
  // app.useGlobalPipes(
  //   new ValidationPipe({ whitelist: true, forbidUnknownValues: true }),
  // );
  // app.useGlobalInterceptors(
  //   new ClassSerializerInterceptor(app.get(Reflector)),
  //   new LoggingInterceptor(),
  // );
  await app.listen(3000);
}
bootstrap();

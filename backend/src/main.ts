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
      }
    },
  });
  app.setGlobalPrefix('/api');
  await app.listen(3000);
}
bootstrap();

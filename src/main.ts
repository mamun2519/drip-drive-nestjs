import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
//  bootstrap function to start the NestJS application
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();

import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { sequelize } from './sequelize';
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await sequelize.sync({force: true});
  await app.listen(5000);
}
bootstrap();

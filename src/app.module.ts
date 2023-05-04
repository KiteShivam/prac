import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { User } from './user/user.entity';
import { Post } from './user/post.entity';
import { UserModule } from './user/user.module';
@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'Shivam@9540',
      database: 'tqs',
      autoLoadModels: true,
      synchronize: true,
    }),
    SequelizeModule.forFeature([User, Post]),
    UserModule,
  ],
})
export class AppModule {}
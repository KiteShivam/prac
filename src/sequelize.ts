import { Sequelize } from 'sequelize-typescript';
import { User } from './user/user.entity';
import { Post } from './user/post.entity';


export const sequelize = new Sequelize({
  dialect: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: 'Shivam@9540',
  database: 'tqs',
 models:[Post, User]
});

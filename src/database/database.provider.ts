import { Sequelize } from 'sequelize-typescript';
import { Post } from '../user/post.entity';
import { User } from '../user/user.entity';
export const databaseProviders = [
  {
    provide: 'SEQUELIZE',
    useFactory: async () => {
      const sequelize = new Sequelize({
        dialect: 'mysql',
        host: 'localhost',
        port: 3306,
        username: 'root',
        password: 'Shivam@9540',
        database: 'tsq',
      });
      sequelize.addModels([User, Post]);
      await sequelize.sync();
      return sequelize;
    },
  },
];
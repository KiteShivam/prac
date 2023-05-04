import { Model, Column, Table, HasMany, PrimaryKey, AutoIncrement, ForeignKey, DataType } from 'sequelize-typescript';
import { Post } from './post.entity';
import { HasOne } from 'sequelize';

@Table({tableName:"Users"})
export class User extends Model<User> {
  createPost(arg0: { title: string; content: string; }): Post | PromiseLike<Post> {
      throw new Error('Method not implemented.');
  }


  @PrimaryKey
  @AutoIncrement
  @Column
  id: number;

  @Column
  name: string;

  @ForeignKey(() => Post)
  posts: Post;

  @Column({
    field: 'created_at',
    type: DataType.DATE,
    allowNull: false,
    defaultValue: DataType.NOW,
  })
  createdAt: Date;

  @Column({
    field: 'updated_at',
    type: DataType.DATE,
    allowNull: false,
    defaultValue: DataType.NOW,
    // onUpdate: DataType.NOW,
  })
  updatedAt: Date;

}
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { User } from './user.entity';
import { Post } from './post.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User)
    private userModel: typeof User,
  ) {}

  async createPost(userId: number, title: string, content: string): Promise<Post> {
    const user = await this.userModel.findByPk(userId);
       
    return user.createPost({ title, content });
  }

  async findAll(): Promise<User[]> {
    return this.userModel.findAll({ include: Post });
  }
}
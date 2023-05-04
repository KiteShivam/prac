import { Module } from "@nestjs/common";
import { UsersService } from "./user.service";
import { UserController } from "./user.controller";
import { SequelizeModule } from "@nestjs/sequelize";
import { User } from "./user.entity";
import { Post } from "./post.entity";
@Module({
    imports:[SequelizeModule.forFeature([User, Post])],
    providers:[UsersService],
    controllers:[UserController]
    })

export class UserModule{}
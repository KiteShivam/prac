import { Module } from "@nestjs/common";
import { AuthController } from "./auth.controller";
import { AuthService } from "./auth.services";
@Module({
    imports:[],
    providers:[AuthService],
    controllers:[AuthController],
    exports:[]
})

export class AuthModule{}
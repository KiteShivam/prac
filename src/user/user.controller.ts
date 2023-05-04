import { Body, Controller, Get, Post } from "@nestjs/common";
import { UsersService } from "./user.service";
@Controller("user")
export class UserController {
 constructor (private UsersServices:UsersService ){

 }
 @Get('/all')
async getall(){
 const data = await this.UsersServices.findAll()
 return data
}
@Post("/create")
async createpost(@Body() RequestBody,){
    return await this.UsersServices.createPost(RequestBody.userId,
         RequestBody.title, RequestBody.content)
}

}
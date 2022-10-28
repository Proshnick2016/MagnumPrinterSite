import { Body, Controller, Get, OnUndefined, Post, UseAfter, UseBefore } from 'routing-controllers';
import 'reflect-metadata';
import { loggingBefore } from '../middleware/middleware';
import { RegistrationFormModel } from '../model/info';
import { makeNewUser, getAllUsers } from './databaseConnection';

@Controller()
@UseBefore(loggingBefore)
export class UserController {
  @Get('/') // get запрос с параметром id(число)
  getHomePage () { // просто названи функции
    getAllUsers();
    return 'here is home page';
  }

  @Post('/registration')
  @OnUndefined(204)
  postForRegistrUser (@Body() RegistrationFormClientSide: RegistrationFormModel) {
    const responseFromDbAboutMakeNewUser = makeNewUser(RegistrationFormClientSide);
    console.log(JSON.stringify(responseFromDbAboutMakeNewUser));
  }
}

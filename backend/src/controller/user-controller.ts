import { Body, Controller, Get, OnUndefined, Param, Post, UseAfter, UseBefore } from 'routing-controllers';
import 'reflect-metadata';
import { loggingAfter, loggingBefore } from '../middleware/middleware';
import { Info, RegistrationFormModel } from '../model/info';
import { getAllUsers, makeNewUser } from '../databaseModel/databaseConnection';

@Controller()
@UseBefore(loggingBefore)
@UseAfter(loggingAfter)
export class UserController {
  @Get('/') // get запрос с параметром id(число)
  getOne () {
    //getAllUsers();
    return `here is home page`
  }

  @Post('/registration')
  @OnUndefined(204)
  post (@Body() RegistrationFormClientSide: RegistrationFormModel) {
    const responseFromDbAboutMakeNewUser = makeNewUser(RegistrationFormClientSide);
    console.log(JSON.stringify(responseFromDbAboutMakeNewUser));
  }
}

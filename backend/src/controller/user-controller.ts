import { Body, Controller, Get, OnUndefined, Param, Post, UseAfter, UseBefore } from 'routing-controllers';
import 'reflect-metadata';
import { loggingAfter, loggingBefore } from '../middleware/middleware';
import { Info, RegistrationFormModel } from '../model/info';
import { makeNewUser } from '../databaseModel/databaseConnection';

@Controller()
@UseBefore(loggingBefore)
@UseAfter(loggingAfter)
export class UserController {
  @Get('/') // get запрос с параметром id(число)
  getOne () {
    console.log('Doing something in Get function');
    return 'You see home page';
  }

  @Post('/users/:id') // post запрос с параметром id(число) и обработкой тела запроса
  @OnUndefined(204)
  postOne (@Param('id') id: number, @Body() info: Info) {
    console.log(JSON.stringify(info));
  }

  @Post('/registration')
  @OnUndefined(204)
  post (@Body() RegistrationFormClientSide: RegistrationFormModel) {
    const responseFromDbAboutMakeNewUser = makeNewUser(RegistrationFormClientSide);
    console.log(JSON.stringify(responseFromDbAboutMakeNewUser));
  }
}

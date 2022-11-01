import { Body, Controller, Get, OnUndefined, Post, UseBefore } from 'routing-controllers';
import 'reflect-metadata';
import { loggingBefore } from '../middleware/middleware';
import { UserRegistrationFormModel, ExecutorRegistrationFormModel } from '../model/info';
import { createNewUser, getAllUsers, createNewExecutor } from './databaseConnection';

@Controller()
@UseBefore(loggingBefore)
export class UserController {
  @Get('/') // get запрос с параметром id(число)
  getHomePage () { // просто названи функции
    getAllUsers();
    return 'here is home page';
  }

  @Post('/executor-registration')
  @OnUndefined(204)
  postForRegistrExecutor (@Body() RegistrationFormClientSide: ExecutorRegistrationFormModel) {
    const resFromDbCreateNewExecutor = createNewExecutor(RegistrationFormClientSide);
    console.log(JSON.stringify(resFromDbCreateNewExecutor));
  }

  @Post('/user-registration')
  @OnUndefined(204)
  postForRegistrUser (@Body() RegistrationFormClientSide: UserRegistrationFormModel) {
    const resFromDbCreateNewUser = createNewUser(RegistrationFormClientSide);
    console.log(JSON.stringify(resFromDbCreateNewUser));
  }
}

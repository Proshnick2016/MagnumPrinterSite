import { Body, Controller, Get, OnUndefined, Post, UseBefore } from 'routing-controllers';
import 'reflect-metadata';
import { loggingBefore } from '../middleware/middleware';
import { UserRegistrationFormModel, ExecutorRegistrationFormModel, UserLogInFormModel } from '../model/info';
import { createNewUser, getAllExecutorsFromDB, createNewExecutor, logInUser } from './databaseConnection';

@Controller()
@UseBefore(loggingBefore)
export class UserController {
  @Get('/executors-sell-printing-services')
  getExecutorsSells () {
    const getExecutorsFromDb = getAllExecutorsFromDB();
    return getExecutorsFromDb;
  }

  @Post('/executor-registration')
  @OnUndefined(204)
  postForRegistrExecutor (@Body() RegistrationFormClientSide: ExecutorRegistrationFormModel) {
    createNewExecutor(RegistrationFormClientSide);
  }

  @Post('/user-registration')
  @OnUndefined(204)
  postForRegistrUser (@Body() RegistrationFormClientSide: UserRegistrationFormModel) {
    createNewUser(RegistrationFormClientSide);
  }

  @Post('/user-login')
  @OnUndefined(204)
  postUserLogining (@Body() LogInForm: UserLogInFormModel) {
    logInUser(LogInForm);
  }
}

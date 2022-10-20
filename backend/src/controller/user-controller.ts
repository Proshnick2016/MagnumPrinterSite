import { Body, Controller, Get, OnUndefined, Param, Post, UseAfter, UseBefore } from 'routing-controllers';
import 'reflect-metadata';
import { loggingAfter, loggingBefore } from '../middleware/middleware';
import { Info } from '../model/info';
import { getData } from '../databaseModel/databaseConnection';

//  Action, UseInterceptor to Routing controllers
@Controller()
@UseBefore(loggingBefore)
@UseAfter(loggingAfter)
// @UseInterceptor(function (action: Action, content: any) {
//   console.log('change response...');
//   content = 'interceptor';
//   return content;
// })
export class UserController {
  @Get('/users/:id') // get запрос с параметром id(число)
  getOne (@Param('id') id:number) {
    console.log('Doing something in Get function');
    return `This action returns user #${id}`;
  }

  @Post('/users/:id') // post запрос с параметром id(число) и обработкой тела запроса
  @OnUndefined(204)
  postOne (@Param('id') id: number, @Body() info: Info) {
    getData(); // тест подключения базы данных
    console.log(JSON.stringify(info));
  }
}

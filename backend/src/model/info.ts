import { IsDefined } from 'class-validator';

export class Info { // тестовый шаблом для тела post запроса
  @IsDefined()
    country: string;

  @IsDefined()
    city: string;
}

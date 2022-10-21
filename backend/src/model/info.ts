import { IsDefined, IsEmail, MinLength, MaxLength } from 'class-validator';

export class Info { // тестовый шаблом для тела post запроса
  @IsDefined()
    country: string;

  @IsDefined({ message: 'you should write city field' })
    city: string;
}
// посмотреть на isDefined, может надо прописать другой параметр
export class RegistrationFormModel {
  @MinLength(1, { message: "Поле 'Имя' должно быть заполнено" })
  @MaxLength(255, { message: 'Количество символов в поле не должно превышать значения 255' })
    userName: string;

  @IsDefined({ message: "Поле 'Пароль' должно быть заполнено" })
  @MinLength(8, { message: 'Пароль должен иметь больше 8 символов' })
  @MaxLength(20, { message: 'Пароль должен иметь меньше 20 символов' })
    userPassword: string;

  @IsEmail()
  @MinLength(1, { message: "Поле 'Email' должно быть заполнено" })
  @MaxLength(255, { message: 'Количество символов в поле не должно превышать значения 255' })
    userEmail: string;

  @MinLength(1, { message: "Поле 'Город' должно быть заполнено" })
  @MaxLength(255, { message: 'Количество символов в поле не должно превышать значения 255' })
    userCity: string;

  @MinLength(1, { message: "Поле 'Модель Принтера' должно быть заполнено" })
  @MaxLength(255, { message: 'Количество символов в поле не должно превышать значения 255' })
    userPrinterType: string;
}

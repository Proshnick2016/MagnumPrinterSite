import { IsEmail, MaxLength, IsNotEmpty, MinLength } from 'class-validator';

export class UserRegistrationFormModel {
  @IsNotEmpty({ message: "Поле 'Имя' должно быть заполнено" })
  @MaxLength(30, { message: 'Количество символов в поле не должно превышать значения 30' })
    username: string;

  @IsNotEmpty({ message: "Поле 'Пароль' должно быть заполнено" })
  @MinLength(8, { message: 'Пароль должен иметь больше 8 символов' })
  @MaxLength(20, { message: 'Пароль должен иметь меньше 20 символов' })
    password: string;

  @IsEmail()
  @IsNotEmpty({ message: "Поле 'Email' должно быть заполнено" })
  @MaxLength(30, { message: 'Количество символов в поле не должно превышать значения 30' })
    email: string;

  @IsNotEmpty({ message: "Поле 'Город' должно быть заполнено" })
  @MaxLength(30, { message: 'Количество символов в поле не должно превышать значения 30' })
    city: string;
}

export class ExecutorRegistrationFormModel extends UserRegistrationFormModel {
  @IsNotEmpty({ message: "Поле 'Модель Принтера' должно быть заполнено" })
  @MaxLength(30, { message: 'Количество символов в поле не должно превышать значения 30' })
    printer_model: string;
}
export class UserLogInFormModel {
  @IsNotEmpty({ message: "Поле 'Логин' должно быть заполнено" })
    username: string;

  @IsNotEmpty({ message: "Поле 'Пароль' должно быть заполнено" })
    password: string;
}

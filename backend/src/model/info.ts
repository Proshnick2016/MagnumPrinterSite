import { IsDefined, IsEmail, MaxLength, IsNotEmpty, MinLength } from 'class-validator';

// посмотреть на isDefined, может надо прописать другой параметр
export class UserRegistrationFormModel {
  @IsNotEmpty({ message: "Поле 'Имя' должно быть заполнено" })
  @MaxLength(30, { message: 'Количество символов в поле не должно превышать значения 30' })
    userName: string;

  @IsDefined({ message: "Поле 'Пароль' должно быть заполнено" })
  @MinLength(8, { message: 'Пароль должен иметь больше 8 символов' })
  @MaxLength(20, { message: 'Пароль должен иметь меньше 20 символов' })
    userPassword: string;

  @IsEmail()
  @IsNotEmpty({ message: "Поле 'Email' должно быть заполнено" })
  @MaxLength(30, { message: 'Количество символов в поле не должно превышать значения 30' })
    userEmail: string;

  @IsNotEmpty({ message: "Поле 'Город' должно быть заполнено" })
  @MaxLength(30, { message: 'Количество символов в поле не должно превышать значения 30' })
    userCity: string;
}

export class ExecutorRegistrationFormModel extends UserRegistrationFormModel {
  @IsNotEmpty({ message: "Поле 'Модель Принтера' должно быть заполнено" })
  @MaxLength(30, { message: 'Количество символов в поле не должно превышать значения 30' })
    userPrinterModel: string;
}

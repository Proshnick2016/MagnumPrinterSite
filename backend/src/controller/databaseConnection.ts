import { Sequelize } from 'sequelize';
import { initModels } from '../databaseModels/init-models';
import { Executor } from '../databaseModels/executor';
import { UserDefaultData } from '../databaseModels/user_default_data';
import bcrypt from 'bcryptjs';

const dbModel = new Sequelize({
  dialect: 'mysql',
  host: 'sql7.freesqldatabase.com',
  username: 'sql7586494',
  database: 'sql7586494',
  password: 'xQJvG3A82J',
  port: 3306,
  timezone: '+00:00'
});

initModels(dbModel);

export async function getAllExecutorsFromDB () { // получение всех исполнителей
  dbModel.authenticate();

  const getAllExecutorsFromDb = await UserDefaultData.findAll();

  dbModel.close();

  return getAllExecutorsFromDb;
}

//= ============= REGISTRATION CODE ================
export async function createNewUser (registrationFormData) { // регистрация для Исполнителя
  dbModel.authenticate();
  let registratedUser;
  try {
    const salt = bcrypt.genSaltSync(12);
    const passwordHash = await bcrypt.hashSync(registrationFormData.userPassword, salt);

    registratedUser = await UserDefaultData.create({
      username: registrationFormData.userName,
      password: passwordHash,
      email: registrationFormData.userEmail,
      city: registrationFormData.userCity
    });
  } catch (error) {
    console.log(error);
  }

  dbModel.close();

  return registratedUser;
}

export async function createNewExecutor (registrationFormData) {
  dbModel.authenticate();

  const resDbToCreateNewUser = await createNewUser(registrationFormData);

  await Executor.create({
    executor_id: resDbToCreateNewUser.user_id,
    printer_model: registrationFormData.userPrinterModel
  });

  dbModel.close();
}
//= ============= REGISTRATION CODE ================
export async function logInUser (logInFormData) {
  await UserDefaultData.findOne({ where: { username: logInFormData.username } });
  // если пользователя нет, то говорить об этом
  // проверка на совпадение пароля
}

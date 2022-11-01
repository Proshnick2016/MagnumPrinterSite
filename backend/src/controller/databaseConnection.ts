import { Sequelize } from 'sequelize';
import { initModels } from '../databaseModels/init-models';
import { Executor } from '../databaseModels/executor';
import { UserDefaultData } from '../databaseModels/user_default_data';
import Serializer from 'sequelize-to-json';

const dbModel = new Sequelize({
  dialect: 'mysql',
  host: 'localhost',
  username: 'root',
  database: 'magnoomusers',
  password: 'Qwerty@1',
  timezone: '+00:00'
});

initModels(dbModel);
export async function getAllUsers () { // получение всех пользователей (Сделано для теста подключения)
  dbModel.authenticate();
  
  const getAllUsersDbArray = await UserDefaultData.findAll();
  const getAllUsersDataRes = Serializer.serializeMany(getAllUsersDbArray, UserDefaultData);
  console.log(getAllUsersDataRes);
}

export async function createNewUser (registrationFormData) { // регистрация для Исполнителя
  dbModel.authenticate();
  return await UserDefaultData.create({
    username: registrationFormData.userName,
    password: registrationFormData.userPassword,
    email: registrationFormData.userEmail,
    city: registrationFormData.userCity
  });
}

export async function createNewExecutor (registrationFormData) {
  dbModel.authenticate();
  const resDbToCreateNewUser = await createNewUser(registrationFormData);

  const newUserObjUserId = (resDbToCreateNewUser).toJSON();

  await Executor.create({
    executor_id: newUserObjUserId.user_id,
    printer_model: registrationFormData.userPrinterModel
  });
}

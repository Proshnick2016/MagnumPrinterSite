import { Sequelize } from 'sequelize';
import { initModels } from '../databaseModels/init-models';
import { Usersdata } from '../databaseModels/usersdata';
import Serializer from 'sequelize-to-json';

const dbModel = new Sequelize({
  dialect: 'mysql',
  host: 'localhost',
  username: 'root',
  database: 'magnoomusers',
  password: 'Qwerty@1',
  timezone: "+00:00"
});

initModels(dbModel);

export async function getAllUsers () { // получение всех пользователей (Сделано для теста подключения)
  dbModel.authenticate();
  const getAllUsersDbArray = await Usersdata.findAll();
  const getAllUsersDataRes = Serializer.serializeMany(getAllUsersDbArray, Usersdata);
  console.log(getAllUsersDataRes);
  dbModel.close();
}

export async function makeNewUser (registrationFormData) { // регистрация для Исполнителя
  dbModel.authenticate();
  
  const createNewUserDb = await Usersdata.create({
    name: registrationFormData.userName,
    password: registrationFormData.userPassword, 
    email: registrationFormData.userEmail,
    city: registrationFormData.userCity,
    printerType: registrationFormData.userPrinterType
  });
  dbModel.close();
}

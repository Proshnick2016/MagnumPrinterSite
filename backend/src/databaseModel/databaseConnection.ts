import mysql from 'mysql2';

const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  database: 'magnoomusers',
  password: 'Qwerty@1'
}).promise();

export async function makeNewUser (registrationFormData) { // регистрация для Исполнителя
  const responseFromDb = await pool.query(
    'INSERT INTO usersdata (name, password, email, city, printerType) VALUES (?, ?, ?, ?, ?)',
    [registrationFormData.userName, registrationFormData.userPassword, registrationFormData.userEmail,
      registrationFormData.userCity, registrationFormData.userPrinterType]);
  return responseFromDb;
}
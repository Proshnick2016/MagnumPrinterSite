import mysql from 'mysql2';

export async function getData () { // ассинхронное подключение к базе данных
  const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    database: 'magnoomusers',
    password: 'Qwerty@1'
  }).promise();

  const responseFromDb = await pool.query('SELECT * FROM usersdata'); // запрос на бд
  console.log(responseFromDb[0]);
}

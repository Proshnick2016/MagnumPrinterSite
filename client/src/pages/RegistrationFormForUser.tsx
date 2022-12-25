import React from "react";
import '../styles/RegistrationFormForUser.css';
import axios from 'axios';

function RegistrationFormForUser(){

  axios.defaults.withCredentials = true;

  const [email, setEmail] = React.useState('');
  const [password, setPass] = React.useState('');
  const [username, setName] = React.useState('');
  const [city, setCity] = React.useState('')
  
  const handleSubmit_user = (e:any) => {
      e.preventDefault();
      axios.post('http://localhost:8000/user-registration', {
        username,
        password,
        email,
        city,
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
       console.log(error);
    });
  }

    return (
      <div>
        <input type="checkbox" id="side-checkbox-user" />
        
        <div className="side-panel-user">
          <label className="side-button-2-user" htmlFor="side-checkbox-user">+</label>
          <div className="side-title-user">Регистрация заказчика</div>
          
          <form className="register-form-user" onSubmit={handleSubmit_user}>

            <label htmlFor="name">Логин</label>
            <input value={username} name="username" onChange={(e) => setName(e.target.value)} id="username" placeholder="Логин" />

            <label htmlFor="email">Email</label>
            <input value={email} onChange={(e) => setEmail(e.target.value)}type="email" placeholder="Email" id="email" name="email" />

            <label htmlFor="password">Пароль</label>
            <input value={password} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="password" />

            <label htmlFor="city">Город</label>
            <input value={city} name="city" onChange={(e) => setCity(e.target.value)} id="city" placeholder="Ваш город" />

            <button className="submitButton-user" type="submit">Зарегистрироваться</button>
        </form>
        
        </div>

        <div className="side-button-1-wr-user">
          <label className="side-button-1-user" htmlFor="side-checkbox-user">
            <div className="side-b-user side-open-user">Регистрация для заказчика</div>
          </label>
        </div>
      </div>
    );
}

export default RegistrationFormForUser;
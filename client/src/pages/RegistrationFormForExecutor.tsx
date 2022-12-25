import axios from 'axios';
import React from 'react';
import '../styles/RegistrationFormForExecutor.css';

function RegistrationFormForExecutor() {

  const [email, setEmail] = React.useState('');
  const [password, setPass] = React.useState('');
  const [name, setName] = React.useState('');
  const [city, setCity] = React.useState('');
  const [printer_model, setPrinter_model] = React.useState('');

  const handleSubmit_executor = (e:any) => {
      e.preventDefault();
      axios.post('http://localhost:8000', {
        userName: name,
        userPassword: password,
        userEmail: email,
        userCity: city,
        userPrinterModel: printer_model
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
        <input type="checkbox" id="side-checkbox-executor" />

        <div className="side-panel-executor">

        <label className="side-button-2-executor" htmlFor="side-checkbox-executor">+</label>
          <div className="side-title-executor">Регистрация заказчика</div>
          
          <form className="register-form-executor" onSubmit={handleSubmit_executor}>

            <label htmlFor="name">Логин</label>
            <input value={name} name="name" onChange={(e) => setName(e.target.value)} id="name" placeholder="Логин" />

            <label htmlFor="email">Email</label>
            <input value={email} onChange={(e) => setEmail(e.target.value)}type="email" placeholder="Email" id="email" name="email" />

            <label htmlFor="password">Пароль</label>
            <input value={password} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="password" />

            <label htmlFor="city">Город</label>
            <input value={city} name="city" onChange={(e) => setCity(e.target.value)} id="city" placeholder="Ваш город" />

            <label htmlFor="printer_model">Модель Принетра</label>
            <input value={printer_model} name="printer_model" onChange={(e) => setPrinter_model(e.target.value)} id="printer_model" placeholder="Модель принтера" />

            <button className="submitButton-executor" type="submit">Зарегистрироваться</button>
        </form>

        </div>

        <div className="side-button-1-wr-executor">
          <label className="side-button-1-executor" htmlFor="side-checkbox-executor">
            <div className="side-b-executor side-open-executor">Регистрация для исполнителя</div>
          </label>
        </div>
      </div>
    );
}

export default RegistrationFormForExecutor;
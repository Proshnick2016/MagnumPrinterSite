import React from 'react';
import '../styles/RegistrationForm.css';

class RegistrationFormForUser extends React.Component {
  render() {
    return (
      <div>
        <input type="checkbox" id="side-checkbox" />
        
        <div className="side-panel">
          <label className="side-button-2" htmlFor="side-checkbox">+</label>
          <div className="side-title">Выдвижная панель:</div>
          <p>Информация в панеле</p>
        </div>

        <div className="side-button-1-wr">
          <label className="side-button-1" htmlFor="side-checkbox">
            <div className="side-b side-open">Регистрация для заказчика</div>
          </label>
        </div>
      </div>
    );
  }
}

export default RegistrationFormForUser;
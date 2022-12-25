import RegistrationFormForExecutor from './pages/RegistrationFormForExecutor';
import RegistrationFormForUser from './pages/RegistrationFormForUser';
import './styles/App.css';


function App() {
  return (
    <div className="App">
      <div className='centerText'>
        <p className='siteName'>MagnoomPrinters </p>
        <p className='siteDescription'>печать 3D моделей на любой вкус </p>
        
        <div className='registrationDiv'>
          <RegistrationFormForUser/>
          <RegistrationFormForExecutor/>
        </div>
        
      </div>
    </div>
  );
}

export default App;

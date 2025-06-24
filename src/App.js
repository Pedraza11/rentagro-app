// src/App.js
import React from 'react';
import LoginScreen from './components/LoginScreen/LoginScreen'; // Importa el componente LoginScreen
import UserDashboard from './components/Dashboard/UserDashboard';
import UserRegistrationForm from './components/UserRegistration/UserRegistrationForm';
import ContractListScreen from './components/Contracts/ContractListScreen';
import DashboardHome from './components/DashboardHome/DashboardHome';  // ¡Importa solo la pantalla de contratos!
import './App.css'; // Puedes dejarlo para estilos globales o eliminarlo si no lo usas
//import UserDashboard from './components/Dashboard/UserDashboard';

function App() {
  return (
    <div className="App">
      
    
      {/* Muestra el formulario de registro de usuario */}
      {/* Muestra el panel de usuario */}
      {/* Muestra la pantalla de inicio de sesión */}
      {/* Puedes descomentar las siguientes líneas para mostrar otras pantallas */}
      {/* <UserDashboard />  Muestra el panel de usuario */}
      {/* <UserRegistrationForm /> Muestra el formulario de registro de usuario */}
      {/* <ContractListScreen /> Muestra la lista de contratos */}
       <DashboardHome /> Muestra la pantalla de inicio del panel de administración 

       
    </div>
  );
}

export default App;
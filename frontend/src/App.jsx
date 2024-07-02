import React, { useState } from 'react';
import Login from "./components/login"
import Signup from './components/cadastro';
import './App.css';

function App() {
    const [currentForm, setCurrentForm] = useState('login');

    const switchForm = (formName) => {
        setCurrentForm(formName);
    };

    return (
        <div className="App">
            {currentForm === 'login' ? <Login onFormSwitch={switchForm} /> : <Signup onFormSwitch={switchForm} />}
        </div>
    );
};

export default App;

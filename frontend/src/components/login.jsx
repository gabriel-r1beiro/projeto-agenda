import React, { useState } from 'react';

const Login = ({ onFormSwitch }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Adicione a lógica de login aqui
        console.log('Login:', { email, password });
    };

    return (
        <div>
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <label>Email:</label>
                <input 
                    type="email" 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)} 
                    required 
                />
                <label>Password:</label>
                <input 
                    type="password" 
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)} 
                    required 
                />
                <button type="submit">Login</button>
            </form>
            <button onClick={() => onFormSwitch('signup')}>Ainda não tem uma conta? Cadastre-se aqui.</button>
        </div>
    );
};

export default Login;

import React, { useState } from 'react';

const Signup = ({ onFormSwitch }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            alert('As senhas não coincidem.');
            return;
        }
        // Adicione a lógica de cadastro aqui
        console.log('Cadastro:', { email, password });
    };

    return (
        <div>
            <h2>Cadastro</h2>
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
                <label>Confirm Password:</label>
                <input 
                    type="password" 
                    value={confirmPassword} 
                    onChange={(e) => setConfirmPassword(e.target.value)} 
                    required 
                />
                <button type="submit">Cadastrar</button>
            </form>
            <button onClick={() => onFormSwitch('login')}>Já tem uma conta? Faça login aqui.</button>
        </div>
    );
};

export default Signup;

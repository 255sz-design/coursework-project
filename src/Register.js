import React, { useState } from 'react';

const Register = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Регистрация на: ${name} (${email})`);
    };

    return (
        <div style={{ padding: '20px' }}>
            <h2>Регистрация</h2>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    placeholder="Име" 
                    value={name} 
                    onChange={(e) => setName(e.target.value)} 
                    style={{ display: 'block', marginBottom: '10px' }}
                />
                <input 
                    type="email" 
                    placeholder="Имейл" 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)} 
                    style={{ display: 'block', marginBottom: '10px' }}
                />
                <input 
                    type="password" 
                    placeholder="Парола" 
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)} 
                    style={{ display: 'block', marginBottom: '10px' }}
                />
                <button type="submit">Регистрирай се</button>
            </form>
        </div>
    );
};

export default Register;
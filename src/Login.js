import React, { useState } from 'react';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Влизане с: ${email}`);
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Вход</h2>
      <form onSubmit={handleSubmit}>
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
        <button type="submit">Влез</button>
      </form>
    </div>
  );
};

export default Login;

import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function App() {
  const containerStyle = { fontFamily: 'Arial, sans-serif', textAlign: 'center', backgroundColor: '#f4f4f9', minHeight: '100vh' };
  const navStyle = { padding: '20px', background: '#282c34', display: 'flex', justifyContent: 'center', gap: '30px' };
  const linkStyle = { color: 'white', textDecoration: 'none', fontSize: '18px', fontWeight: 'bold' };
  const contentStyle = { padding: '50px' };
  const formStyle = { display: 'flex', flexDirection: 'column', maxWidth: '300px', margin: '0 auto', gap: '10px' };

  return (
    <Router>
      <div style={containerStyle}>
        <nav style={navStyle}>
          <Link style={linkStyle} to="/">Начало</Link>
          <Link style={linkStyle} to="/login">Вход</Link>
          <Link style={linkStyle} to="/register">Регистрация</Link>
        </nav>

        <Routes>
          <Route path="/" element={
            <div style={contentStyle}>
              <h1>Добре дошли в моя проект!</h1>
              <p>Това е началната страница с динамично съдържание.</p>
              <div style={{marginTop: '20px', border: '1px solid #ccc', padding: '10px', borderRadius: '8px', background: '#fff'}}>
                 <h3>Данни от "базата":</h3>
                 <p>Продукт #1 - Активен</p>
                 <p>Продукт #2 - В наличност</p>
              </div>
            </div>
          } />
          
          <Route path="/login" element={
            <div style={contentStyle}>
              <h2>Вход в системата</h2>
              <div style={formStyle}>
                <input style={{padding: '10px'}} type="text" placeholder="Потребителско име" />
                <input style={{padding: '10px'}} type="password" placeholder="Парола" />
                <button style={{padding: '10px', background: '#282c34', color: 'white', border: 'none', cursor: 'pointer'}}>Влез</button>
              </div>
            </div>
          } />

          <Route path="/register" element={
            <div style={contentStyle}>
              <h2>Създаване на нов профил</h2>
              <div style={formStyle}>
                <input style={{padding: '10px'}} type="email" placeholder="Имейл" />
                <input style={{padding: '10px'}} type="text" placeholder="Потребител" />
                <input style={{padding: '10px'}} type="password" placeholder="Парола" />
                <button style={{padding: '10px', background: '#282c34', color: 'white', border: 'none', cursor: 'pointer'}}>Регистрирай се</button>
              </div>
            </div>
          } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
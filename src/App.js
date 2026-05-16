import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './Home';
import Login from './Login';
import Register from './Register'; // 1. Казваме на App.js, че има нов файл Register

function App() {
  return (
    <Router>
      <div>
        <nav style={{ background: '#282c34', padding: '15px', color: 'white' }}>
          <Link to="/" style={{ color: 'white', marginRight: '20px', textDecoration: 'none' }}>Начало</Link>
          <Link to="/login" style={{ color: 'white', marginRight: '20px', textDecoration: 'none' }}>Вход</Link>
          {/* 2. Добавяме линк за Регистрация в менюто */}
          <Link to="/register" style={{ color: 'white', textDecoration: 'none' }}>Регистрация</Link> 
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          {/* 3. Казваме, че когато напишем /register в браузъра, трябва да се зареди компонента Register */}
          <Route path="/register" element={<Register />} /> 
        </Routes>
      </div>
    </Router>
  );
}

export default App;
import React from 'react';
import { ThemeProvider } from 'styled-components';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './views/Home';
import Problem from './views/Problem';
import Member from './views/Member';
import Shop from './views/Shop';
import Battle from './views/Battle';
import Setting from './views/Setting';
import Login from './views/Login';
import { useAtom } from 'jotai';
import loginStatusAtom from './store/login/loginStatus';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useAtom(loginStatusAtom);
  const theme = 'light';
  const themeObject = {
    light: {
      mode: 'light',
      background: '#e5e6ec',
      foreground: '#f0f1f5',
      titleText: '#3c414c',
      contentText: '#5c5e66',
      subText: '#a9adb9',
      primary: '#408cff',
      secondary: '#98bffa',
      boxShadow: '0 4px 24px 0 #cecece',
    },
    dark: {
      mode: 'dark',
      background: '#1d2128',
      foreground: '#2c3038',
      titleText: '#a0a4b3',
      contentText: '#b4b7c4',
      subText: '#5d616f',
      primary: '#408cff',
      secondary: '#98bffa',
      boxShadow: '0 4px 24px 0 #3c414c',
    },
  };
  return (
    <ThemeProvider theme={themeObject[theme]}>
      <Router basename={process.env.PUBLIC_URL}>
        <Routes>
          <Route path="/Login" element={<Login />} />
          <Route path="/" element={<Home />} />
          <Route path="/problem" element={<Problem />} />
          <Route path="/member" element={<Member />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/battle" element={<Battle />} />
          <Route path="/setting" element={<Setting />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;

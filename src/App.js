import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainPage from './pages/mainPage/mainPage'
import LoginPage from './pages/loginPage/loginPage.js'
import CreatePage from './pages/create/createPage'
import DetailPage from './pages/detail/detailPage';
import RegisterPage from './pages/register/registerPage'

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path='/' element={<MainPage />} />
          <Route element={<LoginPage/>} path='/login' />
          <Route element={<CreatePage/>} path='/create'/>
          <Route element={<DetailPage/>} path='/detail/:id'/>
          <Route element={<RegisterPage/>} path='/register'/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

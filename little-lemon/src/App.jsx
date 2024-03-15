import './App.css';
import Header from './components/Header';
import { Routes, Route } from 'react-router-dom';
import Homepage from './pages/Homepage';
import About from './pages/About';
import Menu from './pages/Menu';
import Reservations from './pages/Reservations';
import Login from './pages/Login';
import Footer from './components/Footer';
import ReservationConfirm from './pages/ReservationConfirm';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Homepage />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/menu' element={<Menu />}></Route>
        <Route path='/reservations' element={<Reservations />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route
          path='/reservation-confirm'
          element={<ReservationConfirm />}
        ></Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;

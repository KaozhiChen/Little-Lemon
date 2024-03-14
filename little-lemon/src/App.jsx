import './App.css';
import Navbar from './components/Navbar';
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
      <Navbar />
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
        {/* <Route
          path="/reservations"
          element={
            <ReservationsPage
              availableTimes={availableTimes}
              updateTimes={updateTimes}
            />
          }
        ></Route>
        <Route path="/confirmed" element={<ConfirmedBookingPage />} /> */}
      </Routes>
      <Footer />
    </>
  );
}

export default App;

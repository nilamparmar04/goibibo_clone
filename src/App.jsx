import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/home/Home'
import Hotels from './pages/hotels/Hotels'
import Buses from './pages/buses/Buses'
import Trains from './pages/trains/Trains'
import HotelSearch from './pages/hotels/HotelSearch'
import FlightSearch from './pages/flights/FlightSearch'
import TrainSearch from './pages/trains/TrainSearch'
import BusSearch from './pages/buses/BusSearch'
import Header from './components/Header'
import Footer from './components/Footer'
import Logout from './pages/Logout'
import ErrorPage from './pages/ErrorPage'
import Protected from './pages/Protected'



const App = () => {
  return (
    <div className='body'>
    <BrowserRouter>
        <Header/>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/hotels/' element={<Hotels/>} />
          <Route path='/hotel/:location' element={<Protected Component={HotelSearch} />} />
          <Route path='/flight/:from/:to/:day' element={<FlightSearch/>}/>
          <Route path='/trains/' element={<Trains/>}/>
          <Route path='/train/:from/:to/:day' element={<TrainSearch/>}/>
          <Route path='/buses/' element={<Buses/>}/>
          <Route path='/bus/:from/:to/:day' element={<BusSearch/>}/>
          <Route path='/logout' element={<Logout/>}/>
          <Route path='*' element={<ErrorPage />}/>
        </Routes>
        <Footer/>
    </BrowserRouter>
    </div>
  )
}

export default App

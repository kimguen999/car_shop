import { Route, Routes } from 'react-router-dom'
import Head from './conponents/Head'
import { useState } from 'react'
import './reset.css'
import CarManagement from './pages/manage/CarManagement';
import Home from './pages/manage/Home';
import SellManagement from './pages/manage/SellManagement';
import SellList from './pages/manage/SellList';



function App() {
  
  const [header, setHeader] = useState({});

  return (
    <>
      <Routes>

        <Route
          path='/'        
          element={<Head />}        
        >
          <Route
            path=''
            element={<Home />}
          >
          </Route>
          <Route
            path='/carInfo'
            element={<CarManagement />}
          >
          </Route>
          <Route
            path='/sellInfo'
            element={<SellManagement />}
          >
          </Route>
          <Route
            path='/sellList'
            element={<SellList/>}
          >
          </Route>
        </Route>

      </Routes>

      
        


    </>
  )
}

export default App

import React from 'react'
import "./app.css";
import { Route, Routes } from 'react-router-dom';
import { Box } from '@mui/material';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ExcerciseDetail from './pages/ExcerciseDetail';
import Home from './pages/Home';

const App = () => {
  return (
    <Box width="400px">
        <Navbar/>
       <Routes>
         <Route path='/' element={<Home/>}/> 
         <Route path="/excercise/:id" element={<ExcerciseDetail/>}/>
       </Routes>
       <Footer/>
    </Box>
  )
}

export default App
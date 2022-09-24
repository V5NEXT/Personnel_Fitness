import React, {useState} from 'react';
import { Box } from '@mui/material';
import HeroBanner from '../components/HeroBanner';
import SearchExcercises from '../components/SearchExercises';
import Excercises from '../components/Exercises';

const Home = () => {
  return (
    <Box>
      <HeroBanner/>
      <SearchExcercises/>
      <Excercises/>
    </Box>
  )
}

export default Home
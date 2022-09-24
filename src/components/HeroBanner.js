import React from 'react';
import {Box, Stack, Typography} from '@mui/material';

const HeroBanner = () => {
  return (
    <Box sx={{mt:{lg: '212px', xs:'70px'}, ml:{sm: '50px'}}} position="relative" p="20px">
      <Typography color="#ff2625" fontWeight="600" fontSize="25px">
        My Fitness
      </Typography>
      <Typography fontWeight={700} sx={{fontsize:{lg: '44px', xs:'40px'}}}>
        Sweat, Smile <br/> and Repeat
      </Typography>
      <Typography fontSize="22px" lineHeight="35px">
        Check out the most effective Excercises
      </Typography>
    </Box>
  )
}

export default HeroBanner
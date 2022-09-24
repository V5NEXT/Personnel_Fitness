import React from 'react';
import {Box, Stack, Typography, Button} from '@mui/material';

const HeroBanner = () => {
  return (
    <Box sx={{mt:{lg: '212px', xs:'70px'}, ml:{sm: '50px'}}} position="relative" p="20px">
      <Typography color="#ff2625" fontWeight="600" fontSize="25px">
        My Fitness
      </Typography>
      <Typography fontWeight={700} sx={{fontsize:{lg: '44px', xs:'40px'}}}>
        Sweat, Smile <br/> and Repeat
      </Typography>
      <Typography fontSize="22px" lineHeight="35px" mb={3}>
        Check out the most effective Excercises
      </Typography>
      <Button href="#exercises" variant='contained' color='error'>Explore Excercises</Button>
    </Box>
  )
}

export default HeroBanner
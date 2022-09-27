import React, {useState, useEffect} from 'react';
import { Box, Typography, Stack, Textfield, Button } from '@mui/material';

const SearchExercises = () => {
  return (
    <Stack alignItems="center" mt="37px" justifyContent="center"
    p="20px">
      <Typography fontWeight={700} sx={{
        fontSie:{lg: '44px', xs:'30px'}
      }} mb="50px" textAlign="center">
        Carefully follow and <br/>
        Personalize yours own Excercises
      </Typography>
    </Stack>
  )
}

export default SearchExercises
import React, {useState, useEffect} from 'react';
import { Box, Typography, Stack, Button, TextField } from '@mui/material';

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
      <Box position="relative" mb="72px">
        <TextField 
        sx={{input: {fontWeight:'700', border:'none', borderRadius:'4px'},
      width : {lg:'1170px', sm:'100%'}
      }}
        height="76px" value="" onChange={(e)=>{}}
        placeholder="Search Exercises"
        type="text"
        />

      </Box>
    </Stack>
  )
}

export default SearchExercises
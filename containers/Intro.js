import {
  Box,
  Typography,
  Avatar,
  Grid
} from "@mui/material"
import Image from "next/image"

export default function Intro(){
  return (
    <Box 
      component="section" 
      sx={{
        minHeight:"100vh", 
        paddingTop: "15vh"
        
    }}
     
      >
      <Typography variant="h1">
        Matteo Scannavini
      </Typography>
      <Typography variant="subtitle1">
        <i>Your friendly neighborhood tech journalist</i>
      </Typography>

      <Grid container>
        <Grid item>
        <Avatar
        variant="circular"
           sx={{ width: 150, height: 150,}}
        ><Image  alt="Matteo Scannavini"
        
        src="/../public/images/me.jpg"
  layout="fill"/></Avatar>
        </Grid>
      </Grid>
      <Grid item xs={1}>
      <Typography>
      Welcome, my name is Matteo Scannavini and I am a freelance journalist and web developer. 
      </Typography>
      <Typography>
      Born in Bologna in 1999, my studies took me first to Pisa, for a bachelor degree in Digital Humanities, and then to Sweden, for 
      a master programme in Investigative Journalism at Gothenburgh University. 
      <Typography>
      I am keen on slow journalism, especially when mixed with data, and when I do articles or web apps, I put them here.
      Have a look around!
      </Typography>
  
      </Typography>
      </Grid>

    </Box>
  )
}
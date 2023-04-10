import {
  Box,
  Typography,
  Avatar,
  Grid,
  Button, 
} from "@mui/material"
import Image from "next/image"
import Link from "next/link"
import { KeyboardArrowDown as ScrollDownIcon } from '@mui/icons-material'
export default function Intro(){
  return (
    <Box sx={{textAlign: "center"}}>
        <Avatar sx={{ width: 150, height: 150, margin: "auto"}}>
          <Image  
            alt="Matteo Scannavini"
            src="/images/me.jpg"
            layout="fill"
          />
        </Avatar>
      <Typography variant="h1">
        Matteo Scannavini
      </Typography>
      <Typography variant="subtitle1">
        Your friendly neighborhood tech journalist
      </Typography>
      <Typography sx={{textAlign: {xs: "left", sm: "justify"}}}>
        Welcome, my name is Matteo Scannavini and I am a freelance journalist and web developer. 
        Born in Bologna in 1999, my studies took me first to Pisa, for a bachelor degree in <b>Digital Humanities</b>, and then to Gothenburgh, for 
        a master programme in <b>Investigative Journalism</b>.
      </Typography>
      <Typography sx={{textAlign: {xs: "left", sm: "justify"}}}>
        I am keen on <b>slow journalism</b>, especially when mixed with <b>data</b>, and when I do articles or web apps, I put them here.
      </Typography>
      <Link href="#articles">
        <Button endIcon={<ScrollDownIcon id="scrollDown" />} sx={{flexDirection: "column", }}>
          Have a look
        </Button>
      </Link>
    </Box>
  )
}
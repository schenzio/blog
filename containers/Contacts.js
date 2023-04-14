import {
  Box,
  Typography,
  Stack,
  Avatar
} from "@mui/material"

import {
  NavigateNext as NavigateNextIcon,
  Edit as EditIcon,
  Check as CheckIcon,
  Clear as ClearIcon,
  Facebook as FacebookIcon,
  Twitter as TwitterIcon,
  LinkedIn as LinkedInIcon,
  WhatsApp as WhatsAppIcon,
  MailOutline as MailIcon,
  QueryStats as QueryStatsIcon,
  Visibility as VisibilityIcon,
  Login as LoginIcon
} from '@mui/icons-material'

import Image from "next/image"
export default function Contacts(){
  return (
    <Box>
      <Stack direction="row">
        <Box sx={{width: 40, height: 40}}>
          <Image  
            id="gecko"
            alt="gecko icon"
            src="/images/gecko.svg"
            width={"100%"}
            height={"100%"}
          />
        </Box>
      <Typography variant="h2">
        Get in touch
      </Typography>
      </Stack>
      <Typography variant="subtitle2">
        Contact me via <a href="mailto:matteo.scanna1999@gmail.com">email</a> or PEC (<i>matteo.scannavini@pecgiornalisti.it</i>). You also find me on:
      </Typography>
      <Stack direction="row" gap={3}>
        <a href="https://www.linkedin.com/in/matteo-scannavini/" target="_blank">
          <Avatar sx={{ bgcolor: "#0077b5" }}><LinkedInIcon sx={{ color: "white" }} />
        </Avatar></a>
        <a href="https://twitter.com/MatteoScannavi4" target="_blank">
          <Avatar sx={{ bgcolor: "#55acee" }}><TwitterIcon sx={{ color: "white" }} /></Avatar>
        </a>
        <a href="https://www.facebook.com/matteo.scanna.7" target="_blank">
          <Avatar sx={{ bgcolor: "#3b5998" }}><FacebookIcon sx={{ color: "white" }} /></Avatar>
        </a>
        <a href="https://www.instagram.com/matteoscanna/" target="_blank">
        <Box sx={{width: 36, height: 36}}>
          <Image  
            alt="instagram icon"
            src="/images/instagram.svg"
            width={"100%"}
            height={"100%"}
          />
        </Box>
        </a>
      </Stack>
    </Box>
  )
}
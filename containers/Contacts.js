import {
  Box,
  Typography,
  Stack
} from "@mui/material"

import Image from "next/image"
export default function Contacts(){
  return (
    <Box>
      <Stack direction="row">
        <Box sx={{width: 40, height: 40}}>
          <Image  
            id="gecko"
            alt="Matteo Scannavini"
            src="/images/gecko.svg"
            width={"100%"}
            height={"100%"}
          />
        </Box>
      <Typography variant="h2">
        Get in touch
      </Typography>
      </Stack>
      <Typography>
      I am definitely not a social media lover, but still you can contact me via email, PEC or on 
-	Inkedin
-	Instagram
-	Facebook
      </Typography>
    </Box>
  )
}
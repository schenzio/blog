import {
  Box,
  Typography
} from "@mui/material"

import Image from "next/image"
//import {InfoIcon as Info} from "@mui/icons-material"
import Carousel from "better-react-carousel"

export default function Articles({
  articles=[]
}) {
  return (
    <Box component="section">
      <Typography variant="h2">
        Some stuff I wrote
      </Typography>
      <Typography>
      I have started writing articles when I was 16 years old and since December 2020 I am enrolled in the Order of publicist journalists of Emilia-Romagna. 
      Here's a selection of my pieces.
      </Typography>
      <Carousel cols={4} rows={1} gap={1} loop>
      {articles.map(a => (
      <Carousel.Item key={a.id}>
        <Image
          src={"/../public/images/"+a.img}
          alt={"pic of "+a.title}
          width={"100%"}
          height={"100%"}
        />
        </Carousel.Item>
      ))}  
    </Carousel>
  </Box>
  )
}
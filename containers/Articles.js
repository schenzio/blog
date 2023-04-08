import {
  ImageList, 
  ImageListItem,
  ImageListItemBar,
  IconButton
} from "@mui/material"

import Image from "next/image"
//import {InfoIcon as Info} from "@mui/icons-material"
import Carousel from "better-react-carousel"

export default function Articles({
  articles=[]
}) {
  return (
    <Carousel cols={5} rows={2} gap={1} loop>
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
  )
}
import {
  ImageList, 
  ImageListItem,
  ImageListItemBar,
  IconButton
} from "@mui/material"
  
import Image from "next/image"
//import {InfoIcon as Info} from "@mui/icons-material"
import Carousel from "better-react-carousel"

export default function WebApps({
  webApps=[]
}) {
  return (
    <Carousel cols={2} rows={1} gap={1} loop>
      {webApps.map(wa => (
        <Carousel.Item key={wa.id}>
          <Image
          src={"/../public/images/"+wa.img}
          alt={"pic of "+wa.title}
          width={"100%"}
          height={"100%"}
        />
        </Carousel.Item>
      ))}  
    </Carousel>
    )
  }
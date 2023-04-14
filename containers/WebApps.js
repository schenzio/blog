import {
  ImageList, 
  ImageListItem,
  ImageListItemBar,
  IconButton,
  Box, 
  Typography,
  Card, 
  CardActionArea,
  CardContent, 
  CardMedia,
  Stack
} from "@mui/material"
import LaptopRoundedIcon from '@mui/icons-material/LaptopRounded';
import Image from "next/image"
//import {InfoIcon as Info} from "@mui/icons-material"
import Carousel from "better-react-carousel"
import { LaptopRounded } from "@mui/icons-material"

export default function WebApps({
  webApps=[]
}) {
  return (
    <Box>
     <Stack direction="row">
        <LaptopRounded fontSize="large" />
        <Typography variant="h2">
          Web apps
        </Typography>
      </Stack> 
      <Typography variant="subtitle2">
        A collection of the projects I have worked on with <a href="https://www.dataninja.it/" target="_blank">Dataninja</a> and during my bachelor in Digital Humanities
      </Typography>
      <Carousel cols={2} autoplay={3000} loop>
        {webApps.map(wa => (
          <Carousel.Item key={wa.id}>
            <Card sx={{ maxWidth: 345, maxHeight: 333}}>
              <a href={wa.url} target="_blank">
                <CardMedia
                  component="img"
                  src={"/images/"+wa.img}
                  alt={wa.alt}
                  height={200}
                >
                </CardMedia>
                <CardContent>
                  <Typography gutterBottom variant="h3">
                    {wa.title}
                  </Typography>
                  <Typography variant="body2">
                    {wa.description}
                  </Typography>
                </CardContent>
              </a>
            </Card>
          </Carousel.Item>
        ))}  
      </Carousel>
    </Box>
    )
  }
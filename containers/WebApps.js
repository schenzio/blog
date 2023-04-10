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
  CardMedia
} from "@mui/material"
  
import Image from "next/image"
//import {InfoIcon as Info} from "@mui/icons-material"
import Carousel from "better-react-carousel"
import { AddAPhoto } from "@mui/icons-material"

export default function WebApps({
  webApps=[]
}) {
  return (
    <Box>
      <Typography variant="h2">
        Some stuff I wrote with Javascript
      </Typography>
      <Typography variant="subtitle2">
        A collection of the web projects I have worked on with Dataninja and during my bachelor in Digital Humanities
      </Typography>
      <Carousel cols={2} rows={1} loop>
        {webApps.map(wa => (
          <Carousel.Item key={wa.id}>
            <Card sx={{ maxWidth: 345,  }}>
              <a href={wa.url}>
              <CardMedia
                component="img"
                src={"/../public/images/"+wa.img}
                alt={wa.alt} 
              >
              </CardMedia>
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {wa.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
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
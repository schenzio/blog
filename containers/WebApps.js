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

export default function WebApps({
  webApps=[]
}) {
  return (
    <Box>
      <Typography variant="h2">
        Some stuff I wrote with Javascript
      </Typography>
      <Typography>
        A collection of the web projects I have worked on with Dataninja and during my bachelor in Digital Humanities
      </Typography>
      <Carousel cols={2} rows={1} gap={1} loop>
        {webApps.map(wa => (
          <Carousel.Item key={wa.id}>
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                component="picture"
              >
                <Image
                  src={"/../public/images/"+wa.img}
                  alt={"pic of "+wa.title}
                  width={"100%"}
                  height={"100%"}
                />
              </CardMedia>
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {wa.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {wa.description}
                </Typography>
              </CardContent>
            </Card>
          </Carousel.Item>
        ))}  
      </Carousel>
    </Box>
    )
  }
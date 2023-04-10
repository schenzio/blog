import {
  Box,
  Typography,
  Card,
  CardMedia, 
  CardContent
} from "@mui/material"

import Carousel from "better-react-carousel"

export default function Articles({
  articles=[]
}) {
  return (
    <Box component="section" id="articles">
      <Typography variant="h2">
        Some stuff I wrote
      </Typography>
      <Typography variant="subtile2">
        I have started writing articles when I was 16 and since December 2020 I am enrolled in the Order of publicist journalists of Emilia-Romagna. 
        Here's a selection of my pieces.
      </Typography>
      <Carousel cols={3} rows={1} loop>
        {articles.map(a => (
          <Carousel.Item key={a.id}>
            <Card sx={{ maxWidth: 250, height: {xs: "fit-content", sm: 320}}}>
              <a href={a.url}>
                <CardMedia
                  component="img"
                  src={"/images/"+a.img}
                  alt={a.alt} 
                  height={180}
                >
                </CardMedia>
                <CardContent>
                  <Typography variant="h4" component="h3">
                    {a.title}
                  </Typography>
                  <Typography variant="body2">
                    {a.magazine}
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
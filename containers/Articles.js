import {
  Box,
  Typography,
  Card,
  CardMedia, 
  CardContent,
  Stack
} from "@mui/material"

import Carousel from "better-react-carousel"
import ModeEditOutlineRoundedIcon from '@mui/icons-material/ModeEditOutlineRounded';

export default function Articles({
  articles=[]
}) {
  return (
    <Box component="section" id="articles">
      <Stack direction="row">
        <ModeEditOutlineRoundedIcon fontSize="large" />
        <Typography variant="h2">
          Articles
        </Typography>
      </Stack>
      <Typography variant="subtitle2">
        I have started writing articles when I was 16 and since December 2020 I am enrolled in the <a href="https://odg.bo.it/">Order of journalists of 
        Emilia-Romagna</a>. Here's a selection of my pieces.
      </Typography>
      <Carousel cols={3} autoplay={3000} loop>
        {articles.map(a => (
          <Carousel.Item key={a.id}>
            <Card sx={{ maxWidth: 250 }}>
              <a href={a.url} target="_blank">
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
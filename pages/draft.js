import Head from 'next/head'
import Link from 'next/link'
import {
  Container,
  Typography,
  Grid
} from "@mui/material"
import Articles from '../containers/Articles'
import WebApps from '../containers/WebApps'
import articles from "/pages/portfolio/articles.json"
import webApps from '../pages/portfolio/web-apps.json'

export default function Home({
  articles=[],
  webApps=[]
}) {
  return (
    <Container maxWidth="lg">
      <Typography variant="h1">
        Matteo Scannavini
      </Typography>
      <Typography variant="subtitle1">
        Hi, I'm your friendly neighrborhood tech journalist
      </Typography>
      <Typography>
      My name is Matteo Scannavini, I am a freelance journalist and web developer. 
      Born in Bologna in 1999, my studies took me first to Pisa, for a bachelor degree in Digital Humanities, and then to Sweden, for 
      a master programme in Investigative Journalism at Gothenburgh University. 
      </Typography>
      <Typography>
      I am keen on slow journalism, especially when mixed with data analysis and story telling. When I do articles or web apps, I put them there.
      In the rest of my time, I am usually enjoying a craft beer with good friends.
      </Typography>
      <Typography variant="h2">
        Some stuff I wrote
      </Typography>
      <Typography>
      I have started writing articles when I was 16 years old and since December 2020 I am enrolled in the Order of publicist journalists of Emilia-Romagna. 
      Here's a selection of my pieces.
      </Typography>
      <Articles articles={articles} />
      <Typography variant="h2">
        Some stuff I wrote with Javascript
      </Typography>
        A collection of the web projects I have worked on with Dataninja and during my bachelor in Digital Humanities
        <WebApps webApps={webApps} />
      <Typography variant="h2">
        Get in touch
      </Typography>
      <Typography>
      I am definitely not a social media lover, but still you can contact me via email, PEC or on 
-	Inkedin
-	Instagram
-	Facebook
      </Typography>
    </Container>
  )
}

export async function getStaticProps(){
 return {
   props: {
     articles: articles,
     webApps: webApps
   }
 }
}     
          

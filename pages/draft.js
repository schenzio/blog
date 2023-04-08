import Head from 'next/head'
import Link from 'next/link'
import {
  Container,
  Typography,
  Grid,
  Stack
} from "@mui/material"
import Intro from '../containers/Intro'
import Articles from '../containers/Articles'
import WebApps from '../containers/WebApps'
import Contacts from '../containers/Contacts'

import articles from "/pages/portfolio/articles.json"
import webApps from '../pages/portfolio/web-apps.json'

export default function Home({
  articles=[],
  webApps=[]
}) {
  return (
    <Container maxWidth="xl" component="main">
      <Stack gap={5}>
        <Intro />
        <Articles articles={articles} />
        <WebApps webApps={webApps} />
        <Contacts />
      </Stack>
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
          

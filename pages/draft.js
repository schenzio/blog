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
import SectionWrapper from '../containers/SectionWrapper'

import articles from "/pages/portfolio/articles.json"
import webApps from '../pages/portfolio/web-apps.json'

export default function Home({
  articles=[],
  webApps=[]
}) {
  return (
    <Stack component="main" gap={5}>
      <SectionWrapper>
        <Intro />
      </SectionWrapper>
      <SectionWrapper>
        <Articles articles={articles} />
      </SectionWrapper>
      <SectionWrapper>
        <WebApps webApps={webApps} />
      </SectionWrapper>
      <SectionWrapper>
        <Contacts />
      </SectionWrapper> 
    </Stack>
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
          

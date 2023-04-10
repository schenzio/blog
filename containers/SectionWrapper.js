import {
  Container,
} from '@mui/material'

export default function SectionWrapper({children}) {
  return (
    <Container 
      component="section"
      disableGutters 
      maxWidth={false} 
      sx={{
        bgcolor: "rgb(23 27 27 / 70%)",
        marginTop: "15vh"
      }}
    >
      <Container maxWidth="md">
        {children}
      </Container>
    </Container>
  )
}

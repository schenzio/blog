import {
  Container,
} from '@mui/material'
import { defaultBackGroundColor } from '../styles/utils/theme'

export default function SectionWrapper({children}) {
  return (
    <Container 
      component="section"
      disableGutters 
      maxWidth={false} 
      sx={{
        bgcolor: defaultBackGroundColor,
        marginTop: "17vh",
        paddingTop: theme => theme.spacing(5),
        paddingBottom: theme => theme.spacing(5)
      }}
    >
      <Container maxWidth="md">
        {children}
      </Container>
    </Container>
  )
}

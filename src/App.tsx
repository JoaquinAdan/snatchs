import { Box, Card, CardActions, CardContent, CardMedia, IconButton, Typography } from '@mui/material'
import CountUp from 'react-countup'
import { FaInstagram, FaTiktok, FaYoutube } from 'react-icons/fa'
import { SiKick } from 'react-icons/si'

function App() {
  const diasTranscurridosEnElAño = () => {
    const ahora = new Date()
    const inicioDelAño = new Date(ahora.getFullYear(), 0, 1)
    const diferencia = Number(ahora) - Number(inicioDelAño)
    return Math.floor(diferencia / (1000 * 60 * 60 * 24)) + 1
  }
  const diasTranscurridos = diasTranscurridosEnElAño()
  const snatchsAcumulados = (diasTranscurridos * (diasTranscurridos - 1)) / 2 + diasTranscurridos
  return (
    <Box sx={{ width: '100vw', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <Card sx={{ width: { xs: '95vw', md: '350px' }, maxWidth: '370px' }}>
        <CardMedia
          component='img'
          height='140'
          image='/cholo_snatch.jpg'
          alt='Cholo posando para snatch'
          sx={{ objectPosition: 'top' }}
        />
        <CardContent>
          <Box>
            <Typography gutterBottom variant='h5' className='cover' component='div'>
              #Retosnatch365
            </Typography>
          </Box>
          <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Typography variant='body2' sx={{ color: 'text.secondary' }}>
              Hoy:
            </Typography>
            <Typography variant='body2' sx={{ color: 'text.secondary', fontWeight: 'bold' }}>
              <CountUp end={diasTranscurridos} duration={3} /> Snatchs
            </Typography>
          </Box>
          <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Typography variant='body2' sx={{ color: 'text.secondary' }}>
              Acumulados:
            </Typography>
            <Typography variant='body2' sx={{ color: 'text.secondary', fontWeight: 'bold' }}>
              <CountUp end={snatchsAcumulados} duration={3} /> Snatchs
            </Typography>
          </Box>
        </CardContent>
        <CardActions sx={{ justifyContent: 'center' }}>
          <Box sx={{ display: 'flex', gap: 1 }}>
            <IconButton aria-label='tiktok'>
              <FaTiktok />
            </IconButton>
            <IconButton href='https://www.instagram.com/chololgi/' target='_blank' aria-label='instagram'>
              <FaInstagram />
            </IconButton>
            <IconButton aria-label='youtube'>
              <FaYoutube />
            </IconButton>
            <IconButton aria-label='kick'>
              <SiKick />
            </IconButton>
          </Box>
        </CardActions>
      </Card>
    </Box>
  )
}

export default App

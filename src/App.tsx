import { Box, Card, CardActions, CardContent, CardMedia, Divider, IconButton, Typography } from '@mui/material'
import CountUp from 'react-countup'
import { FaInstagram, FaTiktok, FaYoutube, FaPaypal } from 'react-icons/fa'
import { SiKick, SiMercadopago } from 'react-icons/si'
import { useLocation } from 'react-router-dom'

function App() {
  const location = useLocation()
  const searchParams = new URLSearchParams(location.search)
  const extra = searchParams.get('extra')

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
        <CardContent sx={{ pb: 0 }}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Typography gutterBottom variant='h5' className='cover' component='div'>
              #Retosnatch365
            </Typography>
            <Typography variant='body2' sx={{ color: 'text.secondary' }}>
              {new Date().toLocaleDateString()}
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
          {extra && (
            <Box sx={{ display: 'flex', justifyContent: 'flex-end', pr: 3, mt: "-5px" }}>
              <Typography variant='body2' sx={{ color: 'text.secondary', fontWeight: 'bold' }}>
                (+{extra})
              </Typography>
            </Box>
          )}
        </CardContent>
        <CardActions sx={{ justifyContent: 'center', flexDirection: 'column' }}>
          <Box sx={{ display: 'flex', gap: 2 }}>
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <Typography sx={{ fontSize: 10, mb: '-10px', color: '#555' }}>Tiktok</Typography>
              <IconButton href='https://www.tiktok.com/@chololgi?_t=ZM-8tlZg8Ctfks&_r=1' target='_blank' aria-label='tiktok'>
                <FaTiktok color='#25282c' />
              </IconButton>
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <Typography sx={{ fontSize: 10, mb: '-10px', color: '#555' }}>Instagram</Typography>
              <IconButton href='https://www.instagram.com/chololgi/' target='_blank' aria-label='instagram'>
                <FaInstagram color='#d6577f' />
              </IconButton>
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <Typography sx={{ fontSize: 10, mb: '-10px', color: '#555' }}>Youtube</Typography>
              <IconButton href='https://m.youtube.com/results?search_query=Chololgi' target='_blank' aria-label='youtube'>
                <FaYoutube color='#b24136' />
              </IconButton>
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <Typography sx={{ fontSize: 10, mb: '-10px', color: '#555' }}>Kick</Typography>
              <IconButton href='https://kick.com/chololgi' target='_blank' aria-label='kick'>
                <SiKick color='#8ff85e' />
              </IconButton>
            </Box>
          </Box>
          <Divider sx={{ width: '185px' }} />
          <Box sx={{ display: 'flex', gap: 2 }}>
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <Typography sx={{ fontSize: 10, mb: '-10px', color: '#555' }}>Mercado pago</Typography>
              <IconButton href='http://link.mercadopago.com.ar/chololgi' target='_blank' aria-label='mercado pago'>
                <SiMercadopago color='#5f9cdc' />
              </IconButton>
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <Typography sx={{ fontSize: 10, mb: '-10px', color: '#555' }}>Paypal</Typography>
              <IconButton
                href='https://paypal.me/sircholoLM?country.x=AR&locale.x=es_XC'
                target='_blank'
                aria-label='paypal'
              >
                <FaPaypal color='#192164' />
              </IconButton>
            </Box>
          </Box>
        </CardActions>
      </Card>
    </Box>
  )
}

export default App

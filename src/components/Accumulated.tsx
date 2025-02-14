import { Box, Typography } from '@mui/material'
import CountUp from 'react-countup'

const Accumulated = ({ number }: { number: number }) => {
  return (
    <Box
      sx={{
        width: '100%',
        background: '#111',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        position: 'absolute',
        height: '140px',
        top: 0,
        opacity: 0.8,
      }}
    >
      <Typography color='#fafafa'>Snatchs Acumulados</Typography>
      <Box
        sx={{
          background: '#111',
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Box sx={{ position: 'relative', width: '142px', height: '120px' }}>
          <Typography
            sx={{
              fontWeight: 700,
              fontSize: 60,
              opacity: 0.1,
              position: 'absolute',
              textAlign: 'center',
              right: 0,
              zIndex: 0,
              color: '#fff',
            }}
          >
            88888
          </Typography>
          <Typography
            sx={{
              fontWeight: 700,
              fontSize: 60,
              color: '#beff8d',
              position: 'absolute',
              textAlign: 'center',
              right: 0,
              zIndex: 1,
            }}
          >
            <CountUp end={number} duration={3} separator='' />
          </Typography>
        </Box>
      </Box>
    </Box>
  )
}

export default Accumulated

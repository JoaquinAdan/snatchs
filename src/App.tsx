import { Box } from '@mui/material'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import './App.css'
import MyCard from './components/MyCard'

const theme = createTheme({
  typography: {
    fontFamily: 'digital-7, sans-serif',
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 700,
  },
})

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ width: '100vw', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
        <MyCard />
      </Box>
    </ThemeProvider>
  )
}

export default App

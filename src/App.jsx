import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { ThemeProvider } from '@mui/material/styles'
import { CssBaseline, Box } from '@mui/material'
import AppRoutes from './components/layout/AppRoutes'
import LoadingScreen from './components/common/LoadingScreen'
import Header from './components/layout/Header'
import theme from './styles/theme'

function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 3000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <div className="App">
          {loading && <LoadingScreen />}
          <Header />
          <Box sx={{ pt: { xs: 7, md: 8 } }}>
            <AppRoutes />
          </Box>
        </div>
      </Router>
    </ThemeProvider>
  )
}

export default App

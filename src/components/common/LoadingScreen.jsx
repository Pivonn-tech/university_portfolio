import React, { useEffect, useState } from 'react'
import { Box, Typography, LinearProgress } from '@mui/material'
import { WorkspacePremium } from '@mui/icons-material'

const LoadingScreen = () => {
  const [progress, setProgress] = useState(0)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(timer)
          setTimeout(() => setLoading(false), 500)
          return 100
        }
        // Slower, more controlled progress - max 2% per interval
        const increment = Math.min(2, 100 - prev)
        return prev + increment
      })
    }, 100) // Slightly faster intervals but smaller increments

    return () => clearInterval(timer)
  }, [])

  if (!loading) return null

  return (
    <Box
      sx={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
        zIndex: 9999,
        fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif'
      }}
    >
      {/* Animated Logo */}
      <Box
        sx={{
          animation: 'pulse 2s infinite',
          textAlign: 'center',
          mb: 4
        }}
      >
        <WorkspacePremium 
          sx={{ 
            fontSize: 80, 
            color: '#2563eb',
            animation: 'rotate 3s linear infinite'
          }} 
        />
      </Box>

      {/* University Name */}
      <Typography 
        variant="h3" 
        sx={{ 
          fontWeight: 'bold', 
          mb: 2,
          background: 'linear-gradient(45deg, #2563eb, #7c3aed)',
          backgroundClip: 'text',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent'
        }}
      >
        ONNLY-TECH UNIVERSITY
      </Typography>

      {/* Loading Text */}
      <Typography 
        variant="h6" 
        sx={{ 
          opacity: 0.8, 
          mb: 4,
          animation: 'fadeInOut 2s infinite'
        }}
      >
        Preparing your future in technology...
      </Typography>

      {/* Progress Bar */}
      <Box sx={{ width: '300px', mb: 2 }}>
        <LinearProgress 
          variant="determinate" 
          value={progress} 
          sx={{
            height: 8,
            borderRadius: 4,
            bgcolor: 'rgba(255,255,255,0.1)',
            '& .MuiLinearProgress-bar': {
              bgcolor: '#2563eb',
              borderRadius: 4
            }
          }}
        />
      </Box>

      {/* Progress Percentage */}
      <Typography variant="body2" sx={{ opacity: 0.7 }}>
        {Math.min(progress, 100)}%
      </Typography>

      <style>
        {`
          @keyframes pulse {
            0%, 100% { transform: scale(1); }
            50% { transform: scale(1.05); }
          }
          @keyframes rotate {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
          @keyframes fadeInOut {
            0%, 100% { opacity: 0.7; }
            50% { opacity: 1; }
          }
        `}
      </style>
    </Box>
  )
}

export default LoadingScreen

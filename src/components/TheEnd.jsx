import React from 'react'
import { Box, Typography, Paper } from '@mui/material'
import FavoriteIcon from '@mui/icons-material/Favorite'

const TheEnd = ({mode}) => {
  return (
    <Box sx={{ 
      height: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      py: 3,
      px: 2,
      background: mode === 'dark' 
        ? 'linear-gradient(135deg, #2c3e50 0%, #3498db 100%)'
        : 'linear-gradient(135deg, #00AE72 0%, #88e7c5 100%)',
      backgroundSize: '400% 400%',
      animation: 'gradient 10s ease infinite',
      '@keyframes gradient': {
        '0%': {
          backgroundPosition: '0% 50%'
        },
        '50%': {
          backgroundPosition: '100% 50%'
        },
        '100%': {
          backgroundPosition: '0% 50%'
        }
      }
    }}>
      <Paper
        elevation={12}
        sx={{
          p: 4,
          maxWidth: 600,
          width: '100%',
          background: mode === 'dark' 
            ? 'linear-gradient(145deg, rgba(255,255,255,0.95) 0%, rgba(236,240,241,0.9) 100%)'
            : 'linear-gradient(145deg, rgba(255,255,255,0.95) 0%, rgba(236,240,241,0.9) 100%)',
          borderRadius: 5,
          textAlign: 'center',
          backdropFilter: 'blur(20px)',
          boxShadow: mode === 'dark' 
            ? '0 8px 32px rgba(0,0,0,0.2), inset 0 0 32px rgba(255,255,255,0.1)'
            : '0 8px 32px rgba(0,0,0,0.1), inset 0 0 32px rgba(255,255,255,0.2)',
          transition: 'all 0.3s ease-in-out',
          '&:hover': {
            transform: 'translateY(-5px) scale(1.02)',
            boxShadow: mode === 'dark' 
              ? '0 15px 45px rgba(0,0,0,0.3), inset 0 0 45px rgba(255,255,255,0.15)'
              : '0 15px 45px rgba(0,0,0,0.15), inset 0 0 45px rgba(255,255,255,0.25)'
          }
        }}
      >
        <Typography
          variant="h4"
          sx={{
            mb: 3,
            fontWeight: 'bold',
            color: () => mode === 'dark' ? '#2c3e50' : '#00AE72',
            fontSize: {xs: '1.5rem', md: '2rem'},
            textShadow: '2px 2px 4px rgba(0,0,0,0.05)',
            letterSpacing: '1px'
          }}
        >
          Thank You For Viewing My CV!
        </Typography>

        <Typography
          variant="body1" 
          sx={{
            mb: 4,
            color: () => mode === 'dark' ? '#34495e' : '#2c3e50',
            fontSize: {xs: '1rem', md: '1.1rem'},
            lineHeight: 1.6,
            fontStyle: 'italic'
          }}
        >
          I'm looking forward to the opportunity to discuss how I can contribute to your team.
        </Typography>

        <Box sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 1,
          color: () => mode === 'dark' ? '#34495e' : '#2c3e50',
          mb: 2
        }}>
          <Typography sx={{ fontSize: '1.1rem' }}>Made with</Typography>
          <FavoriteIcon 
            sx={{ 
              color: mode === 'dark' ? '#e74c3c' : '#00AE72',
              animation: 'pulse 1.5s infinite',
              '@keyframes pulse': {
                '0%': { transform: 'scale(1)' },
                '50%': { transform: 'scale(1.2)' },
                '100%': { transform: 'scale(1)' }
              }
            }}
          />
          <Typography sx={{ fontSize: '1.1rem' }}>using React & Material-UI</Typography>
        </Box>
        <Box sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 1,
          color: () => mode === 'dark' ? '#34495e' : '#2c3e50',
          mt: 1
        }}>
          <Typography sx={{ fontSize: '1.1rem' }}>Created by</Typography>
          <Typography 
            sx={{
              color: () => mode === 'dark' ? '#2c3e50' : '#00AE72', 
              fontWeight: 'bold',
              fontSize: '1.2rem',
              letterSpacing: '1px',
              textShadow: '1px 1px 2px rgba(0,0,0,0.05)',
              transition: 'all 0.3s ease',
              '&:hover': {
                transform: 'scale(1.05)'
              }
            }}
          >
            HUNG, LE DUONG
          </Typography>
        </Box>
      </Paper>
    </Box>
  )
}

export default TheEnd
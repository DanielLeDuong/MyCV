import React from 'react'
import { Box, Typography, Paper, Grid } from '@mui/material'
import SchoolIcon from '@mui/icons-material/School'

const Education = ({mode}) => {
  return (
    <Box sx={{ py: 6, px: 4 }}>
      <Typography 
        variant="h4" 
        sx={{ 
          mb: 5,
          display: 'flex',
          alignItems: 'center',
          gap: 2,
          
          fontWeight: 'bold',
          color:() => mode === 'dark' ? 'white' : '#00AE72'
        
        }}
      >
        <SchoolIcon fontSize="large" />
        Education
      </Typography>

      <Grid container spacing={4}>
        <Grid item xs={12} >
          

          <Box sx={{display:'flex', flexDirection:'column', gap:2}}>
            {/* Troy */}
            <Paper 
              elevation={6}
              sx={{
                p: 4,
                background: mode === 'dark' ? 'linear-gradient(145deg, #b4b3b3 0%, #f5f5f5 100%)' : 'linear-gradient(145deg, #ffffff 0%, #f5f5f5 100%)',
                borderRadius: 3,
                transition: 'transform 0.3s ease-in-out',
                '&:hover': {
                  transform: 'translateY(-5px)'
                }
              }}
            >
              <Typography 
                variant="h5" 
                sx={{ 
                  mb: 2,
                  fontWeight: 'bold',
                  
                  color:() => mode === 'dark' ? '#2c3e50' : '#00AE72'
                }}
              >
                Bachelor of Computer Science
              </Typography>
              <Typography 
                variant="h6" 
                sx={{
                  color: 'text.primary',
                  fontWeight: 'bold'
                }}
              >
                Troy University (Cancle)
              </Typography>
              <Typography 
                variant="subtitle1" 
                sx={{
                  
                  fontWeight: 'medium',
                  mb: 3,
                  color:() => mode === 'dark' ? '#2c3e50' : '#00AE72'
                }}
              >
                2019 - 2021
              </Typography>
              <Box sx={{ pl: 2, borderLeft: 3, borderColor: 'primary.main' }}>
                <Typography variant="body1" sx={{ mb: 1 }}>
                  • Relevant coursework: Data Structures, Algorithms, Web Development
                </Typography>
                <Typography variant="body1">
                  • GPA: 3.2/4.0
                </Typography>
              </Box>
            </Paper>

            {/* DTU */}
            <Paper 
              elevation={6}
              sx={{
                p: 4,
                background: () => mode === 'dark' ? 'linear-gradient(145deg, #b4b3b3 0%, #f5f5f5 100%)' : 'linear-gradient(145deg, #ffffff 0%, #f5f5f5 100%)',
                borderRadius: 3,
                transition: 'transform 0.3s ease-in-out',
                '&:hover': {
                  transform: 'translateY(-5px)'
                }
              }}
            >
              <Typography 
                variant="h5" 
                sx={{ 
                  mb: 2,
                  fontWeight: 'bold',
                  
                  color:() => mode === 'dark' ? '#2c3e50' : '#00AE72'
                }}
              >
                Bachelor of Software Engineering
              </Typography>
              <Typography 
                variant="h6" 
                sx={{
                  color: 'text.primary',
                  fontWeight: 'bold'
                }}
              >
                Duy Tan University
              </Typography>
              <Typography 
                variant="subtitle1" 
                sx={{
                  
                  fontWeight: 'medium',
                  mb: 3,
                  color:() => mode === 'dark' ? '#2c3e50' : '#00AE72'
                }}
              >
                2021 - 2025
              </Typography>
              <Box sx={{ pl: 2, borderLeft: 3, borderColor: 'primary.main' }}>
                <Typography variant="body1" sx={{ mb: 1 }}>
                  • Relevant coursework: Programming Languages, Data Structures and Algorithms, Software development processes, 
                  Software Testing,  Web application development
                </Typography>
                <Typography variant="body1">
                  • GPA: 3.0/4.0
                </Typography>
              </Box>
            </Paper>

          </Box>
        </Grid>
      </Grid>
    </Box>
  )
}

export default Education
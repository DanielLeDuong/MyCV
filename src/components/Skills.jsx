import React from 'react'
import { Box, Typography, Paper, Grid, LinearProgress, Chip, Avatar } from '@mui/material'
import CodeIcon from '@mui/icons-material/Code'
import StorageIcon from '@mui/icons-material/Storage'
import LanguageIcon from '@mui/icons-material/Language'
import BuildIcon from '@mui/icons-material/Build'

const Skills = ({mode}) => {
  const technicalSkills = [
    { name: 'HTML/CSS', level: 85 },
    { name: 'JavaScript', level: 80 }, 
    { name: 'ReactJS', level: 75 },
    { name: 'Material-UI', level: 70 }
  ]

  const backendSkills = [
    
  ]

  const otherSkills = [
    'Git',
    'Responsive Design', 
    'RESTful APIs',
    'Agile/Scrum',
    'Problem Solving',
    'Team Collaboration'
  ]

  const languages = [
    { name: 'English', level: 'Intermediate' },
    { name: 'Vietnamese', level: 'Native' }
  ]

  return (
    <Box sx={{ 
      height: '100vh',
      overflow: 'auto',
      py: 3,
      px: 2
    }}>
      <Typography
        variant="h4"
        sx={{
          mb: 3,
          display: 'flex',
          alignItems: 'center', 
          gap: 2,
          fontWeight: 'bold',
          color: () => mode === 'dark' ? 'white' : '#00AE72',
          fontSize: {xs: '1.8rem', md: '2.2rem'}
        }}
      >
        <CodeIcon fontSize="large" />
        Skills Overview
      </Typography>

      <Grid container spacing={2}>
        {/* Frontend Skills */}
        <Grid item xs={12} md={6}>
          <Paper
            elevation={6}
            sx={{
              p: 2,
              height: '100%',
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
                color: () => mode === 'dark' ? '#2c3e50' : '#00AE72',
                display: 'flex',
                alignItems: 'center',
                gap: 1,
                fontSize: {xs: '1.2rem', md: '1.4rem'}
              }}
            >
              <LanguageIcon /> Frontend Development
            </Typography>
            
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              {technicalSkills.map((skill, index) => (
                <Box key={index}>
                  <Typography
                    variant="h6"
                    sx={{
                      mb: 0.5,
                      fontWeight: 'bold',
                      color: () => mode === 'dark' ? '#2c3e50' : '#00AE72',
                      fontSize: {xs: '1rem', md: '1.1rem'}
                    }}
                  >
                    {skill.name}
                  </Typography>
                  <LinearProgress
                    variant="determinate"
                    value={skill.level}
                    sx={{
                      height: 8,
                      borderRadius: 5,
                      backgroundColor: 'rgba(0,0,0,0.1)',
                      '& .MuiLinearProgress-bar': {
                        backgroundColor: () => mode === 'dark' ? '#2c3e50' : '#00AE72',
                        borderRadius: 5
                      }
                    }}
                  />
                </Box>
              ))}
            </Box>
          </Paper>
        </Grid>

        {/* Backend Skills */}
        <Grid item xs={12} md={6}>
          <Paper
            elevation={6}
            sx={{
              p: 2,
              height: '100%',
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
                color: () => mode === 'dark' ? '#2c3e50' : '#00AE72',
                display: 'flex',
                alignItems: 'center',
                gap: 1,
                fontSize: {xs: '1.2rem', md: '1.4rem'}
              }}
            >
              <StorageIcon /> Backend Development
            </Typography>
            
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              {backendSkills.map((skill, index) => (
                <Box key={index}>
                  <Typography
                    variant="h6"
                    sx={{
                      mb: 0.5,
                      fontWeight: 'bold',
                      color: () => mode === 'dark' ? '#2c3e50' : '#00AE72',
                      fontSize: {xs: '1rem', md: '1.1rem'}
                    }}
                  >
                    {skill.name}
                  </Typography>
                  <LinearProgress
                    variant="determinate"
                    value={skill.level}
                    sx={{
                      height: 8,
                      borderRadius: 5,
                      backgroundColor: 'rgba(0,0,0,0.1)',
                      '& .MuiLinearProgress-bar': {
                        backgroundColor: () => mode === 'dark' ? '#2c3e50' : '#00AE72',
                        borderRadius: 5
                      }
                    }}
                  />
                </Box>
              ))}
            </Box>
          </Paper>
        </Grid>

        {/* Other Skills */}
        <Grid item xs={12} md={6}>
          <Paper
            elevation={6}
            sx={{
              p: 2,
              height: '100%',
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
                color: () => mode === 'dark' ? '#2c3e50' : '#00AE72',
                display: 'flex',
                alignItems: 'center',
                gap: 1,
                fontSize: {xs: '1.2rem', md: '1.4rem'}
              }}
            >
              <BuildIcon /> Other Skills
            </Typography>
            
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
              {otherSkills.map((skill, index) => (
                <Chip
                  key={index}
                  label={skill}
                  sx={{
                    backgroundColor: () => mode === 'dark' ? '#2c3e50' : '#00AE72',
                    color: 'white',
                    fontWeight: 'bold',
                    fontSize: '0.8rem',
                    p: 0.5
                  }}
                />
              ))}
            </Box>
          </Paper>
        </Grid>

        {/* Languages */}
        <Grid item xs={12} md={6}>
          <Paper
            elevation={6}
            sx={{
              p: 2,
              height: '100%',
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
                color: () => mode === 'dark' ? '#2c3e50' : '#00AE72',
                display: 'flex',
                alignItems: 'center',
                gap: 1,
                fontSize: {xs: '1.2rem', md: '1.4rem'}
              }}
            >
              <LanguageIcon /> Languages
            </Typography>
            
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
              {languages.map((lang, index) => (
                <Box
                  key={index}
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    p: 1.5,
                    borderRadius: 2,
                    backgroundColor: 'rgba(0,0,0,0.05)'
                  }}
                >
                  <Typography
                    sx={{
                      fontWeight: 'bold',
                      color: () => mode === 'dark' ? '#2c3e50' : '#00AE72',
                      fontSize: {xs: '0.9rem', md: '1rem'}
                    }}
                  >
                    {lang.name}
                  </Typography>
                  <Chip
                    label={lang.level}
                    sx={{
                      backgroundColor: () => mode === 'dark' ? '#2c3e50' : '#00AE72',
                      color: 'white',
                      fontSize: {xs: '0.8rem', md: '0.9rem'}
                    }}
                  />
                </Box>
              ))}
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  )
}

export default Skills
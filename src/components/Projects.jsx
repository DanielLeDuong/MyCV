import React, { useState } from 'react'
import { Box, Typography, Paper, Link, Dialog, IconButton, fabClasses, Avatar, Slide } from '@mui/material'
import GitHubIcon from '@mui/icons-material/GitHub'
import CloseIcon from '@mui/icons-material/Close'
import { useTheme } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'
import YouTubeIcon from '@mui/icons-material/YouTube'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

const Projects = ({mode}) => {
  const [open, setOpen] = useState(false)
  const [showComingSoon, setShowComingSoon] = useState(false)
  const theme = useTheme()
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'))

  const projects = [
    {
      title: "FlexFit Online",
      github: "https://github.com/DanielLeDuong/Capstone1",
      youtube: "https://www.youtube.com/embed/_6ECIK22UyY", 
      description: "FlexFit Online is a comprehensive fitness website designed to meet a wide range of user needs. Everyone can explore the site to discover effective workout routines and view the various classes offered by the gym. The website serves as a tool for users to efficiently manage their time and workout schedules. Additionally, it provides an opportunity for users to easily connect with personal trainers.",
      
      teamSize: "4 members",
      role: "Frontend Developer"
    }
  ]

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  const handleSlideChange = (swiper) => {
    if (swiper.activeIndex >= projects.length) {
      setShowComingSoon(true)
      setTimeout(() => {
        setShowComingSoon(false)
        swiper.slideTo(projects.length - 1)
      }, 2000)
    }
  }

  return (
    <Box sx={{ p: 5, minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <Swiper
        modules={[Navigation, Pagination]}
        navigation
        pagination={{ clickable: true }}
        onSlideChange={handleSlideChange}
        style={{ width: '100%', height: '100%' }}
      >
        {projects.map((project, index) => (
          <SwiperSlide key={index}>
            <Paper 
              elevation={6} 
              sx={{ 
                p: 5,
                maxWidth: 900,
                width: '100%',
                margin: '0 auto',
                background: mode === 'dark' 
                  ? 'linear-gradient(145deg, #2c3e50 0%, #34495e 100%)' 
                  : 'linear-gradient(145deg, #ffffff 0%, #f5f5f5 100%)',
                borderRadius: 4,
                transition: 'transform 0.3s ease-in-out',
                '&:hover': {
                  transform: 'scale(1.02)'
                }
              }}
            >
              <Typography 
                variant="h3" 
                sx={{ 
                  mb: 4, 
                  fontWeight: 800,
                  color: '#00AE72',
                  textAlign: 'center',
                  textTransform: 'uppercase',
                  letterSpacing: 2
                }}
              >
                {project.title}
              </Typography>

              <Box sx={{ 
                display: 'flex', 
                alignItems: 'center', 
                mb: 3,
                justifyContent: 'center'
              }}>
                <GitHubIcon sx={{ 
                  mr: 1,
                  fontSize: 30,
                  color: mode === 'dark' ? '#ecf0f1' : '#2c3e50'
                }} />
                <Link 
                  href={project.github}
                  target="_blank"
                  sx={{ 
                    textDecoration: 'none', 
                    color: mode === 'dark' ? '#ecf0f1' : '#2c3e50',
                    fontWeight: 'bold',
                    fontSize: '1.2rem',
                    transition: 'color 0.3s ease',
                    '&:hover': {
                      color: '#00AE72'
                    }
                  }}
                >
                  GitHub Repository
                </Link>
              </Box>

              <Box sx={{ mb: 4, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <Box
                  sx={{
                    width: '100%',
                    maxHeight: 400,
                    objectFit: 'cover',
                    borderRadius: 2,
                    overflow: 'hidden',
                    boxShadow: '0 4px 20px rgba(0,0,0,0.1)'
                  }}
                />
                <Box 
                  onClick={handleClickOpen} 
                  sx={{
                    display: 'flex', 
                    gap: 1, 
                    cursor: 'pointer',
                    mt: 2,
                    padding: '8px 16px',
                    borderRadius: 2,
                    backgroundColor: mode === 'dark' ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.05)',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      backgroundColor: mode === 'dark' ? 'rgba(255,255,255,0.2)' : 'rgba(0,0,0,0.1)',
                      transform: 'translateY(-2px)'
                    }
                  }}
                >
                  <YouTubeIcon sx={{color: '#ff0000', fontSize: 28}} />
                  <Typography sx={{ 
                    color: mode === 'dark' ? '#ecf0f1' : '#2c3e50',
                    fontWeight: 500
                  }}>
                    View Demo
                  </Typography>
                </Box>
                <Dialog
                  fullScreen={fullScreen}
                  open={open}
                  onClose={handleClose}
                  maxWidth="xl"
                  PaperProps={{
                    sx: {
                      width: '80%',
                      height: '80%',
                      maxWidth: 'none',
                      margin: 'auto',
                      borderRadius: 2,
                      overflow: 'hidden'
                    }
                  }}
                >
                  <Box sx={{ position: 'relative', width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', bgcolor: '#000' }}>
                    <IconButton
                      sx={{ 
                        position: 'absolute', 
                        right: 16, 
                        top: 16, 
                        color: 'white',
                        zIndex: 1,
                        '&:hover': {
                          backgroundColor: 'rgba(255,255,255,0.2)'
                        }
                      }}
                      onClick={handleClose}
                    >
                      <CloseIcon />
                    </IconButton>
                    <Box
                      component="iframe"
                      src={project.youtube}
                      sx={{
                        width: '100%',
                        height: '100%',
                        border: 0
                      }}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </Box>
                </Dialog>
              </Box>

              <Typography 
                variant="h5" 
                sx={{ 
                  mb: 3, 
                  fontWeight: 700,
                  color: mode === 'dark' ? '#ecf0f1' : '#2c3e50',
                  borderBottom: '2px solid #00AE72',
                  paddingBottom: 1
                }}
              >
                Project Description
              </Typography>
              <Typography sx={{ 
                mb: 4,
                color: mode === 'dark' ? '#ecf0f1' : '#2c3e50',
                lineHeight: 1.8,
                fontSize: '1.1rem',
                textAlign: 'justify'
              }}>
                {project.description}
              </Typography>

              <Box sx={{ 
                display: 'grid', 
                gridTemplateColumns: 'repeat(2, 1fr)',
                gap: 4,
                mt: 4
              }}>
                <Box sx={{ 
                  p: 3, 
                  borderRadius: 2,
                  backgroundColor: mode === 'dark' ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.02)'
                }}>
                  <Typography 
                    variant="h6" 
                    sx={{ 
                      fontWeight: 700,
                      color: mode === 'dark' ? '#ecf0f1' : '#2c3e50',
                      mb: 2
                    }}
                  >
                    Team Size
                  </Typography>
                  <Typography sx={{ 
                    color: mode === 'dark' ? '#ecf0f1' : '#2c3e50',
                    fontSize: '1.1rem'
                  }}>
                    {project.teamSize}
                  </Typography>
                </Box>

                <Box sx={{ 
                  p: 3, 
                  borderRadius: 2,
                  backgroundColor: mode === 'dark' ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.02)'
                }}>
                  <Typography 
                    variant="h6" 
                    sx={{ 
                      fontWeight: 700,
                      color: mode === 'dark' ? '#ecf0f1' : '#2c3e50',
                      mb: 2
                    }}
                  >
                    My Role
                  </Typography>
                  <Typography sx={{ 
                    color: mode === 'dark' ? '#ecf0f1' : '#2c3e50',
                    fontSize: '1.1rem'
                  }}>
                    {project.role}
                  </Typography>
                </Box>
              </Box>
            </Paper>
          </SwiperSlide>
        ))}

        <SwiperSlide>
          <Paper
            elevation={6}
            sx={{
              p: 5,
              maxWidth: 900,
              width: '100%',
              margin: '0 auto',
              height: '100%',
              background: mode === 'dark'
                ? 'linear-gradient(145deg, #2c3e50 0%, #34495e 100%)'
                : 'linear-gradient(145deg, #ffffff 0%, #f5f5f5 100%)',
              borderRadius: 4,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center'
            }}
          >
            <Typography
              variant="h2"
              sx={{
                fontWeight: 800,
                color: mode === 'dark' ? '#ecf0f1' : '#2c3e50',
                textAlign: 'center',
                textTransform: 'uppercase',
                letterSpacing: 2
              }}
            >
              Coming Soon!
            </Typography>
          </Paper>
        </SwiperSlide>
      </Swiper>
    </Box>
  )
}

export default Projects
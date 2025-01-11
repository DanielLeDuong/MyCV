import React, { useState } from 'react'
import { Box, Typography, Paper, Link, Dialog, IconButton } from '@mui/material'
import GitHubIcon from '@mui/icons-material/GitHub'
import CloseIcon from '@mui/icons-material/Close'
import { useTheme } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'

const Projects = () => {
  const [open, setOpen] = useState(false)
  const theme = useTheme()
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'))

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  return (
    <Box sx={{ p: 3 }}>
      <Paper elevation={3} sx={{ p: 4 }}>
        <Typography variant="h4" sx={{ mb: 3, fontWeight: 'bold' }}>
          FlexFit Online
        </Typography>

        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
          <GitHubIcon sx={{ mr: 1 }} />
          <Link 
            href="https://github.com/DanielLeDuong/Capstone1" 
            target="_blank"
            sx={{ textDecoration: 'none' }}
          >
            GitHub Repository
          </Link>
        </Box>

        <Box sx={{ mb: 3 }}>
          <Box
            component="img"
            src="/flexfit-preview.jpg" 
            alt="FlexFit Preview"
            sx={{
              width: '100%',
              maxHeight: 400,
              objectFit: 'cover',
              cursor: 'pointer',
              borderRadius: 1
            }}
            onClick={handleClickOpen}
          />
          
          <Dialog
            fullScreen={fullScreen}
            open={open}
            onClose={handleClose}
            maxWidth="xl"
            PaperProps={{
              sx: {
                width: '70%',
                height: '70%',
                maxWidth: 'none',
                margin: 'auto'
              }
            }}
          >
            <Box sx={{ position: 'relative', width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <IconButton
                sx={{ position: 'absolute', right: 8, top: 8, color: 'white', zIndex: 1 }}
                onClick={handleClose}
              >
                <CloseIcon />
              </IconButton>
              <Box
                component="iframe"
                src="https://www.youtube.com/embed/_6ECIK22UyY"
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

        <Typography variant="h6" sx={{ mb: 2, fontWeight: 'bold' }}>
          Project Description
        </Typography>
        <Typography sx={{ mb: 3 }}>
          FlexFit Online is a fitness-focused e-commerce platform that allows users to browse and purchase fitness equipment, 
          book training sessions, and access workout plans. The platform features a responsive design, user authentication, 
          shopping cart functionality, and secure payment processing.
        </Typography>

        <Box sx={{ mb: 2 }}>
          <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
            Team Size
          </Typography>
          <Typography>4 members</Typography>
        </Box>

        <Box>
          <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
            Role
          </Typography>
          <Typography>Frontend Developer</Typography>
        </Box>
      </Paper>
    </Box>
  )
}

export default Projects
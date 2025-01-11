import { Avatar, Box, Button, Tooltip } from '@mui/material'
import React, { useState } from 'react'
import DarkLightMode from '../function/DarkLightMode'





const Navbar = ({mode, setMode, setActiveItem,activeItem}) => {
    

  return (
    <Box sx={{
        width:'20vw',
        height:'100vh',
        bgcolor: () => mode === 'dark' ? '#2c3e50' : '#00AE72',
        display:'flex',
        flexDirection:'column',
        gap:5
    }}>
        {/* Mode */}
        <Box sx={{
            p:2,
            display:'flex',
            justifyContent:'flex-end'
        }}>
            <DarkLightMode mode={mode} setMode={setMode} /> 
        </Box>

        {/* avatar */}
        <Box sx={{
            display:'flex',
            justifyContent:'center'
        }}>
            <Tooltip title='Hung, Le Duong'>
                <Avatar 
                    alt="Hung, Le Duong"
                    src="./avt2.jpg"
                    sx={{ width: 176, height: 176, }}
                />

            </Tooltip>
        </Box>

        {/* Component */}
        <Box sx={{
            display:'flex',
            justifyContent:'center',
            flexDirection:'column',
            
        }}>
        
            <Button 
            onClick={()=>setActiveItem('about')}
            sx={{
                color: () => mode === 'dark' ? 'white' : 'white',
                fontSize:'1.2rem',
                fontWeight:'bold',
                borderBottom: () => activeItem === 'about' ? '1px solid white' : '',
                borderTop: () => activeItem === 'about' ? '1px solid white' : '',
                borderRadius:0
                
            }}>ABOUT</Button>

            <Button 
            onClick={()=>setActiveItem('education')}
            sx={{
                color: () => mode === 'dark' ? 'white' : 'white',
                fontSize:'1.2rem',
                fontWeight:'bold',
                borderBottom: () => activeItem === 'education' ? '1px solid white' : '',
                borderTop: () => activeItem === 'education' ? '1px solid white' : '',
                borderRadius:0
                
            }}>EDUCATION</Button>

            <Button 
            onClick={()=>setActiveItem('skills')}
            sx={{
                color: () => mode === 'dark' ? 'white' : 'white',
                fontSize:'1.2rem',
                fontWeight:'bold',
                borderBottom: () => activeItem === 'skills' ? '1px solid white' : '',
                borderTop: () => activeItem === 'skills' ? '1px solid white' : '',
                borderRadius:0
                
            }}>SKILLS</Button>

            <Button 
            onClick={()=>setActiveItem('projects')}
            sx={{
                color: () => mode === 'dark' ? 'white' : 'white',
                fontSize:'1.2rem',
                fontWeight:'bold',
                borderBottom: () => activeItem === 'projects' ? '1px solid white' : '',
                borderTop: () => activeItem === 'projects' ? '1px solid white' : '',
                borderRadius:0
                
            }}>PROJECTS</Button>

            <Button 
            onClick={()=>setActiveItem('the-end')}
            sx={{
                color: () => mode === 'dark' ? 'white' : 'white',
                fontSize:'1.2rem',
                fontWeight:'bold',
                borderBottom: () => activeItem === 'the-end' ? '1px solid white' : '',
                borderTop: () => activeItem === 'the-end' ? '1px solid white' : '',
                borderRadius:0
                
            }}>THE END</Button>
        </Box>
        
        
    </Box>
  )
}

export default Navbar
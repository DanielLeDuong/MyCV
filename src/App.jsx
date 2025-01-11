import { useState } from 'react'
import { Box, Button, Container, Typography } from '@mui/material'
import './App.css'
import {Experimental_CssVarsProvider as CssVarsProvider, experimental_extendTheme as extendTheme, useColorScheme, } from '@mui/material/styles'
import Navbar from './homepage/Navbar'
import Content from './homepage/Content'



function App() {
  const {mode, setMode} = useColorScheme()
  const [activeItem, setActiveItem] = useState('about')
  return (
    <Container disableGutters maxWidth={false} sx={{height:'100vh', }}>
      <Box sx={{
        display:'flex'
      }}>
        <Navbar mode={mode} setMode={setMode} activeItem={activeItem} setActiveItem={setActiveItem}/>
        <Content mode={mode} setMode={setMode} activeItem={activeItem} setActiveItem={setActiveItem}/>

      </Box>
    </Container>
  )
}

export default App

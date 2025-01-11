import React from 'react'
import About from '../components/About'
import Skills from '../components/Skills'
import Education from '../components/Education'
import Projects from '../components/Projects'
import TheEnd from '../components/TheEnd'
import { Box } from '@mui/material'

const Content = ({activeItem, mode}) => {
  return (
    <Box sx={{
        width:'80vw',
        bgcolor:() => mode === 'dark' ? '#696969' : '#F5F5F5',
    }}>
        {activeItem === 'about' && <About mode={mode}/>}
        {activeItem === 'skills' && <Skills mode={mode} />}
        {activeItem === 'education' && <Education mode={mode} />}
        {activeItem === 'projects' && <Projects mode={mode}/>}
        {activeItem === 'the-end' && <TheEnd mode={mode}/>}

    </Box>
  )
}

export default Content
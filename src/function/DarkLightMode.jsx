import { Button, useColorScheme } from '@mui/material'
import React from 'react'
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';

const DarkLightMode = ({mode, setMode}) => {
    return (
        <Button  sx={{color:'text', minWidth:40, border:'1.5px solid white'}}
          onClick={()=>{
            setMode(mode === 'light' ? 'dark' : 'light')
          }}
        >{mode === 'light' ? <DarkModeIcon sx={{color:'white'}}/>: <LightModeIcon sx={{color:'white'}}/>}</Button>
    )
}

export default DarkLightMode
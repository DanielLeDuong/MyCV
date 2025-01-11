import React from 'react'
import { Box, Container, Typography, Grid, Paper, Link } from '@mui/material'
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import PhoneIcon from '@mui/icons-material/Phone';
import PetsIcon from '@mui/icons-material/Pets';
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';

const About = ({mode}) => {
  return (
    <Box sx={{
        display: 'flex',
        flexDirection: 'column',
        height: '100vh',
        background: mode === 'dark' ? 'linear-gradient(145deg, #696969 0%, #2c3e50 100%)' : 'linear-gradient(145deg, #ffffff 0%, #f5f5f5 100%)',
        borderRadius: '15px',
        boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
        backdropFilter: 'blur(4px)',
        transition: 'all 0.3s ease-in-out',
        overflow: 'auto'
    }}>
        {/* Top */}
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            color: () => mode === 'dark' ? 'white' : 'black',
            p: 3,
            borderBottom: () => mode === 'dark' ? '2px solid #2c3e50' : '2px solid #00AE72',
            animation: 'fadeIn 1s ease-in'
        }}>
            <Typography sx={{
                display: 'flex', 
                fontWeight: 'bolder', 
                fontSize: '3rem', 
                margin: '0',
                textShadow: '2px 2px 4px rgba(0,0,0,0.2)',
                letterSpacing: '2px'
            }}>
                LÊ DƯƠNG 
                <Box sx={{
                    marginLeft: '10px', 
                    color: () => mode === 'dark' ? '#2c3e50' : '#00AE72',
                    transition: 'color 0.3s ease'
                }}>
                    HƯNG
                </Box>
            </Typography>

            <Box sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 2,
                my: 1
            }}>
                <Typography sx={{
                    fontSize: '1.8rem', 
                    fontWeight: '500',
                    background: mode === 'dark' ? 'linear-gradient(45deg, #b8c0c7, #accfc3)' : 'linear-gradient(45deg, #00AE72, #2c3e50)',
                    backgroundClip: 'text',
                    WebkitBackgroundClip: 'text',
                    color: 'transparent',
                }}>
                    Intern Front-End Developer
                </Typography>
            </Box>

            <Box sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 2,
                transition: 'transform 0.3s ease',
                '&:hover': {
                    transform: 'translateX(10px)'
                }
            }}>
                <PhoneIcon sx={{
                    fontSize: '1.5rem', 
                    color: () => mode === 'dark' ? '#2c3e50' : '#00AE72',
                }}/>
                <Typography sx={{
                    fontSize: '1rem', 
                    fontWeight: 'bold', 
                    fontStyle: 'italic',
                    color: () => mode === 'dark' ? '#2c3e50' : '#00AE72'
                }}>
                    +84 796 695 994
                </Typography>
            </Box>

            <Box sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 2,
                transition: 'transform 0.3s ease',
                '&:hover': {
                    transform: 'translateX(10px)'
                }
            }}>
                <EmailIcon sx={{
                    fontSize: '1.5rem',
                    color: () => mode === 'dark' ? '#2c3e50' : '#00AE72'
                }}/>
                <Typography sx={{
                    fontSize: '1rem',
                    fontWeight: 'bold',
                    fontStyle: 'italic',
                    color: () => mode === 'dark' ? '#2c3e50' : '#00AE72'
                }}>
                    leduonghung1999@gmail.com
                </Typography>
            </Box>
        </Box>

        {/* body */}
        <Box sx={{
            p: 3,
            color: () => mode === 'dark' ? 'white' : 'black',
            flex: 1,
            overflow: 'auto'
        }}>
            <Typography sx={{
                fontWeight: '600',
                fontSize: '1.5rem',
                mb: 2,
                textShadow: '1px 1px 2px rgba(0,0,0,0.1)'
            }}>
                Welcome to my Online CV !
            </Typography>

            <Typography sx={{
                fontStyle: 'italic',
                fontWeight: 'bold',
                margin: '1rem 0',
                fontSize: '1.1rem',
                color: () => mode === 'dark' ? '#00AE72' : '#2c3e50',
                textAlign: '',
                padding: '15px',
                borderLeft: '4px solid',
                borderColor: () => mode === 'dark' ? '#00AE72' : '#2c3e50',
                background: 'rgba(255,255,255,0.1)',
                borderRadius: '0 10px 10px 0'
            }}>
                " Wherever you stumble, stand up there, for it is never too late to start! "
            </Typography>

            <Typography sx={{
                lineHeight: 1.6,
                fontSize: '1rem',
                textAlign: 'justify',
                padding: '15px',
                background: 'rgba(255,255,255,0.05)',
                borderRadius: '10px',
                boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
            }}>
                "I am a diligent, fairly sociable, and passionate individual in the field of software engineering. 
                Due to the ambiguity in the computer science major at Troy University, 
                I decided to switch to software engineering at Duy Tan University. 
                Although it took quite some time, I am now a senior student and have completed all courses. 
                While I may lack confidence in front of a crowd, I can communicate effectively with team members. 
                In the short term, I aim to seize opportunities to enhance my professional skills and further develop myself."
            </Typography>

            <Typography sx={{
                display: 'flex',
                alignItems: 'center',
                marginTop: '15px',
                fontSize: '1rem'
            }}>
                Morever, I am a cat lover Guy 
                <Typography sx={{
                    margin: '0 10px',
                    fontWeight: 'bold',
                    color: () => mode === 'dark' ? '#2c3e50' : '#00AE72',
                    display: 'flex',
                    alignItems: 'center',
                    gap: 1
                }}>
                    <PetsIcon sx={{ animation: 'bounce 1s infinite', fontSize: '1.2rem' }}/>
                    (๑´•.̫ • `๑)
                    <PetsIcon sx={{ animation: 'bounce 1s infinite', fontSize: '1.2rem' }}/>
                </Typography> 
            </Typography>
        </Box>

        {/* footer */}
        <Box sx={{
            color: () => mode === 'dark' ? 'white' : 'black',
            p: 3,
            display: 'flex',
            gap: 3,
            justifyContent: 'center',
            borderTop: () => mode === 'dark' ? '2px solid #2c3e50' : '2px solid #00AE72'
        }}>
            <Link href='https://github.com/DanielLeDuong' target="_blank" sx={{
                transition: 'transform 0.3s ease',
                '&:hover': { transform: 'scale(1.2)' }
            }}>
                <GitHubIcon sx={{
                    width: '35px',
                    height: '35px',
                    color: () => mode === 'dark' ? '#2c3e50' : '#00AE72'
                }}/>
            </Link>
            <Link href='https://www.facebook.com/hungreo.heorun' target="_blank" sx={{
                transition: 'transform 0.3s ease',
                '&:hover': { transform: 'scale(1.2)' }
            }}>
                <FacebookIcon sx={{
                    width: '35px',
                    height: '35px',
                    color: () => mode === 'dark' ? '#2c3e50' : '#00AE72'
                }}/>
            </Link>
            <Link href='#' sx={{
                transition: 'transform 0.3s ease',
                '&:hover': { transform: 'scale(1.2)' }
            }}>
                <TwitterIcon sx={{
                    width: '35px',
                    height: '35px',
                    color: () => mode === 'dark' ? '#2c3e50' : '#00AE72'
                }}/>
            </Link>
        </Box>
    </Box>
  )
}

export default About
import { Stack, Typography } from '@mui/material';
import React from 'react';
import './Homepage.css';

function Homepage() {
    return(
        <Stack className='homepageContainer'>

            <Typography variant='h5' color="primary">
            Full Stack Web Developer
            </Typography>
            <Typography>I develop satisfying human-computer interaction. Authentic and curious full stack web designer intent on building the future of humanity through code. Coding became my passion in electrical engineering school, which led to a series of coding boot camps and starting my career as a software engineer.</Typography>
            <Typography variant='body1'>I am driven and constantly inspired by the power of human connection. 
                Connecting people is about empathy, about authentic kindness, and curiosity to understand.
                This type of connection applies to the individual, groups, and large organizations alike. 
                My mission is to empower every human to connect, allowing our species to do more, together.
            </Typography>

        </Stack>
    )
}

export default Homepage;
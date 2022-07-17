import { Typography } from '@mui/material';
import React from 'react';
import './Homepage.css';

function Homepage() {
    return(
        <div className='homepageConainer'>
            <Typography variant='h2'>
                Portfolio 
            </Typography>
            <Typography variant='subtitle1'>
            Software Engineer | Electronics Engineer | Musician
            </Typography>
            <Typography variant='body1'>I am driven and constantly inspired by the power of human connection. 
                Connecting people is about empathy, about authentic kindness, and curiosity to understand.
                This type of connection applies to the individual, groups, and large organizations alike. 
                My mission is to empower every human to connect, allowing our species to do more, together.</Typography>
        </div>
    )
}

export default Homepage;
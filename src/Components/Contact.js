import { Typography } from '@mui/material';
import React from 'react';

function Contact(){
    return(
        <div>
            <Typography variant='h1'>Contact Me</Typography>
            <div className='contact'>
                <Typography variant='h2'>Phone:</Typography>
                <Typography variant='body1'>(360)606-8381</Typography>
            </div>
            <div className='contact'>
                <Typography variant='h2'>Email:</Typography>
                <Typography variant='body1'>MilesRaker@gmail.com</Typography>
            </div>
        </div>
    )
}

export default Contact;
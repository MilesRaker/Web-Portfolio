import React from 'react';
import ResumeImg from './images/ResumeImg.png';
import { Container } from '@mui/system';

function Resume(){
// todo: dynamically resize resume image
    return(
        <Container className="resumeContainer">
            <img src={ResumeImg} className="resumeImage" alt="Resume"/>
        </Container>
    )
}

export default Resume;
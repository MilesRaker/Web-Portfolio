import React from 'react';
import IsHomepage from './IsHomepage';
import ResumeImg from './images/ResumeImg.png';
import { Container } from '@mui/system';
import "./Resume.css";

function Resume(props){
// todo: dynamically resize resume image
    return(
        <Container className="resumeContainer">
            <img src={ResumeImg} className="resumeImage" alt="Resume"/>
            <IsHomepage setIsHomepage={props.setIsHomepage} />
        </Container>
    )
}

export default Resume;
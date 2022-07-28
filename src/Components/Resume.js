import React from 'react';
import ResumeImg from './images/ResumeImg.png';
import './Resume.css';

export default function Resume(){
    return(
        <div className="resumeContainer">
            <img src={ResumeImg} className="resumeImage" alt="Resume"/>
        </div>
    )
}
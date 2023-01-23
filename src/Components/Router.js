import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Homepage from './Homepage';
import customTheme from './ThemeProvider';
import TopBar from './TopBar';
import { Container, ThemeProvider } from '@mui/material/'
import Resume from './Resume';
import Values from './Values';
import Projects from './Projects';
import WebFont from 'webfontloader';
import {useEffect} from "react";

export default function Router (){
    /** load Google fonts into project from CDN using WebFont api */
    useEffect(() => {
        WebFont.load({
            google: {
                families: ['Quattrocento Sans', 'Varela']
            }
        });
    }, []);

    return(
        <Container id={"top-level-container"} >
            <ThemeProvider theme={customTheme} >
                <div className="routes">
                    <Routes >
                        <Route className="homepage" path='/' element={<Homepage />} />
                        <Route className="resume" path='/resume' element={<div><TopBar/><Resume/></div>} />
                        <Route className="projects" path='/projects' element={<div><TopBar/><Projects /></div>} />
                        <Route className="values" path='/values' element={<div><TopBar/><Values /></div>} />
                    </Routes>
                </div>

            </ThemeProvider>
        </Container>
    )
    
}
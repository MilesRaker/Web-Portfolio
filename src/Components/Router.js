import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Homepage from './Homepage';
import customTheme from './ThemeProvider';
import TopBar from './TopBar';
import { Container, ThemeProvider } from '@mui/material/'
import Resume from './Resume';
import Values from './Values';
import Projects from './Projects';

export default function Router (){

    return(
        <Container className="container" maxWidth="false">
            <ThemeProvider theme={customTheme} >
                <TopBar /> 

                <div className="routes">
                    <Routes >
                        <Route className="homepage" path='/' element={<Homepage />} />
                        <Route className="resume" path='/resume' element={<Resume />} />
                        <Route className="projects" path='/projects' element={<Projects />} />
                        <Route className="values" path='/values' element={<Values />} />
                    </Routes>
                </div>

            </ThemeProvider>
        </Container>
    )
    
}
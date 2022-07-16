import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Homepage from './Homepage';
import customTheme from './ThemeProvider';
import TopBar from './TopBar';
import { ThemeProvider } from '@mui/material/'
import Resume from './Resume';
import Contact from './Contact';
import Values from './Values';
import './Router.css';

const Router = () => (
    <div className="container">
        <ThemeProvider theme={customTheme} >
            <div className="topBar">
                <TopBar />
            </div>
            <div className="routes">
                <Routes >
                    <Route className="homepage" path='/' element={<Homepage />} />
                    <Route className="resume" path='/resume' element={<Resume />} />
                    <Route className="contact" path='/contact' element={<Contact />} />
                    <Route className="values" path='/values' element={<Values />} />
                </Routes>
            </div>
                
        </ThemeProvider>
    </div>
)


export default Router;
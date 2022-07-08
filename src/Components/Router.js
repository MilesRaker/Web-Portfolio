import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Homepage from './Homepage';
import customTheme from './ThemeProvider';
import TopBar from './TopBar';
import { ThemeProvider } from '@mui/material/'
import Resume from './Resume';
import Contact from './Contact';
import Values from './Values';
import Stack from '@mui/material/Stack';

const Router = () => (
    <div>
        <ThemeProvider theme={customTheme} >
            <div >
                <TopBar />
                <Routes>
                    <Route path='/' element={<Homepage />} />
                    <Route path='/resume' element={<Resume />} />
                    <Route path='/contact' element={<Contact />} />
                    <Route path='/values' element={<Values />} />
                </Routes>
            </div>
        </ThemeProvider>
    </div>
)


export default Router;
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Homepage from './Homepage';
import customTheme from './ThemeProvider';
import TopBar from './TopBar';
import { ThemeProvider } from '@mui/material/'

const Router = () => (
    <div>
        <ThemeProvider theme={customTheme} >
            <TopBar />
            <Routes>
                <Route path='/' element={<Homepage />} />
            </Routes>
        </ThemeProvider>
    </div>
)


export default Router;
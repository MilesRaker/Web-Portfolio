import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Homepage from './Homepage';
import customTheme from './ThemeProvider';
import TopBar from './TopBar';
import { Container, ThemeProvider } from '@mui/material/'
import Resume from './Resume';
import Contact from './Contact';
import Values from './Values';
import './Router.css';

function Router (){
    const [isHomepage, setIsHomepage] = React.useState(false);

    return(
    <Container className="container" maxWidth="false">
        <ThemeProvider theme={customTheme} >
            <TopBar isHomepage={isHomepage} /> 

            <div className="routes">
                <Routes >
                    <Route className="homepage" path='/' element={<Homepage setIsHomepage={setIsHomepage}/>} />
                    <Route className="resume" path='/resume' element={<Resume setIsHomepage={setIsHomepage}/>} />
                    <Route className="contact" path='/contact' element={<Contact setIsHomepage={setIsHomepage}/>} />
                    <Route className="values" path='/values' element={<Values setIsHomepage={setIsHomepage}/>} />
                </Routes>
            </div>

        </ThemeProvider>
    </Container>
)
    
}


export default Router;
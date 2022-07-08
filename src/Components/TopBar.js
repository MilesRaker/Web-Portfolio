import { AppBar, Tab, Tabs, Toolbar, Typography } from '@mui/material';
import React from 'react';
import { Link, Routes, Route } from 'react-router-dom';
import Logo from './Logo.png';


function TopBar(){ 

    return(
        <React.Fragment>
            <AppBar position='fixed'>
                <Toolbar>
                    <Link to='/'>
                        <img src={Logo} padding-right='100' alt='Rocket Idea Logo' Height='75'/>
                    </Link>
                
                    <Typography align='left' variant='h1'>Miles Raker Portfolio</Typography>

                    <Tabs 
                        sx={{ ml: "auto"}}
                        textColor="secondary"
                        indicatorColor="secondary"
                        aria-label="secondary tabs example"
                    >
                        <Link to='/resume'>
                            <Tab label="Resume" />
                        </Link>
                        <Link to='/values'>
                            <Tab  label="Values" />
                        </Link>
                        <Link to='/contact'>
                            <Tab label="Contact" />
                        </Link>
                        
                    </Tabs>
                </Toolbar>
            </AppBar>
        </React.Fragment>
    )
}

export default TopBar;
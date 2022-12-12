import { AppBar, Container, Stack, Toolbar, Typography } from '@mui/material';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo.png';
import NavTabsVertical from './NavTabsVertical';
import NavTabsHoriztonal from './NavTabsHorizontal';
import customTheme from "./ThemeProvider";

class TopBar extends Component{
    
    constructor(props){
        super(props);
        this.state = {
            windowWidth: 0,
            windowHeight: 0
        };
        this.updateDimensions = this.updateDimensions.bind(this);
    }

    componentDidMount() {
        this.updateDimensions();
        window.addEventListener("resize", this.updateDimensions);
    }

    componentWillUnmount(){
        window.removeEventListener("resize", this.updateDimensions);
    }

    updateDimensions() {
        let windowWidth = typeof window !== "undefined" ? window.innerWidth : 0;
        let windowHeight = typeof window !== "undefined" ? window.innerHeight : 0;

        this.setState({ windowWidth, windowHeight })
    }

    render(){
        const { windowWidth } = this.state;
        
        const styles = {
            showFullName: windowWidth > 975,
            showVerticalTabs: windowWidth < 725
        }

        return(

            <AppBar position='sticky' sx={{backgroundColor: customTheme.palette.grey.main}}>
                <Toolbar >

                    <Link to='/'>
                        <img src={Logo} height="75" alt='Rocket Idea Logo' />
                    </Link>

                    <Stack>
                        <Container>
                            {styles.showFullName ? (
                                <Typography sx={{textDecoration: 'underline', textDecorationColor: customTheme.palette.secondary.main}} align='left' noWrap='true' variant='h1'>Miles Raker</Typography>
                            ) : (
                                <Typography sx={{textDecoration: 'underline', textDecorationColor: customTheme.palette.secondary.main}} align='left' variant='h1'>Raker</Typography>
                            )}
                        </Container>
                        <Container>
                        {styles.showFullName ? (
                            <Typography align='left' sx={{pl: 2, fontFamily: 'Varela'}} noWrap='true' variant='subtitle1'>
                                MilesRaker@gmail.com | (360) 606-8381
                            </Typography>
                            ) : (
                            <Container>
                                <Typography align='center'  noWrap='true' variant='subtitle1'>
                                    MilesRaker@gmail.com
                                </Typography>
                                <Typography align='center'  noWrap='true' variant='subtitle1'>
                                    (360) 606-8381
                                </Typography>
                            </Container>
                            )}
                        </Container>

                    </Stack>
                    
                
                    <Container >                     
                        {styles.showVerticalTabs ? (
                            <NavTabsVertical />                        
                        ) : (             
                            <NavTabsHoriztonal />      
                        )}
                    </Container>


                </Toolbar>
            </AppBar>

        )
    }
}

export default TopBar;
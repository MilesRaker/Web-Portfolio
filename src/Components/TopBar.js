import { AppBar, Container, Stack, Toolbar, Typography } from '@mui/material';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo.png';
import NavTabsVertical from './NavTabsVertical';
import NavTabsHoriztonal from './NavTabsHorizontal';
import customTheme from "./ThemeProvider";

class TopBar extends Component{

    // working with window size in a React class
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
        const { windowWidth, windowHeight } = this.state;
        
        const styles = {
            showFullName: windowWidth > 850,
            showVerticalTabs: windowWidth <= 975 && windowWidth > 515,
            showHorizontalTabs: windowWidth > 975,
            showHorizontalTabsBelow: windowWidth <= 515,
            stickyPosition: windowHeight > 650
        }

        return(

            <AppBar position={styles.stickyPosition?'sticky':'relative'} sx={{backgroundColor: customTheme.palette.grey.A200}}>
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
                            {/* use these two lines to debug responsiveness
                            <Typography>Window Width: {windowWidth}</Typography>
                            <Typography>Window Height: {windowHeight}</Typography>*/}
                        </Container>
                        {styles.showHorizontalTabsBelow ? <NavTabsHoriztonal /> : null}
                    </Stack>
                    
                
                    <Container >                     
                        {styles.showVerticalTabs ? <NavTabsVertical /> : null }
                        {styles.showHorizontalTabs ? <NavTabsHoriztonal /> : null }
                    </Container>


                </Toolbar>
            </AppBar>

        )
    }
}

export default TopBar;
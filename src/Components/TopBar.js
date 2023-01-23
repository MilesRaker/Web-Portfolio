import { AppBar, Container, Stack, Toolbar, Typography } from '@mui/material';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo.png';
import NavTabsVertical from './Navigation_Components/NavTabsVertical';
import NavTabsHorizontal from './Navigation_Components/NavTabsHorizontal';
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
    };

    updateDimensions() {
        let windowWidth = typeof window !== "undefined" ? window.innerWidth : 0;
        let windowHeight = typeof window !== "undefined" ? window.innerHeight : 0;

        this.setState({ windowWidth, windowHeight })
    };



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

            <AppBar position={styles.stickyPosition?'sticky':'relative'} className={"top-bar"} sx={{backgroundColor: customTheme.palette.grey.A200, minWidth: 300}}>
                <Toolbar >

                    {styles.showHorizontalTabsBelow?null : (
                        <Link to='/'>
                            <img src={Logo} className={"top-bar-logo"} alt='Rocket Idea Logo' />
                        </Link>
                    )}

                    <Stack>
                        <Container>
                            {styles.showFullName ? (
                                <Typography className={"top-bar-name"} sx={{textDecoration: 'underline', textDecorationColor: customTheme.palette.secondary.main}} align='left' noWrap='true' variant='h1'>Miles Raker</Typography>
                            ) : (
                                <Typography className={"top-bar-name"} sx={{textDecoration: 'underline', textDecorationColor: customTheme.palette.secondary.main}} align='center' variant='h1'>Raker</Typography>
                            )}
                        </Container>

                        {/* <Container>
                        {styles.showFullName ? (
                            <div>
                                <Typography align='center' sx={{pl: 2, fontFamily: 'Varela'}} noWrap='true' variant='subtitle1'>
                                    <Mailto>MilesRaker@gmail.com</Mailto> | (360) 606-8381
                                </Typography>
                                <Typography align='center' sx={{pl: 2, fontFamily: 'Varela', pb: 1}} noWrap='true' variant='subtitle1'>
                                    <BsLinkedin/> <a href={"https://www.linkedin.com/in/milesraker/"} style={{paddingRight: 10}} target={"_blank"} >LinkedIn</a>
                                    <FaGithubSquare style={{paddingLeft: 10}}/> <a href="https://github.com/MilesRaker"  target={"_blank"} >GitHub</a>
                                    <span style={{paddingLeft: 10}}>Secret Clearance (Inactive)</span>
                                </Typography>
                            </div>
                            ) : (
                            <div>
                                <Typography align='center' sx={{pl: 2, fontFamily: 'Varela'}} noWrap='true' variant='subtitle1'>
                                    <Mailto>MilesRaker@gmail.com</Mailto>
                                </Typography>
                                <Typography align='center' sx={{pl: 2, fontFamily: 'Varela'}} noWrap='true' variant='subtitle1'>
                                    (360) 606-8381
                                </Typography>
                                <Typography align='center' sx={{pl: 2, fontFamily: 'Varela'}} noWrap='true' variant='subtitle1'>
                                    Secret Clearance (Inactive)
                                </Typography>
                                <Typography align='center' sx={{pl: 2, fontFamily: 'Varela', pb: 1}} noWrap='true' variant='subtitle1'>
                                    <BsLinkedin/> <a href={"https://www.linkedin.com/in/milesraker/"} style={{paddingRight: 10}} target={"_blank"} >LinkedIn</a>
                                    <FaGithubSquare style={{paddingLeft: 10}}/> <a href="https://github.com/MilesRaker"  target={"_blank"} >GitHub</a>
                                </Typography>
                            </div>
                            )}
                             use these two lines to debug responsiveness
                            <Typography>Window Width: {windowWidth}</Typography>
                            <Typography>Window Height: {windowHeight}</Typography>
                        </Container>*/}

                        {styles.showHorizontalTabsBelow ? <NavTabsHorizontal /> : null}
                    </Stack>
                    
                
                    <Container >                     
                        {styles.showVerticalTabs ? <NavTabsVertical /> : null }
                        {styles.showHorizontalTabs ? <NavTabsHorizontal /> : null }
                    </Container>


                </Toolbar>
            </AppBar>

        )
    }
}

export default TopBar;
import { AppBar, Container, Toolbar, Typography } from '@mui/material';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo.png';
import './TopBar.css';
import NavTabsVertical from './NavTabsVertical';
import NavTabsHoriztonal from './NavTabsHorizontal';


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

            <AppBar position='static' >
                <Toolbar >

                    <Link to='/'>
                        <img src={Logo} height="75" alt='Rocket Idea Logo' />
                    </Link>

                    <Container>
                        {styles.showFullName ? (
                            <Typography  align='left' noWrap='true' variant='h1'>Miles Raker</Typography>
                        ) : (
                            <Typography  align='left' variant='h1'>Raker</Typography>
                        )}
                    </Container>
                
                    <Container >
                        {/* <p>{ windowWidth }</p> */}
                        
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
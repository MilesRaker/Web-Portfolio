import { AppBar, Tab, Tabs, Toolbar, Typography } from '@mui/material';
import InfoIcon from '@mui/icons-material/Info';
import ContactPageIcon from '@mui/icons-material/ContactPage';
import AdjustIcon from '@mui/icons-material/Adjust';
import React, { Component } from 'react';
import { Link, Routes, Route } from 'react-router-dom';
import Logo from './Logo.png';
import './TopBar.css';

function LinkTab(props) {
    return (
      <Tab
        component="a"
        onClick={(event) => {
          event.preventDefault();
        }}
        {...props}
      />
    );
  }

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
            showFullName: windowWidth > 900,
            showVerticalTabs: windowWidth < 600
        }

       /*  const [value, setValue] = React.useState(0); */

/*         const handleChange = (event, newValue) => {
            setValue(newValue);
        }; */

        return(
        <React.Fragment>
            <AppBar position='fixed'>
                <Toolbar>
                    <Link to='/'>
                        <img src={Logo} className='logo' height="75" alt='Rocket Idea Logo' />
                    </Link>

                    {styles.showFullName ? (
                        <Typography align='left' variant='h1'>Miles Raker</Typography>
                    ) : (
                        <Typography align='left' variant='h1'>Raker</Typography>
                    )}
                    
                    <p>{ windowWidth }</p>
                    
                    {styles.showVerticalTabs ? (
                    <Tabs 
                       /*  value={value}  */
                        /* onChange={handleChange} */
                        sx={{ ml: "auto"}}
                        textColor="secondary"
                        indicatorColor="secondary"
                        aria-label="Navigation Tabs"
                        orientation="vertical"
                    >
                        <LinkTab label="Resume" href="/resume"/>
                        <LinkTab label="Values" href="/values"/>
                        <LinkTab label="Contact" href="/contact"/>

                        
                    </Tabs>
                    ) : (
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
                    )}

                </Toolbar>
            </AppBar>
        </React.Fragment>)
    }
}

export default TopBar;
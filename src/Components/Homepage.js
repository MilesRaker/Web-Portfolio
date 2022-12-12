import {Card, Paper, Stack, Typography} from '@mui/material';
import React, {useState} from 'react';
import './Homepage.css';
import NavTabsHoriztonal from "./NavTabsHorizontal";
import useWindowDimensions from "./useWindowDimensions";
import customTheme from "./ThemeProvider";
import NavTabsVertical from "./NavTabsVertical";




function Homepage() {
    const [ nameHover, setNameHover] = useState(false);
    const [ titleHover, setTitleHover] = useState(false);

    const { height, width } = useWindowDimensions();
    const nameSx = {
        display: 'block',
    }
    const nameHoverSx = {
        display: 'block',
        textDecoration: 'underline',
        textDecorationColor: customTheme.palette.secondary.main
    }

    const titleSx = {
        display: 'block',
        fontFamily: 'Varela',
        color: customTheme.palette.primary.main,

    }

    const titleHoverSx = {
        display: 'block',
        fontFamily: 'Varela',
        color: customTheme.palette.primary.main,
        textDecoration: 'underline',
        textDecorationColor: customTheme.palette.secondary.main
    }
    const navTabSx = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '90%',
        width: '90%',
        backgroundImage: `radial-gradient(#42A5F5, #FAFAFA)`
    }
    const paperSx = {
        width: width,
        height: height,
        backgroundColor: customTheme.palette.grey.A700,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    }
    const xyCenter = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '90%',
        width: '90%',
    }
    function nameIsHover(){
        return nameHover? nameHoverSx:nameSx;
    }

    function titleIsHover(){
        return titleHover? titleSx:titleHoverSx;
    }

    return(
        <Paper sx={paperSx}>
            <Card style={xyCenter}>
                <div style={xyCenter}>
                    <Typography onMouseEnter={() => setNameHover(true)}
                                onMouseLeave={() => setNameHover(false)}
                                sx={nameIsHover}
                                variant={'h1'}
                    id={'name'}>Miles Raker</Typography>
                </div>
                <div style={xyCenter}><Typography sx={titleIsHover}
                                                  variant={'h6'}
                                                  id={'title'}
                                                  onMouseEnter ={() => setTitleHover(false)}
                                                  onMouseLeave={() => setTitleHover(true)}>Full Stack Web Developer</Typography></div>
                <NavTabsHoriztonal sx={navTabSx}/>
            </Card>
        </Paper>
    )
}

export default Homepage;
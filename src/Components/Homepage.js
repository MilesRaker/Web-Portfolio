import {Card, Paper, Stack, Typography} from '@mui/material';
import React, {useState} from 'react';
import './Homepage.css';
import NavTabsHorizontal from "./Navigation_Components/NavTabsHorizontal";
import useWindowDimensions from "./useWindowDimensions";
import customTheme from "./ThemeProvider";
import NavTabsVertical from "./Navigation_Components/NavTabsVertical";




function Homepage() {
    const [ nameHover, setNameHover] = useState(false);
    const [ titleHover, setTitleHover] = useState(true);

    const { height, width } = useWindowDimensions();
    const nameSx = {
        display: 'block',
        textDecoration: 'underline',
        textDecorationColor: customTheme.palette.secondary.main,
        fontFamily: 'Varela',
        fontWeight: 'bold'
    }


    const hoverNavTabSx = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '90%',
        width: '90%',
        textDecoration: 'underline',
        textDecorationColor: customTheme.palette.secondary.main,
        boxShadow: 1
    }

    const titleHoverSx = {
        display: 'block',
        fontFamily: 'Varela',
        color: customTheme.palette.primary.main,
        textDecoration: 'underline',
        textDecorationColor: customTheme.palette.secondary.main,
        mx: 'auto',
    }
    const navTabSx = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '90%',
        width: '90%',
    }
    const paperSx = {
        height: height,
        backgroundColor: customTheme.palette.grey.A700,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    }

    const xyCenter = {
        display:'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '90%',
        width: '90%',
        margin: 'auto'
    }

    const xyCenterVertical = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '90%',
        width: '90%',
    }


    return(
        <Paper sx={paperSx}>
            <Card style={xyCenter}>
                <div>
                    <div>
                    <Typography
                        sx={nameSx}
                        variant={'h1'}
                        id={'name'}
                        align={'center'}>
                            Miles Raker
                    </Typography>
                    </div>
                    <div style={xyCenter}>
                        <Typography
                        sx={nameSx}
                        variant={'h6'}
                        id={'title'}
                        align={'center'}>
                            Full Stack Web Developer
                        </Typography>
                    </div>
                    <NavTabsHorizontal sx={hoverNavTabSx}/>
                </div>
            </Card>
        </Paper>
    )
}

export default Homepage;
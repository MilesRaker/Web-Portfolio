import {
    Typography,
    Container,
    Card,
    CardContent,
    CardActions,
    Button,
    Grid,
    ButtonGroup
} from '@mui/material';
import React from 'react';
import customTheme from "./ThemeProvider";
// import PortfolioPreview from "src/images/ReactPortfolio.jpg";

const headerSx = {
    fontFamily: 'Quattrocento Sans',
    textDecoration: 'underline',
    textDecorationColor: customTheme.palette.secondary.main,
}


export default function Projects() {
    const buttonSx = {
        color: "black", background: "light-blue", width: 125
    }

    const buttonGroupSx = {
        ml:3, mb:1
    }

    const openWebpageInNewTab = url => {
        window.open(url, '_blank', 'noopener,noreferrer');
    };


    return (
        <Container>
            <Typography>

            </Typography>
            <Grid xs={12}>
                <Grid xs={12} m={6} l={4}>
                    <Card>
{/*                        <CardMedia
                            component="img"
                            alt={"React Portfolio"}
                            image={}
                            style={{height: 180, maxWidth:'100%'}}/>*/}
                        <CardContent>
                            <Typography gutterBottom variant="h4" component="div" sx={headerSx}>Portfolio Website</Typography>
                            <Typography variant="body2" color="text.secondary">
                                www.MilesRaker.com is a React App designed to showcase my software development work.    This application uses React Router to manager components and utilizes Material UI library.
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <ButtonGroup variant="contained" aria-label="outlined primary button group" sx={buttonGroupSx}>
                                <Button size="small" sx={buttonSx} variant={"contained"} onClick={() => openWebpageInNewTab('/')}>Portfolio Homepage</Button>
                                <Button size="small" sx={buttonSx} variant={"contained"} onClick={() => openWebpageInNewTab('https://github.com/MilesRaker/web-portfolio')}>View on GitHub</Button>
                            </ButtonGroup>
                        </CardActions>
                    </Card>
                </Grid>
                <Grid xs={12} m={6} l={4}>
                    <Card>
                        <CardContent>
                            <Typography gutterBottom variant="h4" component="div" sx={headerSx}>CodeUp Project Directory</Typography>
                            <Typography variant="body2" color="text.secondary">
                                A website built with HTML, CSS, and JavaScript which sorts a list of projects completed at CodeUp by skills and abilities.
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <ButtonGroup variant="contained" aria-label="outlined primary button group" sx={buttonGroupSx}>
                                <Button size="small" sx={buttonSx} variant={"contained"} onClick={() => openWebpageInNewTab('https://main.d2g2jzmwau9k9y.amplifyapp.com/')}>View Project Live</Button>
                                <Button size="small" sx={buttonSx} variant={"contained"} onClick={() => openWebpageInNewTab('https://github.com/MilesRaker/CodeUpPortfolio')}>View on GitHub</Button>
                            </ButtonGroup>
                        </CardActions>
                    </Card>
                </Grid>
            </Grid>
        </Container>
    );

}
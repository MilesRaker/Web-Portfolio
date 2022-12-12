import {Typography, Container, Card, CardMedia, CardContent, CardActions, Button, Grid} from '@mui/material';
import React from 'react';
import PortfolioPreview from "src/images/ReactPortfolio.jpg";

export default function Projects() {



    const openWebpageInNewTab = url => {
        window.open(url, '_blank', 'noopener,noreferrer');
    };


    return (
        <Container>
            <Typography>

            </Typography>
            <Grid xs={12}>
                <h2>Development Projects</h2>
                <Grid xs={12} m={6} l={4}>
                    <Card>
                        <CardMedia
                            component="img"
                            alt={"React Portfolio"}
                            image={PortfolioPreview}
                            style={{height: 180, maxWidth:'100%'}}/>
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">Portfolio Website</Typography>
                            <Typography variant="body2" color="text.secondary">
                                A React App designed to showcase my software development work. This application uses React Router to manager components and utilizes Material UI library.
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small" sx={{color: "black", background: "light-blue"}} variant={"contained"} onClick={() => openWebpageInNewTab('www.milesraker.com')}>Portfolio Homepage</Button>
                            <Button size="small" sx={{color: "black", background: "light-blue"}} variant={"contained"} onClick={() => openWebpageInNewTab('www.milesraker.com')}>View on GitHub</Button>
                        </CardActions>
                    </Card>
                </Grid>
                <Grid xs={12} m={6} l={4}>
                    <Card>
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">CodeUp Project Directory</Typography>
                            <Typography variant="body2" color="text.secondary">
                                A website built with HTML, CSS, and JavaScript which sorts a list of projects completed at CodeUp by skills and abilities.
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small" sx={{color: "black", background: "light-blue"}} variant={"contained"}>View Project Live</Button>
                            <Button size="small" sx={{color: "black", background: "light-blue"}} variant={"contained"}>View on GitHub</Button>
                        </CardActions>
                    </Card>
                </Grid>


                </Grid>
        </Container>
    );

}
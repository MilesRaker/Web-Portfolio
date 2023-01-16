import React from 'react'
import {Card, Grid, Typography} from "@mui/material";
import '../Resume.css';

const  Certifications = (props) => {
    return(
        <div>
            <Grid item id={"certifications"} xs={12} >
                <Typography variant={"h4"} className="sectionHeadings">Certifications</Typography>

                <Card className="accordion-sx">
                    <Typography className="accordion-title">AWS Cloud Practitioner</Typography>
                    <Typography className="accordion-subtitle">Amazon Web Services</Typography>
                </Card>

                <Card className="accordion-sx">
                    <Typography className="accordion-title">Azure Fundamentals</Typography>
                    <Typography className="accordion-subtitle">Microsoft Certified</Typography>
                </Card>

                <Card className="accordion-sx">
                    <Typography className="accordion-title">Azure Data Fundamentals</Typography>
                    <Typography className="accordion-subtitle">Microsoft Certified</Typography>
                </Card>

                <Card className="accordion-sx">
                    <Typography className="accordion-title">Azure AI Fundamentals</Typography>
                    <Typography className="accordion-subtitle">Microsoft Certified</Typography>
                </Card>

                <Card className="accordion-sx">
                    <Typography className="accordion-title">Linux Essentials</Typography>
                    <Typography className="accordion-subtitle">Linux Professional Institute</Typography>
                </Card>

                <Card className="accordion-sx">
                    <Typography className="accordion-title">CompTIA ITF+:</Typography>
                    <Typography className="accordion-subtitle">CompTIA</Typography>
                </Card>

                <Card className="accordion-sx">
                    <Typography className="accordion-title">Electrical Engineer in Training</Typography>
                    <Typography className="accordion-subtitle">Washington State License Board</Typography>
                </Card>
            </Grid>
        </div>
    );
}

export default Certifications;
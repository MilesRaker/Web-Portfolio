import React from 'react'
import {Card, Grid, Typography} from "@mui/material";
import '../Resume.css';

const  Certifications = (props) => {
    return(

        <Grid item id={"certifications"} className={"resume-section"} xs={12} >
            <Typography variant={"h4"} className="sectionHeadings">Certifications</Typography>
                <Card className={"resume-item"}>
                    <div id={"awsCertification"} className={"certification"}>
                        <Typography className="accordion-title">AWS Cloud Practitioner</Typography>
                        <Typography className="accordion-subtitle">Amazon Web Services</Typography>
                    </div>
                    <div id={"azureFundamentalsCertification"} className={"certification"}>
                        <Typography className="accordion-title">Azure Fundamentals</Typography>
                        <Typography className="accordion-subtitle">Microsoft Certified</Typography>
                    </div>
                    <div id={"azureDataCertification"} className={"certification"}>
                        <Typography className="accordion-title">Azure Data Fundamentals</Typography>
                        <Typography className="accordion-subtitle">Microsoft Certified</Typography>
                    </div>
                    <div id={"azureAICertification"} className={"certification"}>
                        <Typography className="accordion-title">Azure AI Fundamentals</Typography>
                        <Typography className="accordion-subtitle">Microsoft Certified</Typography>
                    </div>
                    <div id={"linuxCertification"} className={"certification"}>
                        <Typography className="accordion-title">Linux Essentials</Typography>
                        <Typography className="accordion-subtitle">Linux Professional Institute</Typography>
                    </div>
                    <div id={"compTIACertification"} className={"certification"}>
                        <Typography className="accordion-title">CompTIA ITF+:</Typography>
                        <Typography className="accordion-subtitle">CompTIA</Typography>
                    </div>
                    <div id={"EITCertification"} className={"certification"}>
                        <Typography className="accordion-title">Electrical Engineer in Training</Typography>
                        <Typography className="accordion-subtitle">Washington State License Board</Typography>
                    </div>
                </Card>
        </Grid>

    );
}

export default Certifications;
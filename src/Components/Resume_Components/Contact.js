import React from 'react'
import {Card, Grid, Typography} from "@mui/material";
import {FaGithubSquare, FaPhoneSquare} from "react-icons/fa";
import {MdEmail} from "react-icons/md";
import {BsLinkedin} from "react-icons/bs";
import {TfiWorld} from "react-icons/tfi";
import Mailto from "../Utility/Mailto"

const  Contact = (props) => {
    return(
        <div>
            <Grid item xs={12} id={"resumeContact"}>
                <Typography variant={'h4'} className="sectionHeadings">Contact</Typography>

                <Card className="text-box">
                    <Typography className="accordion-title block" id={"resumeContactPhone"} >
                        <FaPhoneSquare/> (360)606-8381
                    </Typography>
                    <Typography className="accordion-title block" id={"resumeContactEmail"} >
                        <MdEmail/> <Mailto email={"MilesRaker@gmail.com"} subject={"Portfolio Response"} body={"Dear Miles,\n\n\n<sent from web portfolio link>"}>MilesRaker@gmail.com</Mailto>
                    </Typography>
                    <Typography className="accordion-title block" id={"resumeContactLinkedIn"} >
                        <BsLinkedin/> <a href={"https://www.linkedin.com/in/milesraker/"} target={"_blank"} rel={"noreferrer"}>LinkedIn / MilesRaker</a>
                    </Typography>
                    <Typography className="accordion-title block" id={"resumeContactGitHub"} >
                        <FaGithubSquare/> <a href="https://github.com/MilesRaker" target={"_blank"} rel={"noreferrer"}>GitHub / MilesRaker</a>
                    </Typography>
                    <Typography className="accordion-title block" id={"resumeContactWebsite"} >
                        <TfiWorld/> <a href="https://www.MilesRaker.com" target={"_blank"} rel={"noreferrer"}>MilesRaker.com</a>
                    </Typography>
                </Card>
            </Grid>
        </div>
    );
}

export default Contact;
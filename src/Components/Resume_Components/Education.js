import React from 'react'
import {Grid, Typography} from "@mui/material";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AccordionDetails from "@mui/material/AccordionDetails";

const  Education = (props) => {
    return(
        <div>
            <Grid item id={"education"} xs={12}>
                <Typography variant={"h4"} className="sectionHeadings">Education</Typography>
                <Accordion className="accordion-sx">
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls={"codeup-education-content"}
                        id={"codeup"}
                    >
                        <div>
                            <Typography className="accordion-title block" >CodeUp</Typography>
                            <Typography className="accordion-subtitle block" >Full Stack Web Design</Typography>
                        </div>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            Certification of Completion
                            Sep 2022 - Feb 2023
                            A fully-immersive, project-based, and intensive 20-week Full-Stack Java Career Accelerator that provides students with 670 hours of expert instruction in software development</Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion className="accordion-sx">
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls={"smu-education-content"}
                        id={"smu"}>
                        <div>
                            <Typography className="accordion-title">St. Martin's University</Typography>
                            <Typography className="accordion-subtitle">Cloud Application Design</Typography>
                        </div>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            Washington Vets2Tech | Cloud Application Design Certificate
                            Jan 2022 - Apr 2022
                            Graduated Cum Laude with a 4.0 GPA from a intensive 16-week Cloud Application Design career accelerator that provides 12 undergraduate credits and an in field internship.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion className="accordion-sx">
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls={"mssa-education-content"}
                        id={"mssa"}>
                        <div>
                            <Typography className="accordion-title">Microsoft Software and Systems Academy</Typography>
                            <Typography className="accordion-subtitle">Cloud Application Design</Typography>
                        </div>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            Jan 2021 - Apr 2021
                            Graduated Cum Laude with a 3.7 GPA from a 16-week Cloud Application Design (with focus in Azure and C#) curriculum developed by Microsoft.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion className="accordion-sx">
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls={"uw-education-content"}
                        id={"uw"}>
                        <div>
                            <Typography className="accordion-title">University of Washington</Typography>
                            <Typography className="accordion-subtitle">BS in Electrical Engineering</Typography>
                        </div>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            Jan 2017 - Sep 2019
                            Graduated Cum Laude with a 3.7 GPA, with focus in microprocessors.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion className="accordion-sx">
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls={"wsu-education-content"}
                        id={"wsu"}>
                        <div>
                            <Typography className="accordion-title">Washington State University</Typography>
                            <Typography className="accordion-subtitle">BM in Music Performance</Typography>
                        </div>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            Sep 2005 - Apr 2009
                            Graduated Cum Laude with a 3.6 GPA, with focus in trumpet and jazz studies.
                        </Typography>
                    </AccordionDetails>
                </Accordion>

            </Grid>        </div>
    );
}

export default Education;
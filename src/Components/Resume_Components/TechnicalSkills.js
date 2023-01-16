import React from 'react'
import {Grid, Typography, Accordion, } from "@mui/material";
import AccordionSummary from "@mui/material/AccordionSummary";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AccordionDetails from "@mui/material/AccordionDetails";
import "../Resume.css";

const  TechnicalSkills = (props) => {
    return(
        <div>
            <Grid item xs={12} id={"technicalSkills"}>
                <Typography variant={"h4"} className="sectionHeadings">Technical Skills</Typography>

                <Accordion className="accordion-sx" id={"frameworkAccordion"}>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />}
                                      aria-controls={"frameworks"}
                                      id={"frameworkSummary"}>
                        <div>
                            <Typography className="accordion-title">Frameworks</Typography>
                        </div>
                    </AccordionSummary>
                    <AccordionDetails>
                        <ul>
                            <li>React</li>
                            <li>Spring</li>
                            <li>Universal Windows Platform</li>
                        </ul>
                    </AccordionDetails>
                </Accordion>

                <Accordion className="accordion-sx" id={"languagesAccordion"}>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />}
                                      aria-controls={"languages"}
                                      id={"languagesSummary"}>
                        <div>
                            <Typography className="accordion-title">Languages</Typography>
                        </div>
                    </AccordionSummary>
                    <AccordionDetails>
                        <ul>
                            <li>JavaScript</li>
                            <li>Java SE</li>
                            <li>Java EE (servlets, JSP)</li>
                            <li>SQL</li>
                            <li>C#</li>
                            <li>Python</li>
                        </ul>
                    </AccordionDetails>
                </Accordion>

                <Accordion className="accordion-sx" id={"knowledgeAccordion"}>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />}
                                      aria-controls={"knowledge"}
                                      id={"knowledgeSummary"}>
                        <div>
                            <Typography className="accordion-title">Knowledge</Typography>
                        </div>
                    </AccordionSummary>
                    <AccordionDetails>
                        <ul>
                            <li>Object-Oriented Programming</li>
                            <li>Test-Driven Development</li>
                            <li>Version Control with Git</li>
                            <li>Paired Programming</li>
                            <li>Azure</li>
                            <li>AWS</li>
                            <li>Agile</li>
                            <li>JSX</li>
                            <li>MySQL</li>
                            <li>Public Speaking</li>
                        </ul>
                    </AccordionDetails>
                </Accordion>

                <Accordion className="accordion-sx" id={"apiAccordion"}>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />}
                                      aria-controls={"api"}
                                      id={"apiSummary"}>
                        <div>
                            <Typography className="accordion-title">APIs</Typography>
                        </div>
                    </AccordionSummary>
                    <AccordionDetails>
                        <ul>
                            <li>jQuery</li>
                            <li>Bootstrap</li>
                            <li>Material UI</li>
                            <li>ReactRouter</li>
                            <li>Thymeleaf</li>
                        </ul>
                    </AccordionDetails>
                </Accordion>

            </Grid>
        </div>
    );
}

export default TechnicalSkills;


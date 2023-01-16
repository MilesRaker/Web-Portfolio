import React from 'react'
import {Grid, Typography} from "@mui/material";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AccordionDetails from "@mui/material/AccordionDetails";

const  ProfessionalExperience = (props) => {
    return(
        <div>
            <Grid item xs={12}  id={"professionalExperience"}>
                <Typography variant={"h4"} className="sectionHeadings">Professional Experience</Typography>

                <Accordion className="accordion-sx" id={"SMUInternship"}>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />}
                                      aria-controls={"smuInternship"}
                                      id={"smuInternship"}>
                        <div>
                            <Typography className="accordion-title">Saint Martin's University - Lacey, WA</Typography>
                            <Typography className="accordion-values-content"><em>Full Stack Engineering Intern</em> / Jan 2022 - May 2022</Typography>
                        </div>
                    </AccordionSummary>
                    <AccordionDetails>
                        <ul>
                            <li>
                                Developed Washington Vets 2 Tech (WAV2T) Hiring Portal, a React.js web application designed to connect WAV2T students and hiring partners. My fellow intern and I developed IEEE standard Software Requirements Specifications, wireframes, React frontend, MySQL database, and 5 hours of training material to onboard the next set of interns assigned to this project. When complete, this application will be the primary placement tool for the WAV2T program.
                            </li>
                        </ul>
                    </AccordionDetails>
                </Accordion>

                <Accordion className="accordion-sx" id={"FAA"}>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />}
                                      aria-controls={"FAA"}
                                      id={"FAASummary"}>
                        <div>
                            <Typography className="accordion-title">Federal Aviation Administration - Des Moines, WA</Typography>
                            <Typography className="accordion-values-content"><em>Electronics Engineer</em> / Sep 2019 - Jan 2021</Typography>
                        </div>
                    </AccordionSummary>
                    <AccordionDetails>
                        <ul>
                            <li>
                                As project manager for waypoint equipment upgrade in Billings, MT, I conducted environmental, airspace, and safety regulatory analysis, designed upgrade schematics, coordinated service outages with air traffic control, and performed in field upgrade operations. This project resulted in zero navigation signal loss, zero injuries, was completed ahead of schedule and 10% under budget.
                            </li>
                            <li>
                                Designed site survey report template for 63 upcoming Distance Measuring Equipment projects, creating a consistent document that stakeholders and financial analysts can rely on while ensuring site survey engineers report all relevant details. This document template saved 10% of project engineering time over 63 projects, while increasing report clarity and accuracy.
                            </li>
                        </ul>
                    </AccordionDetails>
                </Accordion>

                <Accordion className="accordion-sx" id={"WANG"}>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />}
                                      aria-controls={"WANG"}
                                      id={"WANGSummary"}>
                        <div>
                            <Typography className="accordion-title">US Army National Guard - Camp Murray, WA</Typography>
                            <Typography className="accordion-values-content"><em>Musician, Sergeant</em> / Feb 2016 - Jan 2022</Typography>
                        </div>
                    </AccordionSummary>
                    <AccordionDetails>
                        <ul>
                            <li>
                                Activated for 87 days in response to COVID-19, serving first as a contact tracer, placing over 300 phone calls infected with COVID-19, then informing those who were in contact with infected persons, significantly lowering the rate of infection. I then managed 5 soldiers serving and stocking items at the Seattle Salvation Army Food Bank, directly providing nutrition to our vulnerable populations. I was awarded the Washington National Guard Commendation Ribbon as a result.
                            </li>
                            <li>
                                Performed trumpet in over 150 public concerts across Washington State, supporting local festivals, schools, and state events, promoting a sense of trust between our state’s citizens and our National Guard. I was awarded the Army Commendation Medal as a result.
                            </li>
                            <li>
                                Conducted a three part training in Audio Engineering for my unit of 43 soldiers, which included both theory and hands on demonstrations. Skills gained in these training sessions contributed to zero accidents and a 50% decrease in wiring errors in the year following this training.
                            </li>
                            <li>
                                Selected for promotion from Specialist to Sergeant, ahead of 8 peers.
                            </li>
                        </ul>
                    </AccordionDetails>
                </Accordion>

                <Accordion className="accordion-sx" id={"Army"}>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />}
                                      aria-controls={"Army"}
                                      id={"ArmySummary"}>
                        <div>
                            <Typography className="accordion-title">US Army - Seoul, South Korea; Newport News, VA</Typography>
                            <Typography className="accordion-values-content"><em>Musician, Specialist</em> / Apr 2009 - Feb 2016</Typography>
                        </div>
                    </AccordionSummary>
                    <AccordionDetails>
                        <ul>
                            <li>
                                Led a military Rock Band, composed of US and Korean soldiers to design, rehearse, and perform 12 musical outreach missions for 15,000 citizens in Seoul, South Korea. I was awarded the Army Commendation Medal as a result.
                            </li>
                            <li>
                                Created, resourced, and implemented a stage lighting department at Fort Eustis, VA. This department expanded the unit’s ability to perform independently outdoors after dark and our ability to influence attention on stage.
                            </li>
                        </ul>
                    </AccordionDetails>
                </Accordion>
            </Grid>        </div>
    );
}

export default ProfessionalExperience;
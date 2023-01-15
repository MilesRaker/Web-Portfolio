import React, {Fragment} from 'react';
import './Resume.css';
import { FaPhoneSquare } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { BsLinkedin } from "react-icons/bs";
import { FaGithubSquare } from "react-icons/fa";
import { TfiWorld } from "react-icons/tfi";
import {
    Card,
    Divider,
    Grid,
    List,
    ListSubheader,
    Typography
} from "@mui/material";
import Box from '@mui/material/Box';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AccordionDetails from "@mui/material/AccordionDetails";
import customTheme from "./ThemeProvider";
import useWindowDimensions from "./useWindowDimensions";

const frameworks = ["React","Spring","UWP"]
const languages = ["JavaScript","Java SE","Java EE(Servlets, JSP)", "SQL", "C#", "Python"]
const knowledge = ["Object-Oriented Programming","Test-Driven Development","Version  Control with Git","Paired Programming","Azure", "AWS","Agile","JSX","MySQL", "Public Speaking"]
const api = ["jQuery", "Bootstrap", "Material UI", "ReactRouter", "Thymeleaf"]






/** Render a single skill List Item
 * @param skill a string
 * @return JSX.Element*/
function renderRow(skill) {
    return (
        <ListItem className="scroll-sx" key={skill} component="div"  divider={true}>
            <ListItemText className="accordion-sx" primary={skill} />
        </ListItem>
    )
}

/** renders all skills in input array to a list
 * @param skills array of strings
 * @return JSX.Element */
function renderRows(skills){
    return <Fragment>
    {skills.map((skill) => {
        return renderRow(skill)
    })}
    </Fragment>
}

export default function Resume(props){
    // create Mailto element to handle email link
    // source: https://www.30secondsofcode.org/react/s/mailto
    const Mailto = ({ email, subject = '', body = '', children }) => {
        let params = subject || body ? '?' : '';
        if (subject) params += `subject=${encodeURIComponent(subject)}`;
        if (body) params += `${subject ? '&' : ''}body=${encodeURIComponent(body)}`;

        return <a href={`mailto:${email}${params}`}>{children}</a>;
    };

    const { height, width } = useWindowDimensions();

    if(width > 790){
    return(
        <Grid container spacing={2} className="resumeContainer" sx={{ m: 0 }}>
            <Grid container xs={4} spacing={2} id={"resumeLeftColumn"} className="left-column-style">
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
                <Divider />
                <Grid item id={"clearance"} xs={12} >
                    <Typography variant={"h4"} className="sectionHeadings">Security Clearance</Typography>
                    <Card className="text-box">
                        <Typography className="accordion-title">US Government Secret Security Clearance, Inactive</Typography>
                    </Card>
                </Grid>
                <Grid item xs={12}>
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
            </Grid>

            <Grid container spacing={2} xs={8} id={"resumeRightColumn"} sx={{ m: 0}}>
                <Grid item xs={12}  id={"professionalExperience"}>
                    <Typography variant={"h4"} className="sectionHeadings">Professional Experience</Typography>

                    <Accordion className="accordion-sx" id={"SMUInternship"}>
                        <AccordionSummary expandIcon={<ExpandMoreIcon />}
                                          aria-controls={"smuInternship"}
                                          id={"smuInternship"}>
                            <div>
                                <Typography className="accordion-title">Saint Martin's University - Lacey, WA</Typography>
                                <Typography className="accordion-subtitle"><em>Full Stack Engineering Intern</em> / Jan 2022 - May 2022</Typography>
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
                                <Typography className="accordion-subtitle"><em>Electronics Engineer</em> / Sep 2019 - Jan 2021</Typography>
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
                                <Typography className="accordion-subtitle"><em>Musician, Sergeant</em> / Feb 2016 - Jan 2022</Typography>
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
                                <Typography className="accordion-subtitle"><em>Musician, Specialist</em> / Apr 2009 - Feb 2016</Typography>
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
                </Grid>

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

                </Grid>
            </Grid>

        </Grid>
    )} else{
        /* for small screens, render things in a single column*/
        return(
            <Grid container spacing={2} className="resumeContainer" sx={{ margin: 0 }}>
{/* section order for stack:
1. contact
2. Pro exp
3. security clearance
4. education
5. tech skills
6. certifications*/}
                <Grid item xs={12} id={"resumeContact"}>
                    <Typography variant={'h4'} className="sectionHeadings">Contact</Typography>
                    {/*Contact Section*/}
                    <Card className="accordion-sx">
                        <Typography className="text-box block" id={"resumeContactPhone"} >
                            <FaPhoneSquare/> (360)606-8381
                        </Typography>
                        <Typography className="text-box block" id={"resumeContactEmail"} >
                            <MdEmail/> <Mailto email={"MilesRaker@gmail.com"} subject={"Portfolio Response"} body={"Dear Miles,\n\n\n<sent from web portfolio link>"}>MilesRaker@gmail.com</Mailto>
                        </Typography>
                        <Typography className="text-box block" id={"resumeContactLinkedIn"} >
                            <BsLinkedin/> <a href={"https://www.linkedin.com/in/milesraker/"} target={"_blank"} rel={"noreferrer"}>LinkedIn / MilesRaker</a>
                        </Typography>
                        <Typography className="text-box block" id={"resumeContactGitHub"} >
                            <FaGithubSquare/> <a href="https://github.com/MilesRaker" target={"_blank"} rel={"noreferrer"}>GitHub / MilesRaker</a>
                        </Typography>
                        <Typography className="text-box block" id={"resumeContactWebsite"} >
                            <TfiWorld/> <a href="https://www.MilesRaker.com" target={"_blank"} rel={"noreferrer"}>MilesRaker.com</a>
                        </Typography>
                    </Card>
                </Grid>
                {/*Professional Experience Section*/}
                <Grid  item xs={12}  id={"professionalExperience"}>
                    <Typography variant={"h4"} className="sectionHeadings">Professional Experience</Typography>

                    <Accordion className="accordion-sx" id={"SMUInternship"}>
                        <AccordionSummary expandIcon={<ExpandMoreIcon />}
                                          aria-controls={"smuInternship"}
                                          id={"smuInternship"}>
                            <div>
                                <Typography className="accordion-title">Saint Martin's University - Lacey, WA</Typography>
                                <Typography className="accordion-subtitle"><em>Full Stack Engineering Intern</em> / Jan 2022 - May 2022</Typography>
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
                                <Typography className="accordion-subtitle"><em>Electronics Engineer</em> / Sep 2019 - Jan 2021</Typography>
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
                                <Typography className="accordion-subtitle"><em>Musician, Sergeant</em> / Feb 2016 - Jan 2022</Typography>
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
                                <Typography className="accordion-subtitle"><em>Musician, Specialist</em> / Apr 2009 - Feb 2016</Typography>
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
                </Grid>
                {/* security clearance*/}
                <Grid item id={"clearance"} xs={12} >
                    <Typography variant={"h4"} className="sectionHeadings">Security Clearance</Typography>
                    <Card className="text-box">
                        <Typography className="accordion-title">US Government Secret Security Clearance, Inactive</Typography>
                    </Card>
                </Grid>
                {/* education */}
                <Grid id={"education"} xs={12}>
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
                    {/* technical skills */}
                    <Grid item xs={12}>
                        <Typography variant={"h4"} className="sectionHeadings">Technical Skills</Typography>

                        <Box sx={{ width: '100%', maxWidth: 360, bgcolor: customTheme.palette.primary.light }}>
                            <List sx={{
                                width: '100%',
                                maxWidth: 360,
                                bgcolor: customTheme.palette.primary.light,
                                position: 'relative',
                                overflow: 'auto',
                                maxHeight: 275,
                                '& ul': { padding: 0 },
                                paddingTop: 0,
                            }}>
                                <ListSubheader className="scroll-header-sx"><Typography variant={'h6'}  >Frameworks:</Typography></ListSubheader>
                                {renderRows(frameworks)}
                                <ListSubheader className="scroll-header-sx"><Typography variant={'h6'}>Programming Languages: </Typography></ListSubheader>
                                {renderRows(languages)}
                                <ListSubheader className="scroll-header-sx"><Typography variant={'h6'}>Knowledge: </Typography></ListSubheader>
                                {renderRows(knowledge)}
                                <ListSubheader className="scroll-header-sx"><Typography variant={'h6'}>API's: </Typography></ListSubheader>
                                {renderRows(api)}
                            </List>
                        </Box>
                    </Grid>
                    {/* certifications */}
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
                </Grid>
            </Grid>
        )
    }
}
import React, {Fragment} from 'react';
import './Resume.css';
import { FaPhoneSquare } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { BsLinkedin } from "react-icons/bs";
import { FaGithubSquare } from "react-icons/fa";
import { TfiWorld } from "react-icons/tfi";
import {
    Button,
    Card,
    CardActions,
    CardContent,
    CardMedia,
    Divider,
    Grid,
    List,
    ListSubheader,
    Typography
} from "@mui/material";
import Box from '@mui/material/Box';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { FixedSizeList } from 'react-window';
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AccordionDetails from "@mui/material/AccordionDetails";
import customThemeOne from "./ThemeProvider";


const frameworks = ["React","Spring","UWP"]
const languages = ["JavaScript","Java SE","Java EE(Servlets, JSP)", "SQL", "C#", "Python"]
const knowledge = ["Object-Oriented Programming","Test-Driven Development","Version  Control with Git","Paired Programming","Azure", "AWS","Agile","JSX","MySQL", "Public Speaking"]
const api = ["jQuery", "Bootstrap", "Material UI", "ReactRouter", "Thymeleaf"]


const sectionHeadings = {
    fontFamily: 'Varela',
    textDecoration: 'underline',
    textDecorationColor: customThemeOne.palette.secondary.main,
    fontWeight: 'bold',
    paddingLeft: 2,
    paddingY: 1
};

const accordionTitle = {
    fontFamily: 'Varela',
    fontWeight: 'bold',
    paddingLeft: 1
}

const accordionSubtitle = {
    fontFamily: 'Varela',
    fontStyle: 'italic',
    color: customThemeOne.palette.secondary.light,
    paddingLeft: 1
}

const accordionSx = {
    bgcolor: customThemeOne.palette.primary.main,
    margin: 1
}

const clearanceSx = {
    bgcolor: customThemeOne.palette.primary.main,
    margin: 1,
    padding: 1
}

const contactSx = {
    fontFamily: 'Varela',
    marginLeft: 1,
    marginY: .5
}

const scrollSx ={
    bgcolor: customThemeOne.palette.primary.light,
    color: 'black',
    margin: .5,
    borderRadius: 1
}

const scrollHeaderSx = {
    bgcolor: customThemeOne.palette.primary.main,
    margin: 1,
    borderRadius: 1,
    fontWeight: 'bold',
    textDecoration: 'underline',
    textDecorationColor: customThemeOne.palette.secondary.main
}

const leftColumnStyle = {
    borderRadius: 1,
    mt: 2,
    backgroundColor: customThemeOne.palette.primary.light
}

const styles = theme => ({
    '@global': {
        '*::-webkit-scrollbar': {
            width: '0.4em'
        },
        '*::-webkit-scrollbar-track': {
            '-webkit-box-shadow': 'inset 0 0 6px rgba(0,0,0,0.00)'
        },
        '*::-webkit-scrollbar-thumb': {
            backgroundColor: 'rgba(0,0,0,.1)',
            outline: '1px solid slategrey'
        }
    }
});


/** Render a single skill List Item
 * @param skill a string
 * @return JSX.Element*/
function renderRow(skill) {
    return (
        <ListItem style={scrollSx} key={skill} component="div"  divider={true}>
            <ListItemButton>
                <ListItemText primary={skill}/>
            </ListItemButton>
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

    return(
        <Grid container spacing={2} className="resumeContainer" sx={{ margin: 0 }}>
            <Grid container xs={4} spacing={2} id={"resumeLeftColumn"} sx={leftColumnStyle}>
                <Grid item xs={12} id={"resumeContact"}>
                    <Typography variant={'h4'} sx={sectionHeadings}>Contact</Typography>

                    <Card sx={accordionSx}>
                        <Typography sx={contactSx} id={"resumeContactPhone"} className="block">
                            <FaPhoneSquare/> (360)606-8381
                        </Typography>
                        <Typography sx={contactSx} id={"resumeContactEmail"} className="block">
                            <MdEmail/> <Mailto email={"MilesRaker@gmail.com"} subject={"Portfolio Response"} body={"Dear Miles,\n\n\n<sent from web portfolio link>"}>MilesRaker@gmail.com</Mailto>
                        </Typography>
                        <Typography sx={contactSx} id={"resumeContactLinkedIn"} className="block">
                            <BsLinkedin/> <a href={"https://www.linkedin.com/in/milesraker/"} target={"_blank"} rel={"noreferrer"}>LinkedIn / MilesRaker</a>
                        </Typography>
                        <Typography sx={contactSx} id={"resumeContactGitHub"} className="block">
                            <FaGithubSquare/> <a href="https://github.com/MilesRaker" target={"_blank"} rel={"noreferrer"}>GitHub / MilesRaker</a>
                        </Typography>
                        <Typography sx={contactSx} id={"resumeContactWebsite"} className="block">
                            <TfiWorld/> <a href="https://www.MilesRaker.com" target={"_blank"} rel={"noreferrer"}>MilesRaker.com</a>
                        </Typography>
                    </Card>
                </Grid>
                <Divider />
                <Grid id={"clearance"} xs={12} >
                    <Typography variant={"h4"} sx={sectionHeadings}>Security Clearance</Typography>
                    <Card sx={clearanceSx}>
                        <Typography sx={accordionTitle}>US Government Secret Security Clearance, Inactive</Typography>
                    </Card>
                </Grid>
                <Grid xs={12}>
                    <Typography variant={"h4"} sx={sectionHeadings}>Technical Skills</Typography>

                    <Box sx={{ width: '100%', maxWidth: 360, bgcolor: customThemeOne.palette.primary.light }}>
                        <List sx={{
                            width: '100%',
                            maxWidth: 360,
                            bgcolor: customThemeOne.palette.primary.light,
                            position: 'relative',
                            overflow: 'auto',
                            maxHeight: 300,
                            '& ul': { padding: 0 },
                        }}>
                            <ListSubheader sx={scrollHeaderSx}><Typography variant={'h6'}  >Frameworks:</Typography></ListSubheader>
                            {renderRows(frameworks)}
                            <ListSubheader sx={scrollHeaderSx}><Typography variant={'h6'}>Programming Languages: </Typography></ListSubheader>
                            {renderRows(languages)}
                            <ListSubheader sx={scrollHeaderSx}><Typography variant={'h6'}>Knowledge: </Typography></ListSubheader>
                            {renderRows(knowledge)}
                            <ListSubheader sx={scrollHeaderSx}><Typography variant={'h6'}>API's: </Typography></ListSubheader>
                            {renderRows(api)}
                        </List>
                    </Box>
                </Grid>
                <Divider />

                <Divider />
                <Grid id={"certifications"} xs={12} >
                    <Typography variant={"h4"} sx={sectionHeadings}>Certifications</Typography>

                    <Card sx={accordionSx}>
                        <Typography sx={accordionTitle}>AWS Cloud Practitioner</Typography>
                        <Typography sx={accordionSubtitle}>Amazon Web Services</Typography>
                    </Card>

                    <Card sx={accordionSx}>
                        <Typography sx={accordionTitle}>Azure Fundamentals</Typography>
                        <Typography sx={accordionSubtitle}>Microsoft Certified</Typography>
                    </Card>

                    <Card sx={accordionSx}>
                        <Typography sx={accordionTitle}>Azure Data Fundamentals</Typography>
                        <Typography sx={accordionSubtitle}>Microsoft Certified</Typography>
                    </Card>

                    <Card sx={accordionSx}>
                        <Typography sx={accordionTitle}>Azure AI Fundamentals</Typography>
                        <Typography sx={accordionSubtitle}>Microsoft Certified</Typography>
                    </Card>

                    <Card sx={accordionSx}>
                        <Typography sx={accordionTitle}>Linux Essentials</Typography>
                        <Typography sx={accordionSubtitle}>Linux Professional Institute</Typography>
                    </Card>

                    <Card sx={accordionSx}>
                        <Typography sx={accordionTitle}>CompTIA ITF+:</Typography>
                        <Typography sx={accordionSubtitle}>CompTIA</Typography>
                    </Card>

                    <Card sx={accordionSx}>
                        <Typography sx={accordionTitle}>Electrical Engineer in Training</Typography>
                        <Typography sx={accordionSubtitle}>Washington State License Board</Typography>
                    </Card>

                </Grid>
            </Grid>
            <Divider />
            <Grid container spacing={1} xs={8} id={"resumeRightColumn"} sx={{ ml: 1, mr: 0, my: 0 }}>
                <Grid xs={12}  id={"professionalExperience"}>
                    <Typography variant={"h4"} sx={sectionHeadings}>Professional Experience</Typography>

                    <Accordion sx={accordionSx} id={"SMUInternship"}>
                        <AccordionSummary expandIcon={<ExpandMoreIcon />}
                                          aria-controls={"smuInternship"}
                                          id={"smuInternship"}>
                            <div>
                                <Typography sx={accordionTitle}>Saint Martin's University - Lacey, WA</Typography>
                                <Typography sx={accordionSubtitle}><em>Full Stack Engineering Intern</em> / Jan 2022 - May 2022</Typography>
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

                    <Accordion sx={accordionSx} id={"FAA"}>
                        <AccordionSummary expandIcon={<ExpandMoreIcon />}
                                          aria-controls={"FAA"}
                                          id={"FAASummary"}>
                            <div>
                                <Typography sx={accordionTitle}>Federal Aviation Administration - Des Moines, WA</Typography>
                                <Typography sx={accordionSubtitle}><em>Electronics Engineer</em> / Sep 2019 - Jan 2021</Typography>
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

                    <Accordion sx={accordionSx} id={"WANG"}>
                        <AccordionSummary expandIcon={<ExpandMoreIcon />}
                                          aria-controls={"WANG"}
                                          id={"WANGSummary"}>
                            <div>
                                <Typography sx={accordionTitle}>US Army National Guard - Camp Murray, WA</Typography>
                                <Typography sx={accordionSubtitle}><em>Musician, Sergeant</em> / Feb 2016 - Jan 2022</Typography>
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

                    <Accordion sx={accordionSx} id={"Army"}>
                        <AccordionSummary expandIcon={<ExpandMoreIcon />}
                                          aria-controls={"Army"}
                                          id={"ArmySummary"}>
                            <div>
                                <Typography sx={accordionTitle}>US Army - Seoul, South Korea; Newport News, VA</Typography>
                                <Typography sx={accordionSubtitle}><em>Musician, Specialist</em> / Apr 2009 - Feb 2016</Typography>
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

                <Grid id={"education"} xs={12}>
                    <Typography variant={"h4"} sx={sectionHeadings}>Education</Typography>
                    <Accordion sx={accordionSx}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls={"codeup-education-content"}
                            id={"codeup"}
                        >
                            <div>
                                <Typography sx={accordionTitle} className={"block"}>CodeUp</Typography>
                                <Typography sx={accordionSubtitle} className={"block"}>Full Stack Web Design</Typography>
                            </div>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                Certification of Completion
                                Sep 2022 - Feb 2023
                                A fully-immersive, project-based, and intensive 20-week Full-Stack Java Career Accelerator that provides students with 670 hours of expert instruction in software development</Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion sx={accordionSx}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls={"smu-education-content"}
                            id={"smu"}>
                            <div>
                                <Typography sx={accordionTitle}>St. Martin's University</Typography>
                                <Typography sx={accordionSubtitle}>Cloud Application Design</Typography>
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
                    <Accordion sx={accordionSx}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls={"mssa-education-content"}
                            id={"mssa"}>
                            <div>
                                <Typography sx={accordionTitle}>Microsoft Software and Systems Academy</Typography>
                                <Typography sx={accordionSubtitle}>Cloud Application Design</Typography>
                            </div>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                Jan 2021 - Apr 2021
                                Graduated Cum Laude with a 3.7 GPA from a 16-week Cloud Application Design (with focus in Azure and C#) curriculum developed by Microsoft.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion sx={accordionSx}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls={"uw-education-content"}
                            id={"uw"}>
                            <div>
                                <Typography sx={accordionTitle}>University of Washington</Typography>
                                <Typography sx={accordionSubtitle}>BS in Electrical Engineering</Typography>
                            </div>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                Jan 2017 - Sep 2019
                                Graduated Cum Laude with a 3.7 GPA, with focus in microprocessors.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion sx={accordionSx}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls={"wsu-education-content"}
                            id={"wsu"}>
                            <div>
                                <Typography sx={accordionTitle}>Washington State University</Typography>
                                <Typography sx={accordionSubtitle}>BM in Music Performance</Typography>
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
    )
}
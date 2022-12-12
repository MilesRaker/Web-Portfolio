import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import React from 'react';
import './Values.css';
import customThemeOne from "./ThemeProvider";

const accordionTitle = {
    fontFamily: 'Varela',
    fontWeight: 'bold',
    paddingLeft: 1,
    textDecoration: 'underline',
    textDecorationColor: customThemeOne.palette.secondary.main
}

const accordionSubtitle = {
    fontFamily: 'Varela',
    fontStyle: 'italic',
    color: 'black',
    paddingLeft: 1
}

const accordionSx = {
    background: 'linear-gradient(to bottom, #FAFAFA, #42A5F5)',
    margin: 1,
    borderRadius: 1
}

const ColorRule = ({ color }) => (
    <hr
        style = {{
            borderColor: color,
        }}
        />
);



export default function Values(){
    return(
        <div className='valuesContainer'>
            <Typography variant='h2'  className='valuesHeading'>Values</Typography>

            <Accordion className='values'>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                >
                    <Typography variant='button' sx={accordionTitle}>Authentic</Typography>
                </AccordionSummary>
                <AccordionDetails sx={accordionSx}>
                    <Typography variant='body1' sx={accordionSubtitle}>I present my true self to the world. I speak my truth.</Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                >
                    <Typography variant='button' sx={accordionTitle}>Curious</Typography>
                </AccordionSummary>
                <AccordionDetails sx={accordionSx}>
                    <Typography variant='body1' className='description'>I view the world through eager wonder</Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                >
                    <Typography variant='button' sx={accordionTitle}>Kind</Typography>
                </AccordionSummary>
                <AccordionDetails sx={accordionSx}>
                    <Typography variant='body1' className='description'>I am friendly, generous and considerate</Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                >
                    <Typography variant='button' sx={accordionTitle}>Empathetic</Typography>
                </AccordionSummary>
                <AccordionDetails sx={accordionSx}>
                    <Typography variant='body1' className='description'>I acknowledge the emotions of others without actively experiencing their emotions</Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                >
                    <Typography variant='button' sx={accordionTitle}>Playful</Typography>
                </AccordionSummary>
                <AccordionDetails sx={accordionSx}>
                    <Typography variant='body1' className='description'>I give and express joy, I'm a goofball</Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                >
                    <Typography variant='button' sx={accordionTitle}>Self-confident</Typography>
                </AccordionSummary>
                <AccordionDetails sx={accordionSx}>
                    <Typography variant='body1' className='description'>I can learn anything I need to be successful</Typography>
                </AccordionDetails>  
            </Accordion>

        </div>
    )
}
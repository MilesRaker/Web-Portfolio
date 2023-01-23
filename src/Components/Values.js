import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import React from 'react';
import './Values.css';

export default function Values(){
    return(
        <div className='valuesContainer'>
            <Typography variant='h2'  className='valuesHeading'>Values</Typography>

            <Accordion className='values'>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                >
                    <Typography variant='button' className="accordion-title">Authentic</Typography>
                </AccordionSummary>
                <AccordionDetails className="resume-item">
                    <Typography variant='body1' className="accordion-values-content">I present my true self to the world. I speak my truth.</Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                >
                    <Typography variant='button' className="accordion-title">Curious</Typography>
                </AccordionSummary>
                <AccordionDetails className="resume-item">
                    <Typography variant='body1' className='accordion-values-content'>I view the world through eager wonder</Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                >
                    <Typography variant='button' className="accordion-title">Kind</Typography>
                </AccordionSummary>
                <AccordionDetails className="resume-item">
                    <Typography variant='body1' className='accordion-values-content'>I am friendly, generous and considerate</Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                >
                    <Typography variant='button' className="accordion-title">Empathetic</Typography>
                </AccordionSummary>
                <AccordionDetails className="resume-item">
                    <Typography variant='body1' className='accordion-values-content'>I acknowledge the emotions of others without actively experiencing their emotions</Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                >
                    <Typography variant='button' className="accordion-title">Playful</Typography>
                </AccordionSummary>
                <AccordionDetails className="resume-item">
                    <Typography variant='body1' className='accordion-values-content'>I give and express joy, I'm a goofball</Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                >
                    <Typography variant='button' className="accordion-title">Self-confident</Typography>
                </AccordionSummary>
                <AccordionDetails className="resume-item">
                    <Typography variant='body1' className='accordion-values-content'>I can learn anything I need to be successful</Typography>
                </AccordionDetails>  
            </Accordion>

        </div>
    )
}
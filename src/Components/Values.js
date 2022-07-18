import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import React from 'react';
import './Values.css';
import IsHomepage from './IsHomepage';

function Values(props){
    return(
        <div className='container'>
            <Typography variant='h2' className='heading'>Values</Typography>

            <Accordion className='values'>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls='panel1a-content'
                    id='panel1a-header'
                >
                    <Typography variant='overline' className='label'>Authentic</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography variant='body1' className='description'>Being my true self</Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls='panel1a-content'
                    id='panel1a-header'
                >
                    <Typography variant='overline' className='label'>Curious</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography variant='body1' className='description'>Viewing the world with wonder</Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls='panel1a-content'
                    id='panel1a-header'
                >
                    <Typography variant='overline' className='label'>Kind</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography variant='body1' className='description'>Friendly, generous and considerate</Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls='panel1a-content'
                    id='panel1a-header'
                >
                    <Typography variant='overline' className='label'>Loyal</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography variant='body1' className='description'>Trusting my team</Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls='panel1a-content'
                    id='panel1a-header'
                >
                    <Typography variant='overline' className='label'>Playful</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography variant='body1' className='description'>Giving and expressing pleasure, goofy</Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls='panel1a-content'
                    id='panel1a-header'
                >
                    <Typography variant='overline' className='label'>Self-confident</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography variant='body1' className='description'>I can learn anything I need to be successful</Typography>
                </AccordionDetails>  
            </Accordion>

            <IsHomepage setIsHomepage={props.setIsHomepage}  />
        </div>
    )
}

export default Values;
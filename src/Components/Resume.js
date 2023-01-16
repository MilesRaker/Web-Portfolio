import React from 'react';
import './Resume.css';
import {
    Divider,
    Grid,
} from "@mui/material";
import useWindowDimensions from "./useWindowDimensions";
import "./Resume_Components/Certifications"
import Certifications from "./Resume_Components/Certifications";
import TechnicalSkills from "./Resume_Components/TechnicalSkills";
import Contact from "./Resume_Components/Contact";
import Clearance from "./Resume_Components/Clearance";
import ProfessionalExperience from "./Resume_Components/ProfessionalExperience";
import Education from "./Resume_Components/Education";

export default function Resume(props){

    const { height, width } = useWindowDimensions();

    if(width > 790){
        // for large screens, use two columns
    return(
            <Grid container spacing={2} className="resumeContainer" sx={{ m: 0 }}>
                <Grid container xs={4} spacing={2} id={"resumeLeftColumn"} className="column" >

                    <Certifications/>
                    {/*<Clearance/>
                    <Contact/>*/}
                    <TechnicalSkills/>


                </Grid>
                <Grid container spacing={2} xs={8} id={"resumeRightColumn"} className="column" >

                    <Education/>
                    <ProfessionalExperience/>

                </Grid>
            </Grid>
        )
    } else{
         // for small screens, render things in a single column
        return(
            <Grid container spacing={2} className="resumeContainer" sx={{ margin: 0 }}>
                <Contact/>
                <ProfessionalExperience/>
                <Clearance/>
                <Education/>
                <TechnicalSkills/>
                <Certifications/>
            </Grid>
        )
    }
}
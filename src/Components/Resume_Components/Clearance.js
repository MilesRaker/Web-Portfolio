import React from 'react'
import {Card, Grid, Typography} from "@mui/material";

const  Clearance = (props) => {
    return(
        <div>
            <Grid item id={"clearance"} xs={12} >
                <Typography variant={"h4"} className="sectionHeadings">Security Clearance</Typography>
                <Card className="text-box">
                    <Typography className="accordion-title">US Government Secret Security Clearance, Inactive</Typography>
                </Card>
            </Grid>
        </div>
    );
}

export default Clearance;
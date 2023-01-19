import React, {useEffect, useState} from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { Link, useLocation } from 'react-router-dom';
import customTheme from "../ThemeProvider";

export default function NavTabsHorizontal() {
  // if on the homepage, do not focus a tab
  // otherwise, focus on the current tab
  const location = useLocation();
  const [currentPage, setCurrentPage] = React.useState(-1);

  useEffect(() => {
    switch(location.pathname){
      case '/':
        setCurrentPage(0);
        break;
      case '/resume':
        setCurrentPage(1);
        break;
      case '/values':
        setCurrentPage(2);
        break;
      case '/projects':
        setCurrentPage(3);
        break;
      default :
        setCurrentPage(-0);
        break;
    }
  },[location])

  // handle mouse over and mouse leave events:
  const [tabOneSx, setTabOneSx] = useState({fontFamily: 'Varela', fontWeight: 'bold'});
  const [tabTwoSx, setTabTwoSx] = useState({fontFamily: 'Varela', fontWeight: 'bold'});
  const [tabThreeSx, setTabThreeSx] = useState({fontFamily: 'Varela', fontWeight: 'bold'});

  const nonHoverSx = {
    fontFamily: 'Varela', fontWeight: 'bold'
  }
  const hoverSx = {
    fontFamily: 'Varela',
    fontWeight: 'bold',
    boxShadow: 3,
    textDecoration: 'underline',
    textDecorationThickness: 3,
    textDecorationColor: customTheme.palette.secondary.main
  }
  // Tab 1
  const handleMouseOverOne= () => {
    if(currentPage !== 1)
    setTabOneSx(hoverSx)
  }
  const handleMouseLeaveOne= () => {
    setTabOneSx(nonHoverSx)
  }
  // Tab 2
  const handleMouseOverTwo= () => {
    if(currentPage !== 2)
    setTabTwoSx(hoverSx)
  }
  const handleMouseLeaveTwo= () => {
    setTabTwoSx(nonHoverSx)
  }
  // Tab 3
  const handleMouseOverThree= () => {
    if(currentPage !== 3)
    setTabThreeSx(hoverSx)
  }
  const handleMouseLeaveThree= () => {
    setTabThreeSx(nonHoverSx)
  }
  return (
    <Box sx={{ width: '100%' }}>
      <Tabs value={currentPage - 1}
      aria-label="nav tabs"
      orientation="horizontal"
      textColor="primary"
      indicatorColor="secondary"
      centered={true}
      >
        <Tab sx={tabOneSx}
             onMouseEnter={handleMouseOverOne}
             onMouseLeave={handleMouseLeaveOne}
             label="Resume" key="Resume" component={Link} to={"/resume"} />

        <Tab sx={tabTwoSx}
             onMouseEnter={handleMouseOverTwo}
             onMouseLeave={handleMouseLeaveTwo}
             label="Values" key="Values" component={Link} to={"/values"} />

        <Tab sx={tabThreeSx}
             onMouseEnter={handleMouseOverThree}
             onMouseLeave={handleMouseLeaveThree}
             label="Projects" key="Projects" component={Link} to={"/projects"} />
      </Tabs>
    </Box>
  );
}

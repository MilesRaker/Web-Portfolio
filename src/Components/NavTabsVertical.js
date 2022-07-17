import * as React from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { Link } from 'react-router-dom';



export default function NavTabsVertical() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ height: '100%', alignItems: 'flex-end' }}>
      <Tabs value={value} 
      onChange={handleChange} 
      aria-label="nav tabs"
      orientation="vertical"
      textColor="secondary"
      indicatorColor="secondary"
      variant="fullWidth"
      >
        <Tab label="Resume" key="Resume" component={Link} to={"/resume"} />
        <Tab label="Values" key="Values" component={Link} to={"/values"} />
        <Tab label="Contact" key="Contact" component={Link} to={"/contact"} />
      </Tabs>
    </Box>
  );
}

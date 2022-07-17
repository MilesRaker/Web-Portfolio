import * as React from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

function LinkTab(props) {
  return (
    <Tab
      component="a"
      onClick={(event) => {
        event.preventDefault();
      }}
      {...props}
    />
  );
}

export default function NavTabsHoriztonal() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Tabs value={value} 
      onChange={handleChange} 
      aria-label="nav tabs"
      orientation="horizontal"
      textColor="secondary"
      indicatorColor="secondary"
      >
        <LinkTab label="Resume" href="/resume" />
        <LinkTab label="Values" href="/values" />
        <LinkTab label="Contact" href="/contact" />
      </Tabs>
    </Box>
  );
}

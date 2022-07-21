import * as React from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { Links } from 'react-router-dom';

export default function NavTabsVertical(props) {
  const [value, setValue] = React.useState(false);
  // const [pathname, setPathname] = React.useState(window.location.pathname);
  /* if window.location.pathname == '/' then false */
  /* if window.location.pathname == 'resume' then 0 */
  /* if window.location.pathname == 'values' then 1 */
  /* if window.location.pathname == 'contact' then 2 */

  const handleChange = (event, newValue) => {
    setValue(newValue);
    // setPathname(window.location.pathname)
  };

  React.useEffect(() => {
    if(props.isHomepage){
      setValue(false);
    }
  })

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
        <Tab label="Values" key="Values" component={Link} to={"/values"}  />
        <Tab label="Contact" key="Contact" component={Link} to={"/contact"} />
      </Tabs>

    </Box>
  );
}

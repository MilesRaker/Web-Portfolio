import { useEffect, useState } from 'react';

/* Determines if rendered page is Homepage */
/* Lives in each page's lowest branch */


function IsHomepage(props)  {
    /* Store pathname in state */
    const [pathname, setPathname] = useState(window.location.pathname); 

    /* bool: are we at homepage? */
    let checkHomepage = () => {
        return pathname === "/";
    }

    /* Update state after every render */
    useEffect(() => {
        setPathname(window.location.pathname);
        props.setIsHomepage(checkHomepage);
    })




}
    



export default IsHomepage;
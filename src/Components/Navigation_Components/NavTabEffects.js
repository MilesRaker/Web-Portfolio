/* NavTabEffects is a stub for refactoring NavTabsVertical and NavTabsHorizontal - Not yet in use*/
// if on the homepage, do not focus a tab
// otherwise, focus on the current tab
import {useLocation} from "react-router-dom";
import React, {useEffect, useState} from "react";
import customTheme from "../ThemeProvider";

export default function NavTabEffects() {
    const location = useLocation();

    const [currentPage, setCurrentPage] = React.useState(-1);

    useEffect(() => {
        switch (location.pathname) {
            case '/':
                setCurrentPage(-1);
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
                setCurrentPage(-1);
                break;
        }
    }, [location])

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
        textDecoration: 'underline',
        textDecorationThickness: 3,
        textDecorationColor: customTheme.palette.secondary.main
    }

// Tab 1
    const handleMouseOverOne = () => {
        if (currentPage !== 1)
            setTabOneSx(hoverSx)
    }
    const handleMouseLeaveOne = () => {
        setTabOneSx(nonHoverSx)
    }
// Tab 2
    const handleMouseOverTwo = () => {
        if (currentPage !== 2)
            setTabTwoSx(hoverSx)
    }
    const handleMouseLeaveTwo = () => {
        setTabTwoSx(nonHoverSx)
    }
// Tab 3
    const handleMouseOverThree = () => {
        if (currentPage !== 3)
            setTabThreeSx(hoverSx)
    }
    const handleMouseLeaveThree = () => {
        setTabThreeSx(nonHoverSx)
    }

}
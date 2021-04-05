import React from 'react'
import { Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import imageLogo from '../images/Logo.png'

const useStyles = makeStyles({
    root: {
        background: 'rgba(0, 0, 0, 0)',
        color: 'red',
        height: '0px'
    },
    logo: {
        padding: 20
    },

    sublogo: {
        padding: 20,
    },

    sublogoimage:{
        width: 'auto',
        height: 'auto',
        maxHeight: '50px'
    }

  });

export default function NavBar({pageType}) {
    const classes = useStyles();

    if (pageType === "intro"){
        return (
            <Box className={classes.root} position="static">
                <Box className={classes.logo}>
                    <img src={imageLogo} alt="Logo" />
                </Box>
            </Box>
        ); 
    }
    else{
        return (
            <Box className={classes.root} position="static">
                <Box className={classes.sublogo}>
                    <img src={imageLogo} alt="Logo" className={classes.sublogoimage} />
                </Box>
            </Box>
        );
    }
}

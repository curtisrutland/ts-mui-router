import React from "react";
import { Typography } from '../mui';

const About: React.SFC = () => {
    const message = process.env.REACT_APP_MAIN_MESSAGE;
    return (
        <>
            <Typography variant="h5">About</Typography>
            <Typography variant="h6">{message}</Typography>
        </>
    )
};

export default About;
import React from "react";
import { useRouteError } from "react-router-dom";
// This is a specal hook given to us by react router dom

const Error = () => {
    return(
        <div>
            <h1>Oops something went wrong...!</h1>
        </div>
    );
};

export default Error;
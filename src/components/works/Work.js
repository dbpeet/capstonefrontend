import React from 'react';

const Work = ( props ) => {
    return(
    <h1 key={props.key}>{props.work.title}</h1>
    )
}

export default Work;

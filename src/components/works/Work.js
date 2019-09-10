import React from 'react';

const Work = ( props ) => {
    return(
    <div className='work'>
        <button>Edit</button>
        <button>Delete</button>
        <br/>
        <iframe width="560" height="315" src={`https://www.youtube.com/embed/${props.work.video_id}`} frameBorder="0" allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        <h1>{props.work.title}</h1>
        <p>{props.work.description}</p>
    </div>
    )
}

export default Work;

import React from 'react';


const GenreSummary = ( props ) => {
    return(
    <div className='genre'>
        <h4>{props.genre.name}</h4>
        <p>{props.genre.description}</p>
    </div>
    )
}

export default GenreSummary;
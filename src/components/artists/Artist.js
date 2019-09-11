import React from 'react';
import './artist.css';


const Artist = ( props ) => {
    return(
    <div className='artist'>
        <img src={props.artist.img_link}/>
        <h3>{props.artist.username}</h3>
        <p>{props.artist.work_genres[0].name}</p>
    </div>
    )
}

export default Artist;
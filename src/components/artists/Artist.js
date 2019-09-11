import React from 'react';
import {Link} from 'react-router-dom';
import './artist.css';



const Artist = ( props ) => {
    return(
    <Link to={`/profile/${props.artist._id}`}  > 
        <div className='artist'>
            <img src={props.artist.img_link} alt='avatar'/>
            <h3>{props.artist.username}</h3>
            <p>{props.artist.work_genres[0].name}</p>
        </div>
    </Link>    
    )
}

export default Artist;
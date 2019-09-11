import React from 'react';
import EditWork from '../modals/EditWork';
import './work.css'

const Work = ( props ) => {
    return(
    <div className='work'>
        <EditWork getUser={props.getUser} work={props.work}/>
        <button onClick={()=>props.deletThis(props.work._id)}>Delete</button>
        <br/>
        <iframe width="560" height="315" src={`https://www.youtube.com/embed/${props.work.video_id}`} frameBorder="0" title={props.work._id} allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        <h3>{props.work.title}</h3>
        <h3>{props.work.artist.username}</h3>
        <p>{props.work.description}</p>
    </div>
    )
}

export default Work;

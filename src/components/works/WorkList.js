import React from 'react';
import Work from './Work';
//import '../Cities/css/cities.css';


const WorkList = ( {works} ) => {
  console.log(`WorkListProps: ${works})}`)
  if(works){
    const worksToList = works.map((work) => <Work key={work._id} work={work} />)

    console.log(`Works: ${toString(worksToList)}`)
  
    return(
      <div className="row">
            <div className="col-md-4 left-section">
                <div className="container">
                <h1>Works</h1>
                  {works && worksToList }
                </div>
                {/* <div className="container">
                <h1>Followed Events</h1>
                  {props.followed_events.length && followedEventsList }
                </div> */}
        </div>
      </div>
      
    )
  } else { return <></>}
};

export default WorkList; 
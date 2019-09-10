import React, { Component } from 'react';
import EventDetail from './EventDetail';
//import '../Cities/css/cities.css';


const EventList = ( {user} ) => {
  const hostedEventsList = user.hosted_events.map((event) => <EventDetail key={event._id} event={event} />)

  const followedEventsList = user.followed_events.map((event) => <EventDetail key={event._id} event={event} />)

  return(
    <div className="row">
          <div className="col-md-4 left-section">
              <div className="container">
              <h1>Events</h1>
                { hostedEventsList && user.hosted_events.length}
              </div>
              <div className="container">
              <h1>Followed Events</h1>
                { followedEventsList && user.hosted_events.length}
              </div>
      </div>
    </div>
    
  )
};

export default EventList; 
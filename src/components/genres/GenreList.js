import React, { Component } from 'react';
import GenreSummary from './GenreSummary';
//import '../Cities/css/cities.css';


const GenreList = ( props ) => {
  const genreList = props.genres.map((genre) => <GenreSummary key={genre._id} genre={genre} />)

  return(
    <div className="row">
              <div className="container">
              <h3>Genres</h3>
                { props.genres.length && genreList }
              </div>
    </div>
    
  )
};

export default GenreList; 
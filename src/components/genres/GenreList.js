import React from 'react';
import GenreSummary from './GenreSummary';
//import '../Cities/css/cities.css';


const GenreList = ( props ) => {
  const genreList = props.genres.map((genre) => <GenreSummary key={genre._id} genre={genre} />)

  return(
    <div className="row">
              <div className="container">
              <h2>Genres</h2>
                { props.genres.length && genreList }
              </div>
    </div>
    
  )
};

export default GenreList; 
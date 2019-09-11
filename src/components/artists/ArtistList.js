import React, {Component} from 'react';
import Artist from './Artist';

class ArtistList extends Component {
  render() {
    if(this.props.artists){
      const artistsToList = this.props.artists.map((artist) => <Artist key={artist._id} artist={artist}/>)

      return(
        <div className="row">
            <div className="col-md-4 left-section">
                <div className="container">
                    <h2>Artists</h2>
                    {this.props.artists && artistsToList }
                </div>
            </div>
        </div> 
      )
  } else { return(
    <h5>no works to show</h5>
  )}}
};


export default ArtistList; 
import React, {Component} from 'react';
import Work from './Work';
import AddWork from '../modals/AddWork';
//import '../Cities/css/cities.css';
// import axios from 'axios';
// import { API_URL } from '../../constants.js';


class WorkList extends Component {
  // state = {
  //   title: '',
  //   description: '',
  //   video_id: '',
  //   media_type: 'video',
  //   artist: localStorage.getItem('uid'),
  //   genre: '5d72da73f6cf606626b90f57',
  // }

  // initialState = {
  //   title: '',
  //   description: '',
  //   video_id: '',
  //   media_type: 'video',
  //   artist: localStorage.getItem('uid'),
  //   genre: '5d72da73f6cf606626b90f57',
  // }

  // shouldComponentUpdate(nextProps) {
  //   if (this.props.works === nextProps.works) {
  //     return false;
  //   } else {
  //     return true;
  //   }
  // }

  // handleSubmit = (event) => {
  //   event.preventDefault();
  //   const workInfo = this.state;
  //   axios.post(`${API_URL}/works`, workInfo, { withCredentials: true })
  //     .then(res => {
  //       this.setState({...this.initialState})
  //       this.props.getUser()
  //     })
  //     .catch(err => {
  //       console.log(err);
  //     });
  // };

  // handleChange = (event) => {
  //   this.setState({
  //     [event.target.name]: event.target.value
  //   });
  // };

  
  
  
  render() {
    if(this.props.works){
      const revWorks = this.props.works.reverse()
      const worksToList = revWorks.map((work) => <Work key={work._id} work={work} />)

      return(
        <div className="row">
              <AddWork handleSubmit={this.handleSubmit} getUser={this.props.getUser}/>
              <div className="col-md-4 left-section">
                  <div className="container">
                  <h2>Works</h2>
                    {this.props.works && worksToList }
                  </div>
                  {/* <div className="container">
                  <h1>Followed Events</h1>
                    {props.followed_events.length && followedEventsList }
                  </div> */}
          </div>
        </div>
        
      )
  } else { return(
    <AddWork handleSubmit={this.handleSubmit}/>
  )}}
};


export default WorkList; 
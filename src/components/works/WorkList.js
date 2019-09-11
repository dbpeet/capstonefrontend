import React, {Component} from 'react';
import Work from './Work';
import AddWork from '../modals/AddWork';
//import '../Cities/css/cities.css';
// import axios from 'axios';
// import { API_URL } from '../../constants.js';


class WorkList extends Component {
  render() {
  
    if(this.props.works){
      const revWorks = this.props.works.reverse()
      const worksToList = revWorks.map((work) => <Work key={work._id} work={work} getUser={this.props.getUser} deletThis={this.props.deletThis}/>)
      let isProfile =this.props.isProfile

      const profileList = (
        <div className="row">
                  <AddWork handleSubmit={this.handleSubmit} getUser={this.props.getUser}/>
                  <div className="col-md-4 left-section">
                      <div className="container">
                      <h2>Works</h2>
                        {this.props.works && worksToList }
                      </div>
                  </div>
        </div>
        )
        const homeList = (
          <div className="row">
                  <div className="col-md-4 left-section">
                      <div className="container">
                      <h2>Works</h2>
                        {this.props.works && worksToList }
                      </div>
                  </div>
          </div>
        )
                    
      return(
        <>
          { isProfile==='true' ? profileList : homeList }
        </>
      )
  } else { return(
    <AddWork handleSubmit={this.handleSubmit}/>
  )}
}};


export default WorkList; 
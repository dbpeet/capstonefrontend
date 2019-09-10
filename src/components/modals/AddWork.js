import React, {Component} from 'react';
import axios from 'axios';
import { API_URL } from '../../constants.js';

class AddWork extends Component {
    state = {
        title: '',
        description: '',
        video_id: '',
        media_type: 'video',
        artist: localStorage.getItem('uid'),
        genre: '5d72da73f6cf606626b90f57',
      }
    
      initialState = {
        title: '',
        description: '',
        video_id: '',
        media_type: 'video',
        artist: localStorage.getItem('uid'),
        genre: '5d72da73f6cf606626b90f57',
      }
    
      handleChange = (event) => {
        this.setState({
          [event.target.name]: event.target.value
        });
      };

      handleSubmit = (event) => {
        event.preventDefault();
        const workInfo = this.state;
        axios.post(`${API_URL}/works`, workInfo, { withCredentials: true })
          .then(res => {
            this.setState({...this.initialState})
            this.props.getUser()
          })
          .catch(err => {
            console.log(err);
          });
      };


    render() {
    return(
        <>
            <h4>Add A Work</h4>
            <form onSubmit={this.handleSubmit}>
            <div className="form-group">
            <label htmlFor="title">Title</label>
            <input className="form-control form-control-lg" type="title" id="title" name="title" value={this.state.title} onChange={this.handleChange} placeholder="your title here" />
            </div>
            <div className="form-group">
            <label htmlFor="description">Description</label>
            <input className="form-control form-control-lg" type="description" id="description" name="description" value={this.state.description} onChange={this.handleChange} />
            </div>
            <div className="form-group">
            <label htmlFor="video_id">Video ID</label>
            <input className="form-control form-control-lg" type="video_id" id="video_id" name="video_id" value={this.state.video_id} onChange={this.handleChange} placeholder='everything after the "=" in a youtube URL'/>
            </div>
            <button type="submit" className="btn btn-primary float-right">Submit</button>
            </form>
        </>
    )};
}

export default AddWork;



import React, {Component} from 'react';
import axios from 'axios';
import { API_URL } from '../../constants.js';

class EditWork extends Component {
    state = {
        title: this.props.work.title,
        description: this.props.work.description,
        video_id: this.props.work.video_id,
        // media_type: 'video',
        // artist: this.props.work.artist,
        // genre: this.props.work.genre,
        _id: this.props.work._id
      }

      handleChange = (event) => {
        this.setState({
          [event.target.name]: event.target.value
        });
      };

      handleSubmit = (event) => {
        event.preventDefault();
        const workInfo = this.state;
        axios.put(`${API_URL}/works/${this.state._id}`, workInfo, { withCredentials: true })
          .then(res => {
            this.props.getUser()
          })
          .catch(err => {
            console.log(err);
          });
      };

// update(e) {
//         e.preventDefault();
//         const employee = {
//             name: this.state.name,
//             age: this.state.age,
//             salary: this.state.salary,
//         }
//         axios.put('http://dummy.restapiexample.com/api/v1/update/{this.state.id}', employee)
//         .then(res => console.log(res.data));
//     }


    render() {
    return(
        <>
            <h4>Edit This Work</h4>
            <form onSubmit={this.handleSubmit}>
            <div className="form-group">
            <label htmlFor="title">Title</label>
            <input className="form-control form-control-lg" type="title" id="title" name="title" value={this.state.title} onChange={this.handleChange} placeholder={this.state.title} />
            </div>
            <div className="form-group">
            <label htmlFor="description">Description</label>
            <input className="form-control form-control-lg" type="description" id="description" name="description" value={this.state.description} onChange={this.handleChange}  placeholder={this.state.description}/>
            </div>
            <div className="form-group">
            <label htmlFor="video_id">Video ID</label>
            <input className="form-control form-control-lg" type="video_id" id="video_id" name="video_id" value={this.state.video_id} onChange={this.handleChange}  placeholder={this.state.video_id}/>
            </div>
            <button type="submit" className="btn btn-primary float-right">Submit</button>
            </form>
        </>
    )};
}

export default EditWork;
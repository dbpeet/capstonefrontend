import React, {Component} from 'react';
import axios from 'axios';
import WorkList from '../components/works/WorkList';
import ProfileHeader from '../components/profile/ProfileHeader'
import { API_URL } from '../constants.js';


class ProfileContainer extends Component {
    state = {
        user: {},
    }

    componentDidMount() {
        const userId = localStorage.getItem('uid');
        axios.get(`${API_URL}/users/${userId}`, { withCredentials: true})
            .then(res => { 
                this.setState({ user: res.data.data })
            })
            .catch(error => console.log(error))
    };

    getUser = () => {
        let userId= localStorage.getItem('uid');
        axios.get(`${API_URL}/users/${userId}`, {withCredentials: true})
        .then(res => { 
            this.setState({ user: res.data.data })
        })
        .catch(error => console.log(error))
    };

    deletThis = (workId) => {
        axios.delete(`${API_URL}/works/${workId}`, {withCredentials: true})
        .then(res => { 
            this.getUser()
        })
        .catch(error => console.log(error))
    };
    
    render() {
        return (

        <>
            <ProfileHeader user={this.state.user}/>
            {/* <EventList user={this.state.user}/> */}
            <WorkList works={this.state.user.works} getUser={this.getUser} deletThis={this.deletThis}/>
        </>
        )
    };
};

export default ProfileContainer;
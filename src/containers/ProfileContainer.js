import React, {Component} from 'react';
import axios from 'axios';
import EventList from '../components/events/EventList';
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

    // getUserWorks = (worksArr) => {
    //     const works = [];
    //     worksArr.forEach(function(workId) {
    //         var work = axios.get(`${API_URL}/works/${workId}`, {withCredentials: true})
    //         .then(works.append(work));
    //     })
    //     this.setState({works})
    //     console.log("getUserWorks works=", works);
    // };
    // getHostedEvents = (eventsArr) => {
    //     const hosted_events = [];
    //     eventsArr.forEach(function(eventId) {
    //         var event = axios.get(`${API_URL}/events/${eventId}`, {withCredentials: true})
    //         .then(hosted_events.append(event));
    //     })
    //     this.setState({hosted_events})
    //     console.log("getUserEvents hosted_events=", hosted_events);
    // };
    // getWorkGenres = (genresArr) => {
    //     const work_genres = [];
    //     genresArr.forEach(function(genreId) {
    //         var genre = axios.get(`${API_URL}/genres/${genreId}`, {withCredentials: true})
    //         .then(work_genres.append(genre));
    //     })
    //     this.setState({work_genres})
    //     console.log("getWorkGenres work_genres=", work_genres);
    // };
    // getAudience = (audienceArr) => {
    //     const audience = [];
    //     audienceArr.forEach(function(followerId) {
    //         var follower = axios.get(`${API_URL}/users/${followerId}`, {withCredentials: true})
    //         .then(audience.append(follower));
    //     })
    //     this.setState({audience})
    //     console.log("audience audience=", audience);
    // };
    // getFollowedGenres = (genresArr) => {
    //     const followed_genres = [];
    //     genresArr.forEach(function(genreId) {
    //         var genre = axios.get(`${API_URL}/genres/${genreId}`, {withCredentials: true})
    //         .then(followed_genres.append(genre));
    //     })
    //     this.setState({followed_genres})
    //     console.log("getFollowedGenres followed_genres=", followed_genres);
    // };
    // getFollowedArtists = (artistsArr) => {
    //     const followed_artists = [];
    //     artistsArr.forEach(function(userId) {
    //         var artist = axios.get(`${API_URL}/users/${userId}`, {withCredentials: true})
    //         .then(followed_artists.append(artist));
    //     })
    //     this.setState({followed_artists})
    //     console.log("getFollowedArtists followed_artists=", followed_artists);
    // };
    // getFollowedEvents = (eventsArr) => {
    //     const followed_events = [];
    //     eventsArr.forEach(function(eventId) {
    //         var event = axios.get(`${API_URL}/events/${eventId}`, {withCredentials: true})
    //         .then(followed_events.append(event));
    //     })
    //     this.setState({followed_events})
    //     console.log("getFollowedEvents followed_events=", followed_events);
    // };
    
    
    render() {
        return (

        <>
            <ProfileHeader user={this.state.user}/>
            {/* <EventList user={this.state.user}/> */}
            <WorkList works={this.state.user.works} getUser={this.getUser}/>
        </>
        )
    };
};

export default ProfileContainer;
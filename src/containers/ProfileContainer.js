import React, {Component} from 'react';
import axios from 'axios';
import EventList from '../components/events/EventList';
import WorkList from '../components/works/WorkList';
import ProfileHeader from '../components/profile/ProfileHeader'
import { API_URL } from '../constants.js';


class ProfileContainer extends Component {
    state = {
        user: {},
        works: [],
        work_genres: [],
        hosted_events: [],
        audience: [],
        followed_genres: [],
        followed_artists: [],
        followed_events: [],
    }

    componentDidMount() {
        const userId = localStorage.getItem('uid');
        axios.get(`${API_URL}/users/${userId}`, { withCredentials: true})
            .then(res => { 
                this.setState({ user: res.data.data })
                // , ()=>{
                //     this.getUser()
                    // this.getFollowedArtists(this.state.user.followed_artists);
                    // this.getFollowedEvents(this.state.user.followed_events);
                    // this.getFollowedGenres(this.state.user.followed_genres);
                    // if(this.state.user.isArtist===true){
                    //     this.getUserWorks(this.state.user.works);
                    //     this.getHostedEvents(this.state.user.hosted_events);
                   //     this.getWorkGenres(this.state.user.work_genres);
                    //     this.getAudience(this.state.user.audience);
            })
           
            
            .catch(error => console.log(error))

        
    };

    getUser = () => {
        let userId= localStorage.getItem('uid');
        var user = axios.get(`${API_URL}/users/${userId}`, {withCredentials: true})
            .then(this.setState({user}))
        
        console.log("getUser user=", user);
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
    getHostedEvents = (eventsArr) => {
        const hosted_events = [];
        eventsArr.forEach(function(eventId) {
            var event = axios.get(`${API_URL}/events/${eventId}`, {withCredentials: true})
            .then(hosted_events.append(event));
        })
        this.setState({hosted_events})
        console.log("getUserEvents hosted_events=", hosted_events);
    };
    getWorkGenres = (genresArr) => {
        const work_genres = [];
        genresArr.forEach(function(genreId) {
            var genre = axios.get(`${API_URL}/genres/${genreId}`, {withCredentials: true})
            .then(work_genres.append(genre));
        })
        this.setState({work_genres})
        console.log("getWorkGenres work_genres=", work_genres);
    };
    getAudience = (audienceArr) => {
        const audience = [];
        audienceArr.forEach(function(followerId) {
            var follower = axios.get(`${API_URL}/users/${followerId}`, {withCredentials: true})
            .then(audience.append(follower));
        })
        this.setState({audience})
        console.log("audience audience=", audience);
    };
    getFollowedGenres = (genresArr) => {
        const followed_genres = [];
        genresArr.forEach(function(genreId) {
            var genre = axios.get(`${API_URL}/genres/${genreId}`, {withCredentials: true})
            .then(followed_genres.append(genre));
        })
        this.setState({followed_genres})
        console.log("getFollowedGenres followed_genres=", followed_genres);
    };
    getFollowedArtists = (artistsArr) => {
        const followed_artists = [];
        artistsArr.forEach(function(userId) {
            var artist = axios.get(`${API_URL}/users/${userId}`, {withCredentials: true})
            .then(followed_artists.append(artist));
        })
        this.setState({followed_artists})
        console.log("getFollowedArtists followed_artists=", followed_artists);
    };
    getFollowedEvents = (eventsArr) => {
        const followed_events = [];
        eventsArr.forEach(function(eventId) {
            var event = axios.get(`${API_URL}/events/${eventId}`, {withCredentials: true})
            .then(followed_events.append(event));
        })
        this.setState({followed_events})
        console.log("getFollowedEvents followed_events=", followed_events);
    };

    
    render() {
        return (

        <>
            <ProfileHeader user={this.state.user}/>
            <EventList hosted_events={this.state.hosted_events} followed_events={this.state.followed_events}/>
            <WorkList works={this.state.user.works}/>
        </>
        )
    };
};

export default ProfileContainer;
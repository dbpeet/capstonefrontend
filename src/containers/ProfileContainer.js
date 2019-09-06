import React, {Component} from 'react';
import axios from 'axios';
import EventList from './/components/events/EventList';
import WorkList from './/components/works/Worklist';
import ProfileHeader from '../components/profile/ProfileHeader'
import { API_URL } from '../constants.js';


class ProfileContainer extends Component {
    state = {
        user: {},
        works: [],
        work_genres: [],
        followed_genres: [],
        followed_artists: [],
        hosted_events: [],
        followed_events: [],
    }

    componentDidMount() {
        const userId = localStorage.getItem('uid');
        axios.get(`${API_URL}/users/${userId}`, { withCredentials: true})
            .then(res => { 
                console.log(res);
                this.setState({ user: res.data.data }, ()=>{
                    if(this.state.user.isArtist===True){
                        this.getUserWorks(this.state.user.works);
                        this.getHostedEvents(this.state.user.hosted_events);
                        this.getWorkGenres(this.state.user.work_genres);
                        this.getFollowedArtists(this.state.user.followed_artists);
                        this.getFollowedEvents(this.state.user.followed_events);
                        this.getFollowedGenres(this.state.user.followed_genres);
                    } else {
                        this.getFollowedArtists(this.state.user.followed_artists);
                        this.getFollowedEvents(this.state.user.followed_events);
                        this.getFollowedGenres(this.state.user.followed_genres);
                    }
                });
               
            })
            .catch(error => console.log(error))

        
    };

    getUserWorks = (worksArr) => {
        const works = [];
        worksArr.forEach(function(workId) {
            var work = axios.get(`${API_URL}/work/${workId}`, {withCredentials: true})
            .then(works.append(work));
        })
        this.setState({works})
        console.log("getUserWorks works=", works);
    };
    getHostedEvents = (eventsArr) => {
        const hosted_events = [];
        eventsArr.forEach(function(eventId) {
            var event = axios.get(`${API_URL}/event/${eventId}`, {withCredentials: true})
            .then(events.append(event));
        })
        this.setState({hosted_events})
        console.log("getUserEvents hosted_events=", events);
    };
    getWorkGenres = (genresArr) => {
        const work_genres = [];
        genresArr.forEach(function(genreId) {
            var genre = axios.get(`${API_URL}/genre/${genreId}`, {withCredentials: true})
            .then(work_genres.append(work_genres));
        })
        this.setState({work_genres})
        console.log("getWorkGenres work_genres=", work_genres);
    };
    
    render() {
        return (

        <>
            <ProfileHeader user={this.state.user}/>
            <EventList events={this.state.events}/>
            <WorkList works={this.state.works}/>
        </>
        )
    };
};

export default ProfileContainer;
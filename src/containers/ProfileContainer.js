import React, {Component} from 'react';
import axios from 'axios';
// import Profile from '../pages/Profile/Profile';
// import PostList from '../components/Posts/PostList';
import { API_URL } from '../constants.js';
// import CityView from '../pages/Cities/CityView';

class ProfileContainer extends Component {
    state = {
        user: '',
        posts: [],
    }

    componentDidMount() {
       

        // const getUserPosts = (postArr) => {
        //     const posts = [];
        //     postArr.forEach(function(postId) {
        //         var post = axios.get(`${API_URL}/post/${postId}`, {withCredentials: true})
        //         .then(posts.append(post));
        //     })
        //     this.setState({posts})
        //     console.log("getUserPOst posts=", posts);
        // };

  
        const userId = localStorage.getItem('uid');
        axios.get(`${API_URL}/users/${userId}`, { withCredentials: true})
            .then(res => { console.log(res); this.setState({ user: res.data.data }, () => {
                axios({
                    url:`${API_URL}/post`,
                    method: 'PUT',
                    data: { user_id: userId },
                    withCredentials: true})
                    .then(resPosts => {
                        console.log("resPosts Profile =", resPosts); 
                        this.setState({posts: (resPosts.data)})})
            })})
            .catch(error => console.log(error))
    };

    
    render() {
        return (

        <>
      
            Profile Boop

              {/* <div className="row">
            <div className="col-md-6 left-section">
                <div className="container mt-3">
                    <Profile user={this.state.user} />
                </div>
            </div>
            <div className="col-md-6 right-section">
                <PostList posts={this.state.posts} />
                <div className="container">
                </div>
              </div>
            </div>                */}
        </>
        )
    };
};

export default ProfileContainer;
import React, {Component} from 'react';
import axios from 'axios';
import ArtistList from '../components/artists/ArtistList';
import WorkList from '../components/works/WorkList';
import GenreList from '../components/genres/GenreList';
import { API_URL } from '../constants.js';


class HomeContainer extends Component {
    state = {
        artists: [],
        works: [],
        genres: [],
    }

    componentDidMount() {
        axios.get(`${API_URL}/all`)
        .then(res => { 
            this.setState({ artists: res.data.data.artists, works: res.data.data.works, genres: res.data.data.genres })
        })
        .catch(error => console.log(error))
    };

    render() {
        return (

        <section className='homeContainer'>
            <ArtistList style={'grid-column: 1;'} artists={this.state.artists}/>
            <GenreList style={'grid-column: 2;'} genres={this.state.genres}/>
            <WorkList isProfile='false' style={"grid-column: 3;"} works={this.state.works}/>
        </section>
        )
    };
};

export default HomeContainer;
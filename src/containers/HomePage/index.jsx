import React, { Component } from 'react';
import './styles.scss'
import {Link} from 'react-router-dom'
import axios from 'axios';
import Loading from '../../components/Loading';

//import {createBrowserHistory} from 'history';

class Home extends Component{

    state = {
        posts: [ ]
    }

    componentDidMount(){
        axios.get('https://swapi.co/api/films/')
            .then( res => {
                //console.log("hehe",res.data.results)
                this.setState({
                    posts: res.data.results
                })
            })
    }

    redirectInfo = async(key,event) => {
        //console.log("HAI",key+1);
        this.props.history.push('/films/'+key);
    }

    getMovie(){
        console.log(this.state.posts)
        //External
        const { posts } = this.state;
        let sortedPosts = posts.sort((a,b) => a.release_date > b.release_date)
        //console.log("hehe",sortedPosts)
        const postList = sortedPosts.length ? (
            sortedPosts.map((post, key) =>
                    //<Link to={'/'+key}>
                    <div  onClick={this.redirectInfo.bind(this,key+1)}>
                        {console.log(typeof key)}
                        <div className="row list" key={post.episode_id}>
                            <div className="contentleft"><p>{post.title}</p></div>
                            <div className="contentright"><p>{post.release_date}</p></div>
                        </div>
                    </div>
                    //</Link>
            )
        ) : (
            <Loading/>
        )
        return (
            <div>{postList}</div>
        );
    }
    render(){
        return (
            <div>{this.getMovie()}</div>
        );
    }
}

export default Home;

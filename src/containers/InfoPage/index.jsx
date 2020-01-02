import './styles.scss'
import React, {Component} from 'react'
import axios from 'axios'
import Loading from '../../components/Loading'

class Info extends Component{
    state = {
        post: null
    }
    componentDidMount(){
        let id = this.props.match.params.film_id;
        axios.get('https://swapi.co/api/films/' + id)
            .then( res => {
                this.setState({
                    post: res.data
                })
                console.log("hehe",res)
            })
        this.setState({
            id: id
        })
    }
    render(){
        const post = this.state.post ? (
            <div>
                <div className="row list red">
                    <div className="contentleft">Title</div>
                    <div className="contentright">{this.state.post.title}</div>
                </div>
                <div className="row list orange">
                    <div className="contentleft">Episode ID</div>
                    <div className="contentright">{this.state.post.episode_id}</div>
                </div>
                <div className="row list yellow">
                    <div className="contentleft">Release Date</div>
                    <div className="contentright">{this.state.post.release_date}</div>
                </div>
                <div className="row list green">
                    <div className="contentleft">Director</div>
                    <div className="contentright">{this.state.post.director}</div>
                </div>
                <div className="row list blue">
                    <div className="contentleft">Producer</div>
                    <div className="contentright">{this.state.post.producer}</div>
                </div>
                <div className="row list indigo">
                    <div className="contentleft">Created</div>
                    <div className="contentright">{this.state.post.created}</div>
                </div>
                <div className="row listdesc list violet">
                    <div className="contentleft">Description</div>
                    <div className="contentdesc">{this.state.post.opening_crawl}</div>
                </div>
            </div>
        ) : (
            <Loading/>
        )
        return(
            <div>{post}</div>
        )
    }
}

export default Info;

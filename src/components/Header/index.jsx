import React from 'react';
import './styles.scss';
import { Link } from "react-router-dom";

class Header extends React.Component{
    state={
        currentPage: "HomePage",
    };

    handleClick(props){
        this.setState({currentPage: props});
    }

    render() {
        return (
            <div className="topnav row">
                <Link onClick={this.handleClick.bind(this,"HomePage")} className={this.state.currentPage==="HomePage" ? "active col-6 titlenav" : "col-6 titlenav"} to="/">Home Page</Link>
                <Link onClick={this.handleClick.bind(this,"AboutPage")} className={this.state.currentPage==="AboutPage" ? "active col-6 titlenav" : "col-6 titlenav"} to="/about">About Page</Link>
            </div>
        );
    }


}

export default Header;

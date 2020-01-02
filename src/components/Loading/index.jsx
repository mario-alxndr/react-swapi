import React from 'react';
import './styles.scss';
import Stormtrooper from '../../stormtrooper.png'

class Loading extends React.Component{
    render(){
        return(
            <div>
                <div className="center">
                    <img src={Stormtrooper} alt="stormtrooper"/>
                </div>
                <h1 align="center">Loading</h1>
            </div>
            
        );
    }
}

export default Loading;
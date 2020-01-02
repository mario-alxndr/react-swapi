import React from 'react';
import './styles.scss';
import { BrowserRouter as Router, Route ,Switch} from "react-router-dom";

//Component
import Header from '../../components/Header';

// Containers
import About from '../AboutPage';
import Home from '../HomePage';
import Info from '../InfoPage';

function App() {
    return (
        <Router>
            <Header/>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route path="/about" component={About}/>
                <Route path="/films/:film_id" component={Info}/>
            </Switch>
        </Router>
    );
}

export default App;

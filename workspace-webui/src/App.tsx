import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Main from './Pages/Main/Main';


class App extends Component {
    public render() {
        return (
            <Router>
                <Route path="/" exact={true} component={Main} />
            </Router>
        );
    }
}

export default App;

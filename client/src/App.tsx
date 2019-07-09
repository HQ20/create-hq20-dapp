import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Main from './Pages/Main/Main';


class App extends Component {
    public render() {
        return (
            <div>
                <Router>
                    <div>
                        <Route path="/" exact={true} component={Main} />
                    </div>
                </Router>
            </div>
        );
    }
}

export default App;

/* globals document */
import React from 'react';
import ReactDOM from 'react-dom';
import Main from './Pages/Main/Main';

export default function renderApp() {
    ReactDOM.render(<Main />, document.getElementById('root'));
}

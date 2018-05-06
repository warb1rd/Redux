import React from 'react';
import ReactDOM from 'react-dom';
import API_KEY from './config_keys.js';
import SearchBar from './components/searchBar.js'
//Component produces HTML 
const App = function(){
    return <div>Hi!</div>                                       //jsx gets transpiled to vanilla js
}

// Take the generated HTML and put in on the page in the DOM
ReactDOM.render(<App />, document.getElementById('root'));


import React from 'react';
import Main from './components/Main';
import Basic from './components/second/Basic.js';
import Checkbox from './components/second/Checkbox.js';
import FetchData from './components/second/FetchData.js';
import UseState from './components/second/UseState';
import Reducer from './components/second/Reducer.js';
import { BrowserRouter as Router,Route } from 'react-router-dom';


import UseStateStars from './components/forth/UseStateStars.js';
import UseEffect from './components/forth/UseEffect.js';
import UseRef from './components/forth/UseRef.js';
import UseContext from './components/forth/UseContext.js';
import UseFetch from './components/forth/UseFetch.js';

import Regex from './components/Regex';

class App extends React.Component {
  render(){
    return (
      <React.Fragment>
        <Router>
            {/* <Routes >  */}
              <Route exact path='/' component={ Main } />
              <Route exact path='/second/basic' component={ Basic } />
              <Route exact path='/second/useState' component={ UseState } />
              <Route exact path='/second/checkbox' component={ Checkbox } />
              <Route exact path='/second/fetchData' component={ FetchData } />
              <Route exact path='/second/reducer' component={ Reducer } />

              <Route exact path='/forth/useStateStars' component={ UseStateStars } />
              <Route exact path='/forth/useEffect' component={ UseEffect } />
              <Route exact path='/forth/useRef' component={ UseRef } />
              <Route exact path='/forth/useContext' component={ UseContext } />
              <Route exact path='/forth/useFetch' component={ UseFetch } />
              
              <Route exact path='/regex' component={ Regex } />
            {/* </Routes> */}
        </Router>
      </React.Fragment>
    );
  };
};

export default App;


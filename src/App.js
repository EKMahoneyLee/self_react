import React from 'react';
import Main from './components/Main';
import Basic from './components/first/Basic';
import Checkbox from './components/first/Checkbox.js';
import FetchData from './components/first/FetchData.js';
import UseState from './components/first/UseState';
import ReducerCheckbox from './components/first/ReducerCheckbox.js';

import { BrowserRouter as Router,Route,Routes  } from 'react-router-dom';


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
              <Route exact path='/second/reducerCheckbox' component={ ReducerCheckbox } />

              

            {/* </Routes> */}
        </Router>
      </React.Fragment>
    );
  };
};

export default App;


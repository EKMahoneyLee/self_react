import React from 'react';
import Main from './components/Main';
import Basic from './components/second/Basic.js';
import Checkbox from './components/second/Checkbox.js';
import FetchData from './components/second/FetchData.js';
import UseState from './components/second/UseState';
import ReducerCheckbox from './components/second/ReducerCheckbox.js';
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


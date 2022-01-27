import React from 'react';
import Main from './components/Main';
import Checkbox from './components/Checkbox.js';
import FetchData from './components/FetchData.js';
import UseState from './components/UseState';
import ReducerCheckbox from './components/ReducerCheckbox.js';

import { BrowserRouter as Router,Route,Routes  } from 'react-router-dom';


class App extends React.Component {
  render(){
    return (
      <React.Fragment>
        <Router>
            {/* <Routes >  */}
              <Route exact path='/' component={ Main } />
              <Route exact path='/useState' component={ UseState } />
              <Route exact path='/checkbox' component={ Checkbox } />
              <Route exact path='/fetchData' component={ FetchData } />
              <Route exact path='/reducerCheckbox' component={ ReducerCheckbox } />

              

            {/* </Routes> */}
        </Router>
      </React.Fragment>
    );
  };
};

export default App;


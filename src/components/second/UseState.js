import React, { useState } from 'react';
import { Link, withRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';

//useState
function UseState () {
  const [year, setYear] = useState(2022);
  const [manager, setManager] = useState("EK");
  const [status, setStatus] = useState("Open");
    return(
      <>
        <div className='container mt-5'>
          <h1><h4 ><Link to={'/'} >Go back to Main</Link></h4></h1>

          <h3 className='mt-5'>About useState</h3>
          <h5 className='mt-4'>{ year }</h5>
          <button onClick={ () => setYear( year+1 )}>New Year!</button>

          <h5 className='mt-4'> Manager on Duty: {manager}</h5>
          <button onClick = { () => setManager("Sean")}>New Manager</button>
          <button onClick = { () => setManager("Aegi")}>another Manager</button>
          
          <h5 className='mt-4'>Status: {status}</h5>
          <button onClick={ () => setStatus("Open")}>
            Open
          </button>
          <button onClick={ () => setStatus("Back in 5")}>
            Break
          </button>
          <button onClick={ () => setStatus("Closed")}>
            Closed
          </button>
          <br></br><br></br><img src="../images/1.jpg" alt="image" width={500} height={500}/>
        </div>
      </>
    )
  }
  export default withRouter(UseState);
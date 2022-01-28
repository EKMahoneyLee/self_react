import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Link, withRouter } from 'react-router-dom';

function Main() {
    return ( 
        <>
            <div className='container mt-5'> 
                <h6>Learning React.js</h6>
                <ol>
                    <li><Link to={"second/basic"}>Basic</Link></li>
                    <li><Link to={"second/UseState"}>useState</Link></li>
                    <li><Link to={"second/checkbox"}>CheckBox with useState</Link></li>
                    <li><Link to={"second/fetchData"}>Fetch Data</Link></li>
                    <li><Link to={"second/reducerCheckbox"}>reducer with checkbox</Link></li>
                </ol>
        </div>
        </>
    );
}
export default withRouter(Main);
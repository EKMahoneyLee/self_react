import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Link, withRouter } from 'react-router-dom';

function Main() {
    return ( 
        <>
            <div className='container mt-5'>
            <h4>The Lists</h4>
            {/* Status2 */}
            <ol>
                <li><Link to={"UseState"}>useState</Link></li>
                <li><Link to={"checkbox"}>CheckBox with useState</Link></li>
                <li><Link to={"fetchData"}>Fetch Data</Link></li>
                <li><Link to={"reducerCheckbox"}>reducer with checkbox</Link></li>

            </ol>

            {/* Status3 */}
           
        </div>
        </>
    );
}
export default withRouter(Main);
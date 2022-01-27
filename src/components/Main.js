import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Link, withRouter } from 'react-router-dom';

function Main() {
    return ( 
        <>
            <div className='container mt-5'>
            <h5>The Lists</h5>
            {/* Status2 */}
            <ol>
                <li><a href="UseState">useState</a></li>
                <li><a href="checkbox">CheckBox with useState</a></li>
                <li><a href="fetchData">Fetch Data</a></li>
                <li><a href="reducerCheckbox">reducer with checkbox</a></li>

            </ol>

            {/* Status3 */}
            <ol>
                <li><a href="UseState">useState</a></li>
                <li><a href="UseState">useState</a></li>
                <li><a href="UseState">useState</a></li>
                <li><a href="UseState">useState</a></li>
            </ol>
        </div>
        </>
    );
}
export default withRouter(Main);
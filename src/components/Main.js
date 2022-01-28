import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Link, withRouter } from 'react-router-dom';

function Main() {
    return ( 
        <>
            <div className='container mt-5'>
            <h4>The Lists</h4>
            {/* Status2 */}
            <h6>Learning React.js</h6>
            <ol>
                <li><Link to={"second/basic"}>Basic</Link></li>
                <li><Link to={"second/UseState"}>useState</Link></li>
                <li><Link to={"second/checkbox"}>CheckBox with useState</Link></li>
                <li><Link to={"second/fetchData"}>Fetch Data</Link></li>
                <li><Link to={"second/reducerCheckbox"}>reducer with checkbox</Link></li>
            </ol>

            <h6>Reaact Using TypeScript</h6>
            <ol>
                <li><Link to={"third/basic"}>Basic</Link></li>
                <li><Link to={"third/UseState"}>useState</Link></li>
                <li><Link to={"third/checkbox"}>CheckBox with useState</Link></li>
                <li><Link to={"third/fetchData"}>Fetch Data</Link></li>
                <li><Link to={"third/reducerCheckbox"}>reducer with checkbox</Link></li>
            </ol>

            {/* Status3 */}
           
        </div>
        </>
    );
}
export default withRouter(Main);
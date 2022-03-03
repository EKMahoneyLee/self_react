import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Link, withRouter } from 'react-router-dom';

function Main() {
    return ( 
        <>
            <div className='container mt-5'> 
            <h6>2:Learning React.js</h6>
            <ol>
                <li><Link to={"second/basic"}>Basic</Link></li>
                <li><Link to={"second/UseState"}>UseState</Link></li>
                <li><Link to={"second/checkbox"}>CheckBox with useState and then updated with useReducer</Link></li>
                <li><Link to={"second/fetchData"}>Fetch Data (updated!)</Link></li>
                <li><Link to={"second/reducer"}>Reducer (updated!)</Link></li>
            </ol>

            <h6>3: Task App using React and TypeScript</h6>
            <ol>
                <li><a href="https://taskbyek.netlify.app/">Task</a></li>
            </ol>

            <h6>4: Hooks</h6>
            <ol>
                <li><Link to={"forth/useStateStars"}>UseState Stars</Link></li>
                <li><Link to={"forth/useEffect"}>UseEffect </Link></li>
                <li><Link to={"forth/useRef"}>UseRef/useState/custom Hook(Managing Input) </Link></li>
                <li><Link to={"forth/useContext"}>UseContext</Link></li>
                <li><Link to={"forth/useFetch"}>UseFetch</Link></li>
            </ol>

            <h6>5: Component Tree</h6>
            <ol>
                <li><Link to="fifth/componentTree">Component Tree</Link></li>
            </ol>

            <h6>6: Weather App</h6>
            <ol>
                <li><a href="https://ekweather.netlify.app/">Weather app using react</a></li>
            </ol>

            <h6>7: Building Modern Projects with React</h6>
            <ol>
                <li><Link to={"seventh/shouldComponentUpdate"}>ShouldComponentUpdate</Link></li>
            </ol>

            <h6>8: ????</h6>
            <ol>
                <li><Link to={"eighth/askAboutEK"}>Ask About EK</Link></li>
            </ol>

            <h6>10: The lists if regex examples</h6>
            <ol>
                <li><Link to={"regex"}>Regex</Link></li>
            </ol>



        </div>
        </>
    );
}
export default withRouter(Main);
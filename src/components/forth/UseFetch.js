import React, { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import { Link, withRouter } from 'react-router-dom';

//if the data is not available yet but is loading
//if we get the data
//if there is an error

function UseFetch(uri) {
    const [data, setData] = useState();
    const [loading, setLoading] = useState();
    const [error, setError]= useState();

    useEffect(() => {
        if(!uri) return;
        fetch(uri)
            .then((data) =>data.json())
            .then(setData)
            .then(() => setLoading(false))
            .catch(setError)
    },[uri]);
    
    return{loading, data, error};
}

function App1({ login }){
    const  { loading, data, error } = UseFetch(
        `https://api.github.com/users/${login}`
    );
    if (loading) return <h1>loading......</h1>;
    if (error)   return (<pre>{JSON.stringify(error, null, 2)}</pre>);
    return(
        <div>
            <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
    )
}

function App() {
    return (
        <>
            <div className='container mt-5'>
                <h4 ><Link to={'/'} >Go back to Main</Link></h4>
                <div>
                    <App1 login={"EKMahoneyLee"} />
                </div>
            </div>
        </>
    );
}
export default withRouter(App);
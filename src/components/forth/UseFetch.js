import React, { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import { Link, withRouter } from 'react-router-dom';

//if the data is not available yet but is loading
//if we get the data
//if there is an error

function UseFetch(uri) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError]= useState(null);

    useEffect(() => {
        if(!uri) return;
        setLoading(true);
        fetch(uri)
            .then((data) =>data.json())
            .then(setData)
            .then(() => setLoading(false))
            .catch(setError)
    },[uri]);

    //useEffect의 첫 argument는 callback function
    //[] 이것은 useEffect의 세컨 argument이며 dependeny array로 불린다 => 이것은 value를 track 하는데 사용된다.
    
    return{loading, data, error};
}

function App1({ login }){
    const  { loading, data, error } = UseFetch(
        `https://api.github.com/users/${login}`
    );
    if (loading) return <h1>loading......</h1>;
    if (error)   return (<pre>{JSON.stringify(error, null, 2)}</pre>);
    if(!data) return null;
    
    return(
        <>
            <div>
                <pre>{JSON.stringify(data, null, 2)}</pre>
            </div>

            {/* this does not display if the value is either null or false */}
            <h1> {data.login}</h1>
            <p> {data.url}</p>
            <p> {data.public_gists}</p>
            <p> {data.created_at}</p>
            <p> {data.updated_at}</p>
            <p> {data.site_admin}</p>
            <p> {data.avatar_id}</p>
        </>
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
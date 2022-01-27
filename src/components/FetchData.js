import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Link, withRouter } from 'react-router-dom';

function GitHubUser( {login}){
    const [data, setData] = useState(null);
    useEffect( () => {
        fetch(`https://api.github.com/users/${ login}`)
        .then(res => res.json())
        .then(setData)
        .catch(console.error);
    },[]);

    if(data){
        return <>
                <h1>{data.login}</h1>
                <div>{JSON.stringify(data)}</div> 
                <img src={data.avatar_url} width={ 100 }/>
                </>
    }
    return null;
}

function FetchData(){
    return (
        <> 
            <div className='container mt-5'>
            <h4 ><Link to={'/'} >Go back to Main</Link></h4>
                <GitHubUser login="moonhighway" />  
                <br></br><br></br><img src="./images/3.jpg" alt="image" width={600} height={700}/>
            </div>
        </> 
    ) 
}
export default withRouter(FetchData);
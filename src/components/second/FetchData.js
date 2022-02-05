import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Link, withRouter } from 'react-router-dom';

function GitHubUser( {login}){
    // const [data, setData] = useState(null);      //first video
    const [data, setData] = useState([]);

    useEffect( () => {
        // fetch(`https://api.github.com/users/${ login}`)   //first video
        fetch(`https://api.github.com/users`)
        .then(res => res.json())
        .then(setData)
        .catch(console.error);
    },[]);

    if(data){
        return <>
                {/* <h1>{data.login}</h1>         //first video
                <div>{JSON.stringify(data)}</div>         
                <img src={data.avatar_url} width={ 100 }/> */}   
                <ul>
                    {data.map((user) => (
                        <li key ={user.id}>{ user.login }</li>
                    ))}
                </ul>
                <button onClick={ () => setData([])}>Remove Data </button>
                </>
    }
    // return null;   //first video
    return <p> No users</p>;

}

function FetchData(){
    return (
        <> 
            <div className='container mt-5'>
            <h4 ><Link to={'/'} >Go back to Main</Link></h4>
                <GitHubUser login="moonhighway" />  
                <br></br><br></br><img src="../images/1-6.jpg" alt="image" width={600} height={700}/>
            </div>
        </> 
    ) 
}
export default withRouter(FetchData);
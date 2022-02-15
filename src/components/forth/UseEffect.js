import 'bootstrap/dist/css/bootstrap.css';
import { Link, withRouter } from 'react-router-dom';
import React,  { useState , useEffect} from 'react';

// The `useEffect` Hook is useful to perform additional work behind the scenes,
// without affecting the appearance of the webpage

function App(){
    const [name, setName] =useState("aegi")
    const [admin, setAdmin] = useState(false);

    useEffect(() => {
        // document.title = `Celebrate ${name}`;
        console.log(`Celebrate ${name}`)
    },[name]);

    useEffect(() => {
      // document.title = `Celebrate ${name}`;
      console.log(`The user is  ${admin? "admin" : "not admin"}`);
  }, [admin]);

    
    return( 
        <section>
            <div className='container mt-5'>
            <h4 ><Link to={'/'} >Go back to Main</Link></h4>
            <p>Congratulation! {name}</p>
            <button onClick = { ()=> setName("Bbangsoon")}>Change Name</button>
            <p> { admin? "logged in" : "not logged in" } </p>
            <button onClick={() => setAdmin(true)}>Log In</button>
            </div>
        </section>
    );
}
export default withRouter(App);

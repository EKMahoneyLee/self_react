import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Link, withRouter } from 'react-router-dom';


//useState
function Checkbox(){
    const [checked, setChecked] = useState(true);
    const [val, setVal] = useState("");
    const [val2, setVal2] = useState("");
    useEffect( () => {
        // alert(`checked: ${checked.toString()}`);
    })
    useEffect( () => {
        console.log(`first field ${ val }`)
    },[val])
    useEffect( () => {
        console.log(`next field is ${val2 }`)
    },[val2]) // val and val2 둘 다 사용가능
    return (
        <>
            <div className='container mt-5'>
                <h4 ><Link to={'/'} >Go back to Main</Link></h4>
                <div className='container mt-4'>
                    <input type="checkbox" 
                            value={ checked }
                            onChange={ () => setChecked( checked => !checked)
                            }
                    />
                    { checked? "checked": "Not checked" }
                </div> 

                <label className='container mt-4'>
                    Favorite phrase:
                    <input value={ val }
                    onChange={e => setVal(e.target.value)}/>
                </label>
                <br  />
                <label className='container mt-4'>
                    Favorite animal:
                    <input value={ val2 } 
                    onChange={e => setVal2(e.target.value)}/>
                </label>
                <br></br><br></br><img src="../images/1-5.jpg" alt="image" width={500} height={500}/>
            </div>
        </>
    )
}
export default withRouter(Checkbox);
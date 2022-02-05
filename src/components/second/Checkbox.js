import React, { useState, useEffect , useReducer} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Link, withRouter } from 'react-router-dom';


//useState
function Checkbox(){

    // const [checked, setChecked] = useState(true);
    //useReducer와 함계 update => useState 와 useReducer 사용시 function은 같지만, 
    //project가 커질수록 reducer를 사용해서 간결하게 하는 것이 좋음....
    const [checked, toggle] = useReducer(
        (checked) => !checked,
        false
    );

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
                            // onChange={ () => setChecked( checked => !checked)
                            //useReducer와 함계 update
                            onChange={ toggle }
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
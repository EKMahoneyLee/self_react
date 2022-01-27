import React, { useState, useReducer} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Link, withRouter } from 'react-router-dom';


//useState
function ReducerCheckbox(){
    const [checked, toggle] = useReducer(
        checked => !checked,
        false
        // useReducer(<reducer>, <initialState>)
        //initialStatecan be a simple value but generally will contain an object.
    );

    return (
        <>
            <div className='container mt-5'>
            <h4 ><Link to={'/'} >Go back to Main</Link></h4>
                <input type="checkbox" 
                        value={ checked }
                        onChange={ toggle }
                />
                { checked? "checked": "Not checked" }
                <br></br><br></br><img src="./images/4.jpg" alt="image" width={600} height={700}/>
            </div>
        </>
    )
    //useState 위의 useReducer로 변경 =>  현 state를 받아들여 새로운 state를 리턴한다 
    // const [checked, setChecked] = useState(false);

    // function toggle() {setChecked(checked => !checked); }
    // return (
    //     <>
    //         <input type="checkbox" 
    //                 value={ checked }
    //                 onChange={ toggle }
    //         />
    //         { checked? "checked": "Not checked" }
    //     </>
    // )
}
export default withRouter(ReducerCheckbox);
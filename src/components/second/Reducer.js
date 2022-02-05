import React, { useReducer} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Link, withRouter } from 'react-router-dom';

const initialState = {
    message: "hi"
};

function reducer(state, action){
    switch (action.type){
        case "yell":
            return{
                message: `Hey! I just said ${state.message}`
            };
        case "whisper":
            return {
                message: `excuse me! I just said ${state.message}`
            };
    }
}


function Reducer(){
    const [number, setNumber] = useReducer(
        (number, newNumber) => number + newNumber, 0
    );

    const [state, dispatch] = useReducer(
        reducer,
        initialState
    )


    return (
        <>
            <div className='container mt-5'>
                <h4 ><Link to={'/'} >Go back to Main</Link></h4>
                <h2> useReducer</h2>
                <h2 > { number } </h2>
                <button onClick={ () => setNumber(2)}>Click Me</button>

                <hr/>
                <h2>Dispatching actions with useReducer</h2>
                <p>Message: { state.message }</p>
                <button onClick={() =>dispatch ({type : "yell"})}>YELL</button>
                <button onClick={() =>dispatch ({type : "whisper"})}>whisper</button>
            </div>
        </>
    )
}






// //useState
// function Reducer(){
//     const [checked, toggle] = useReducer(
//         checked => !checked,
//         false
//         // useReducer(<reducer>, <initialState>)
//         //initialStatecan be a simple value but generally will contain an object.
//     );

//     return (
//         <>
//             <div className='container mt-5'>
//             <h4 ><Link to={'/'} >Go back to Main</Link></h4>
//                 <input type="checkbox" 
//                         value={ checked }
//                         onChange={ toggle }
//                 />
//                 { checked? "checked": "Not checked" }
//                 <br></br><br></br><img src="../images/1-7.jpg" alt="image" width={600} height={700}/>
//             </div>
//         </>
//     )



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
// }
export default withRouter(Reducer);
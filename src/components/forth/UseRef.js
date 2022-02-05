import 'bootstrap/dist/css/bootstrap.css';
import { Link, withRouter } from 'react-router-dom';
import React,  { useRef , useState} from 'react';
import { useInput } from "./UseInput";

//  세개 동작 똑같음
function CustomHookApp(){
    const [titleProps, resetTitle] = useInput("");
    const [colorProps, resetColor] = useInput("#000000");

    const submit = (e) => {
        e.preventDefault();
        alert( `${titleProps.value} sounds like ${colorProps.value}`);
        resetTitle();
        resetColor();
    }


    return( 
        <>
            <form onSubmit={submit}>
                <input
                    {...titleProps}
                    type="text" 
                    placeholder = "Sound..."
                    /> 
                <input 
                    {...colorProps}
                    type="color" 
                    /> 
                <button>ADD</button>
            </form>
        </>
    );
}

function UseStateApp(){
    const [sound, setSound]= useState("");
    const [color, setColor]= useState("#000000");

    const submit = (e) => {
        e.preventDefault();
        
        //using useState
        alert( `${sound} sounds like ${color}`);
        setSound("");
        setColor("#000000");
        
        sound.current.value ="";
        color.current.value = "";
    }

    return( 
        <>
            <form onSubmit={submit}>
                <input
                    value={ sound }
                    type="text" 
                    placeholder = "sound..."
                    onChange = {(e) => setSound(e.target.value)}
                    /> 
                <input 
                    value={ color}
                    type="color" 
                    onChange = {(e) => setColor(e.target.value)}
                    /> 
                    <button>ADD</button>            
            </form>
        </>
    );
}

function UseRefApp(){
    const sound = useRef();
    const color = useRef();

    const submit = (e) => {
        e.preventDefault();
        const soundVal = sound.current.value;
        const colorVal = color.current.value;
        alert( `${soundVal} sounds like ${colorVal}`);  

        //default로 만들어줌
        sound.current.value ="";
        color.current.value = "";
    }
    return( 
        <>
            <form onSubmit={submit}>
                <input
                    ref={ sound }
                    type="text" 
                    placeholder = "sound..."
                    /> 
                <input 
                    ref={ color }
                    type="color" 
                    /> 
                <button>ADD</button>
            </form>
        </>
    );
}


function App () {
    return (
        <>
            <div className='container mt-5'>
                <h4 ><Link to={'/'} >Go back to Main</Link></h4>
                <h3>using customized HOOK</h3>
                <CustomHookApp />
                <h3>using useState</h3>
                <UseStateApp />
                <h3>using useRef</h3>
                <UseRefApp />
            </div>
        </>
    );
};

export default withRouter(App);
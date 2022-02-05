import React, { createContext, useContext } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import { Link, withRouter } from 'react-router-dom';

const TreesContext = createContext();

//created re-useful context
const useTrees = () => useContext(TreesContext);

const trees = [
    {id: "1" , type: "Maple"},
    {id: "2" , type: "Oak"},
    {id: "3" , type: "Family"},
    {id: "4" , type: "Component"},
    {id: "5" , type: "Bbangsoon"}
]

function UseContextApp (){
    const { trees } = useContext(TreesContext);
    // console.log(trees);
    return (
        <>
            <div className='container mt-5'>
                <div>
                    <h1>Trees I've Heard Of</h1>
                    <ul>
                        {trees.map((tree) => (
                            <li key = {tree.id}> {tree.type} </li>
                        ))}
                    </ul>
                </div>
            </div>
        </>
    );
}

function CreateContextApp (){
    const { trees } = useTrees();
    return (
        <>
            <div className='container mt-5'>
                <h4 ><Link to={'/'} >Go back to Main</Link></h4>
                <div>
                    <h1>Trees I've Heard Of</h1>
                    <ul>
                        {trees.map((tree) => (
                            <li key = {tree.id}> {tree.type} </li>
                        ))}
                    </ul>
                </div>
            </div>
        </>
    );
}

function App () {
    return (
        <TreesContext.Provider value={{ trees }}>
            <CreateContextApp />
            <UseContextApp />
        </TreesContext.Provider>
    );
};

export default withRouter(App);
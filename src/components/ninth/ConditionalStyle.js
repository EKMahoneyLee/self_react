import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import  { Link, withRouter } from 'react-router-dom';

class Condition extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            input: ''
        };
        
        }
        handleChange = event => {
        this.setState({ input: event.target.value })
        }
        render() {
        let inputStyle = {
            border: '1px solid black'
        };
        // Change code below this line
        if(this.state.input.length > 3) {
            inputStyle = {
            border: '4px solid red'
        };
        }
    
        return (
            <>
                <div className='container mt-5'>
                    <h4 className='mb-5'><Link to={'/'} >Go back to Main</Link></h4>
                    <h3>Input any to find out something</h3>
                    <input
                        type="text"
                        style={inputStyle}
                        value={this.state.input}
                        onChange={this.handleChange} />
                </div>  
            </>
        );
        }
    };

    export default withRouter(Condition);
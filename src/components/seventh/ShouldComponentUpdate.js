import React from 'react';
import { Link} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';

class OnlyEvens extends React.Component {
    constructor(props) {
        super(props);
    }
    shouldComponentUpdate(nextProps, nextState) {
        console.log('Should I update?');
      // Change code below this line
        if(nextProps.value %  2 == 0){
    return true;
        }
    
      // Change code above this line
    }
    componentDidUpdate() {
        console.log('Component re-rendered.');
    }
    render() {
        return <h1>{this.props.value}</h1>;
    }
}

    class Controller extends React.Component {
        constructor(props) {
        super(props);
        this.state = {
            value: 0
        };
        this.addValue = this.addValue.bind(this);
    }
    addValue() {
        this.setState(state => ({
            value: state.value + 1
        }));
    }
    render() {
        return (
            <>
                <div className='container mt-5'>
                    <h1><h4 ><Link to={'/'} >Go back to Main</Link></h4></h1>

                    <h5> Update props using shouldComponentUpdate </h5>
                    <button onClick={this.addValue}>Add</button>
                        <OnlyEvens value={this.state.value} />
                </div>
            </>
        );
        }
    }

    export default Controller;
import { Link, withRouter } from 'react-router-dom';
import React from 'react';

const inputStyle = {
  width: 235,
  marginBottom: 20
};

const linkstyle ={
  color: '#097969',
  textDecoration: 'none'
}

const hrStyle = {
  height: 10,
  borderWidth:0,
  color:'gray',
}

class CheckUserAge extends React.Component {
  constructor(props) {
    super(props);
    // Change code below this line
this.state = {
  userAge: '',
  input: ''
}
    // Change code above this line
    this.submit = this.submit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e) {
    this.setState({
      input: e.target.value,
      userAge: ''
    });
  }
  submit() {
    this.setState(state => ({
      userAge: state.input
    }));
  }
  render() {
    const buttonOne = <button onClick={this.submit}>Submit</button>;
    const buttonTwo = <button>You May Enter</button>;
    const buttonThree = <button>You Shall Not Pass</button>;
    return (
      <div>
        <h3>Enter Your Age to Continue</h3>
        <input
          style={inputStyle}
          type='number'
          value={this.state.input}
          onChange={this.handleChange}
        />
        <br />
        {/* Change code below this line */}

      {this.state.userAge ===''? buttonOne:
       this.state.userAge>= 18? buttonTwo : buttonThree}
        {/* Change code above this line */}
      </div>
    );
  }
}




class Results extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <h1>
      {this.props.fiftyFifty ? "You Win!" : "You Lose!"}
      </h1>
    )
  };
};

class GameOfChance extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 1
    }
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState({
      counter: this.state.counter + 1 // change code here
    });
  }
  render() {
    const expression = Math.random() >= 0.5 ? true : false
    return (
      <div>
        <button onClick={this.handleClick}>Play Again</button>
        { /* change code below this line */ }
        <Results fiftyFifty={expression} />
        { /* change code above this line */ }
        <p>{'Turn: ' + this.state.counter}</p>
      </div>
    );
  }
};






class AskAboutEK extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInput: '',
      randomIndex: ''
    };
    this.ask = this.ask.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  ask() {
    if (this.state.userInput) {
      this.setState({
        randomIndex: Math.floor(Math.random() * 20),
        userInput: ''
      });
    }
  }
  handleChange(event) {
    this.setState({
      userInput: event.target.value
    });
  }
    render() {
        const possibleAnswers = [
        'It is certain',
        'It is decidedly so',
        'Without a doubt',
        'Yes, definitely',
        'You may rely on it',
        'As I see it, yes',
        'Outlook good',
        'Yes',
        'Signs point to yes',
        'No comment!',
        'Ask again later',
        'Better not tell you now',
        'Cannot predict now',
        'Concentrate and ask again',
        "Don't count on it",
        'My reply is no',
        'My sources say no',
        'Most likely',
        'Yes, She is adorable',
        'Yes, She is a hard worker',
        'Yes, She is sincere person',
        'Yes, I highly recommend her',
        'She is a Korean',
        'She has been in Canada 6 years',
        'She will move to truro soon',
        'Do not ask her age',
        'Yes, She is diligent',
        'I will be ok'
        ];
        const answer = possibleAnswers[this.state.randomIndex]; // Change this line
            return (
                <div  className='container mt-5'>
                    <h4 ><Link to={'/'} style={linkstyle}>Go back to Main</Link></h4>
                    <hr style={hrStyle}></hr>
                    <h2>Anything about EK</h2>
                    <input
                    type='text'
                    value={this.state.userInput}
                    onChange={this.handleChange}
                    style={inputStyle}
                    />
                    <br />
                    <button onClick={this.ask}>Ask Anything About Eunkyung(EK)</button>
                    <br />
                    <h4>Answer:</h4>
                    <p>{answer}</p>
                    <hr style={hrStyle}></hr>
                    < CheckUserAge/>

                    <hr style={hrStyle}></hr>
                    <GameOfChance />
                </div>
            );
    }
}

export default withRouter(AskAboutEK);
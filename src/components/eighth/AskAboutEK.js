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
                    <input
                    type='text'
                    value={this.state.userInput}
                    onChange={this.handleChange}
                    style={inputStyle}
                    />
                    <br />
                    <button onClick={this.ask}>Ask Anything About Eunkyung(EK)</button>
                    <br />
                    <h3>Answer:</h3>
                    <p>{answer}
                    </p>
                </div>
            );
    }
}

export default withRouter(AskAboutEK);
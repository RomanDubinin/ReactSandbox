import React from 'react';
import Person from './Person'

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            title: 'Welcome to my world dude!',
            potentialTitle: ''
        };
    }
    handleChangeTitle() {
        this.setState({
            title: this.state.potentialTitle
        })
    }
    handleInput(event){
        this.setState({
            potentialTitle: event.target.value
        })
    }

    render() {
        return (
            <div>
                <h1>Hello World</h1>
                <p>{this.state.title}</p>
                <input type='text' onChange={this.handleInput.bind(this)}/>
                <button onClick={this.handleChangeTitle.bind(this)}>
                    ChangeTitle
                </button>
                <Person name='Joe' surname='Jonson' address='His address' phone='8 800 35 35'/>
                <Person name='Frederick' surname='Brooks' address='His address'/>
            </div>
        );
    }
}
export default App;

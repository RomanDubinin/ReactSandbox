import React from 'react';
import Person from './Person'

class App extends React.Component {

    render() {
        return (
            <div>
                <h1>Hello World</h1>
                <p>Welcome to my world dude!</p>
                <Person name='Joe' surname='Jonson' address='His address' phone='8 800 35 35'/>
                <Person name='Frederick' surname='Brooks' address='His address'/>
            </div>
        );
    }
}
export default App;

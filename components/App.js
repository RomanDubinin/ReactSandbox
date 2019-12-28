import React from 'react'
import Person from './Person/Person'
import ErrorBoundary from './ErrorBoundary/ErrorBoundary'
import './App.scss'

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: 'Welcome to my world dude!',
            potentialTitle: '',
            persons: [
                {name: 'Joe', surname: 'Jonson', address: 'His address', phone: '8 800 35 35'},
                {name: 'Frederick', surname: 'Brooks', address: 'His address', phone: ''},
                {name: 'Ivan', surname: 'Dorn', address: 'His address', phone: '123'}
            ],
            showPersons: false
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
    togglePersons(){
        this.setState({
            showPersons: !this.state.showPersons
        })
    }
    onChangePhone(phone, index){
        const person = this.state.persons[index]
        person.phone = phone

        const persons = [...this.state.persons]
        this.setState({
            persons: persons
        })
    }
    onDeletePerson(index){
        const persons = this.state.persons
        persons.splice(index, 1)

        this.setState({
            persons
        })
    }

    render() {
        let persons = this.state.showPersons
            ? this.state.persons
            : [];

        const focusIndex = persons.findIndex(x => x.phone === '');

        return (
            <div style={{
                textAlign: 'center'
            }}>
                <h1>Hello World</h1>
                <p>{this.state.title}</p>
                <input type='text' onChange={this.handleInput.bind(this)}/>
                <button
                    onClick={this.handleChangeTitle.bind(this)}>
                    ChangeTitle
                </button>
                <br/>
                <button
                    className={'ToggleButton'}
                    onClick={this.togglePersons.bind(this)}>
                    Toggle persons
                </button>

                {persons.map((person, index) => {
                    return <ErrorBoundary key={index}>
                        <Person
                            name={person.name}
                            surname={person.surname}
                            address={person.address}
                            phone={person.phone}
                            mustBeInFocus={index === focusIndex}
                            onChangePhone={event => this.onChangePhone(event.target.value, index)}
                            onDelete={this.onDeletePerson.bind(this, index)}/>
                    </ErrorBoundary>
                })}
            </div>
        );
    }
}
export default App;

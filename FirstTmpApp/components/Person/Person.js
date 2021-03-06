import React from 'react';
import './Person.css'

class Person extends React.Component{
    shouldComponentUpdate(nextProps, nextState, nextContext) {
        return nextProps.phone.replace(/[^0-9 ]/g, '') !== this.props.phone.replace(/[^0-9 ]/g, '')
    }

    componentDidMount() {
        if (this.props.mustBeInFocus)
           this.inputRef.focus()
    }

    render(){
        //just for test ErrorBoundary
        // if (Math.random() > 0.5)
        //     throw new Error('Testing')

        const inputClasses = ['input']

        if (this.props.phone !== '') {
            inputClasses.push('green')
        } else {
            inputClasses.push('red')
        }

        return <div className="Person">
            <h1>{this.props.name}</h1>
            <h2>{this.props.surname}</h2>
            <p>{this.props.phone}</p>
            <p>{this.props.address}</p>
            <input
                ref={(inputRef) => this.inputRef = inputRef}
                type='text'
                onChange={this.props.onChangePhone}
                value={this.props.phone}
                className={inputClasses.join(' ')}
            />
            <button onClick={this.props.onDelete}>Delete</button>
        </div>
    }
}

export default Person
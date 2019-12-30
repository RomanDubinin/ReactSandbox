import React from 'react'

class ErrorBoundary extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            hasError: false
        }
    }

    //this method catch errors from children
    componentDidCatch(error, errorInfo) {
        this.setState({
            hasError: true
        })
    }

    render(){
        if (this.state.hasError)
            return <h1 style={{color: 'red'}}>Error</h1>;
        return this.props.children;
    }
}

export default ErrorBoundary
import React from "react";
import Button from "../UI/Button/Button";
import Input from "../UI/Input/Input";
import './Auth.css'

export default class Auth extends React.Component{
    loginHandler = () => {

    };
    registerHandler = () => {

    };
    submitHandler = (event) => {
        event.preventDefault();
    };

    render() {
        return (
            <div className={'Auth'}>
                <div>
                    <h1>Authorization</h1>

                    <form onSubmit={this.submitHandler} className={'AuthForm'}>
                        <Input inputType='text' label='Email'/>
                        <Input inputType='text' label='Password'/>

                        <Button
                            buttonType='success'
                            onClick={this.loginHandler}
                        >
                            SignIn
                        </Button>
                        <Button
                            buttonType='primary'
                            onClick={this.registerHandler}
                        >
                            SignUp
                        </Button>
                    </form>
                </div>
            </div>
        );
    }
}
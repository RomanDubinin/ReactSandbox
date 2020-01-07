import React from "react";
import Button from "../UI/Button/Button";
import Input from "../UI/Input/Input";
import {validate, validateForm} from "../Form/FormFramework";
import './Auth.css'

export default class Auth extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            isFormValid: false,
            formControls:{
                email: {
                    value: '',
                    inputType: 'email',
                    label: 'Email',
                    errorMessage: 'Enter valid email',
                    valid: false,
                    touched: false,
                    validation: {
                        required: true,
                        email: true
                    }
                },
                password: {
                    value: '',
                    inputType: 'password',
                    label: 'Password',
                    errorMessage: 'Enter valid password',
                    valid: false,
                    touched: false,
                    validation: {
                        required: true,
                        minLength: 6
                    }
                }
            }
        }
    }

    loginHandler = () => {

    };

    registerHandler = () => {

    };

    submitHandler = (event) => {
        event.preventDefault();
    };

    onChangeHandler = (event, controlName) =>{
        const formControls = {...this.state.formControls};
        const control = {...formControls[controlName]};

        control.value = event.target.value;
        control.touched = true;
        control.valid = validate(control.value, control.validation)
        formControls[controlName] = control;

        this.setState({
            formControls,
            isFormValid: validateForm(formControls)
        })
    };

    renderInputs(){
        return Object.keys(this.state.formControls).map((controlName, index) => {
            const control = this.state.formControls[controlName];
            return (
                <Input
                    key={index}
                    inpytType={control.inputType}
                    value={control.value}
                    valid={control.valid}
                    touched={control.touched}
                    label={control.label}
                    shouldValidate={!!control.validation}
                    errorMessage={control.errorMessage}
                    onChange={event => this.onChangeHandler(event, controlName)}
                />
            )
        })
    }

    render() {
        return (
            <div className={'Auth'}>
                <div>
                    <h1>Authorization</h1>

                    <form onSubmit={this.submitHandler} className={'AuthForm'}>
                        {this.renderInputs()}

                        <Button
                            buttonType='success'
                            onClick={this.loginHandler}
                            disabled={!this.state.isFormValid}
                        >
                            SignIn
                        </Button>
                        <Button
                            buttonType='primary'
                            onClick={this.registerHandler}
                            disabled={!this.state.isFormValid}
                        >
                            SignUp
                        </Button>
                    </form>
                </div>
            </div>
        );
    }
}
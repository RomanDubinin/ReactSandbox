import React from "react";
import Button from "../UI/Button/Button";
import Input from "../UI/Input/Input";
import {createControl} from "../Form/FormFramework";
import './QuizCreator.css'

function createOptionControl(number) {
    return createControl(
        {
            label: 'Enter variant №'+number,
            errorMessage: 'Value cannot be empty',
            id: number
        },
        {
            required: true
        })
}

function createFormControls() {
    return{
        question: createControl(
            {
                label: 'Enter question',
                errorMessage: 'Question cannot be empty',
            },
            {
                required: true
            }),
        option1: createOptionControl(1),
        option2: createOptionControl(2),
        option3: createOptionControl(3),
        option4: createOptionControl(4),
    }
}

export default class QuizCreator extends React.Component{
    state = {
        quiz: [],
        formControls: createFormControls()
    };

    submitHandler = event => {
        event.preventDefault();
    };

    addQuestionHandler = () => {

    };

    createQuizHandler = () => {

    };

    changeHandler = () => {

    };

    renderInputs = () => {
        return Object.keys(this.state.formControls).map((controlName, index) => {
            const control = this.state.formControls[controlName];
            return(
                <React.Fragment key={index}>
                    <Input
                        label={control.label}
                        value={control.value}
                        valid={control.valid}
                        shouldValidate={!!control.validation}
                        touched={control.touched}
                        errorMessage={control.errorMessage}
                        onChange={event => this.changeHandler(event.target.value, controlName)}
                    />
                    { index === 0 ? <hr/> : null }
                </React.Fragment>
            )
        })
    };

    render() {
        return (
            <div className='QuizCreator'>
                <div>
                    <h1>Quiz Creator</h1>

                    <form onSubmit={this.submitHandler}>
                        {this.renderInputs()}

                        <select></select>

                        <Button buttonType='primary' onClick={this.addQuestionHandler}>
                            Add question
                        </Button>
                        <Button buttonType='success' onClick={this.createQuizHandler}>
                            Create quiz
                        </Button>
                    </form>
                </div>
            </div>
        );
    }
}
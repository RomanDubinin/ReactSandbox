import React from "react";
import Button from "../UI/Button/Button";
import Input from "../UI/Input/Input";
import './QuizCreator.css'

export default class QuizCreator extends React.Component{
    state = {
        quiz: [],
        formControls: {
            question: '',
            option1: '',
            option2: '',
            option3: '',
            option4: '',
        }
    };

    submitHandler = event => {
        event.preventDefault();
    };

    addQuestionHandler = () => {

    };

    createQuizHandler = () => {

    };

    render() {
        return (
            <div className='QuizCreator'>
                <div>
                    <h1>Quiz Creator</h1>

                    <form onSubmit={this.submitHandler}>
                        <Input inputType='text'/>
                        <hr/>
                        <Input inputType='text'/>
                        <Input inputType='text'/>
                        <Input inputType='text'/>
                        <Input inputType='text'/>

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
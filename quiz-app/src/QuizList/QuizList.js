import React from "react";
import './QuizList.css'
import Loader from "../UI/Loader/Loader";
import {NavLink} from "react-router-dom";
import {connect} from "react-redux";
import {fetchQuizes} from "../store/actions/quiz";

class QuizList extends React.Component{
    async componentDidMount() {
        this.props.fetchQuizes();
    }

    renderQuizList(){
        return this.props.quizes.map(quiz => {
            return (
                <li key={quiz.id}>
                    <NavLink to={'quiz/' + quiz.id}>
                        {quiz.title}
                    </NavLink>
                </li>
            )
        })
    }

    render() {
        return (
            <div className={'QuizList'}>
                <div>
                    <h1>Quiz List</h1>

                    {this.props.loading && this.props.quizes.length !== 0
                        ? <Loader/>
                        : <ul>
                            {this.renderQuizList()}
                        </ul>
                    }
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return{
        quizes: state.quiz.quizes,
        loading: state.quiz.loading
    }
}

function mapDispatchToProps(dispatch) {
    return{
        fetchQuizes: () => dispatch(fetchQuizes())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(QuizList)
import React from 'react';
import Layout from "./hoc/Layout/Layout";
import Quiz from "./Quiz/Quiz";
import Auth from "./Auth/Auth";
import QuizCreator from "./QuizCreator/QuizCreator";
import QuizList from "./QuizList/QuizList";
import {Route, Switch} from 'react-router-dom'
import './App.css';

function App() {
  return (
    <Layout>
        <Switch>
            <Route path='/auth' component={Auth}/>
            <Route path='/quiz-creator' component={QuizCreator}/>
            <Route path='/quiz/:id' component={Quiz}/>
            <Route path='/' component={QuizList}/>
        </Switch>
    </Layout>
  );
}

export default App;

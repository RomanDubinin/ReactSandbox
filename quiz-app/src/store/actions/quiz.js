import backend from '../../Backend/Backend'
import {FETCH_QUIZES_ERROR, FETCH_QUIZES_START, FETCH_QUIZES_SUCCESS} from "./actionTypes";

export function fetchQuizes() {
    return async dispatch => {
        dispatch(fetchQuizesStart())
        try {
            const response = await backend.get('quizes.json')

            const quizes = [];
            Object.keys(response.data).forEach((key, index) => {
                quizes.push({
                    title: `Test №${index+1}`,
                    id: key
                })
            });
            dispatch(fetchQuizesSuccess(quizes))
        }
        catch (e) {
            console.log(e);
            dispatch(fetchQuizesError(e))
        }
    }
}

export function fetchQuizesStart() {
    return{
        type: FETCH_QUIZES_START
    }
}

export function fetchQuizesSuccess(quizes) {
    return{
        type: FETCH_QUIZES_SUCCESS,
        quizes
    }
}

export function fetchQuizesError(e) {
    return{
        type: FETCH_QUIZES_ERROR,
        error: e
    }
}
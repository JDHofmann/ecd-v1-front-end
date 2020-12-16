import { combineReducers } from "redux"

const defaultState = {
    page: 1,
    questions: [],
    user: null
}

const pageReducer = (
    state = defaultState.page,
    action
) => {
    switch (action.type){
        case "NEXT_PAGE":
            console.log(state)
            return state += 1

        case "PREV_PAGE":
            console.log("prev page")
            return state -= 1

        default :
        return state
    }
}

const questionsReducer = (
    state = defaultState.questions,
    action
) => {
    switch (action.type){

        case 'LOAD_QUESTIONS':

        return action.questions

        default :
        return state
    }
}

const userReducer = (
    state = defaultState.user,
    action
) => {
    switch (action.type){
        case 'SET USER':
            return action.user 
        default: 
            return state
    }
}

const rootReducer = combineReducers({
    page: pageReducer,
    questions: questionsReducer,
    user: userReducer
})

export default rootReducer
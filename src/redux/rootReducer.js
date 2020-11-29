import { combineReducers } from "redux"

const defaultState = {
    page: 1
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

const rootReducer = combineReducers({
    page: pageReducer
})

export default rootReducer
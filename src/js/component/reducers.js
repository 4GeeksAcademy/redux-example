import { ADD_ONE, MINUS_ONE, ADD_USER } from "./actions.js";

const intialState = {
    numberOfItems: 0,
    username: '',
}

function reducer(state=intialState, action) {
    switch(action.type) {
        case ADD_ONE:
            return {
                ...state,
                numberOfItems: state.numberOfItems + 1,
            }
        case MINUS_ONE:
            return {
                ...state,
                numberOfItems: state.numberOfItems - 1,
            }
        case ADD_USER:
            console.log('Here 2', action);
            return {
                ...state,
                username: action.username,
            }
        default:
            return state;
    }
}

export default reducer
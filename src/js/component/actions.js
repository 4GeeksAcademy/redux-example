export const ADD_ONE = 'ADD_ONE'
export const MINUS_ONE = 'MINUS_ONE'
export const ADD_USER = 'ADD_USER'

const addItem = () => {
    return {
        type: ADD_ONE,
    }
}

const deleteItem = () => {
    return {
        type: MINUS_ONE,
    }
}

const addUsername = (username) => {
    console.log('Here 1', username);
    return {
        type: ADD_USER,
        username: username
    }
}

export {addItem, deleteItem, addUsername}
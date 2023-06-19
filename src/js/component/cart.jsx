import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { ADD_ONE, MINUS_ONE } from "./actions";
// import { addItem, deleteItem } from "./actions";

const Cart = () => {

    const state = useSelector((state) => state)
    const dispatch = useDispatch()
    console.log('state here ====>', state);

    return (
        <div className="text-center">
            <div><h2>Items inside cart: {state.numberOfItems}</h2></div>
            <div><h2>{state.username}</h2></div>
            <button onClick={() => dispatch({type: ADD_ONE})}>Add item to cart</button>
            {state.numberOfItems !== 0 && 
                <button onClick={() => dispatch({type: MINUS_ONE})}>Remove item to cart</button>
            }
        </div>
    )
}

export default Cart
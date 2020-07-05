import {GET_DATA} from "./types";

const initialState = {
    comments: []
};

export const dataReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_DATA:
            console.log(action.payload)
            return {...state, comments: [...state.comments, action.payload]};

        default: return state;
    }
};

import { GET_HEROES, SELECT_TYPE } from "./types";

export const fetchData = () => async dispatch => {
    const response = await fetch('https://api.opendota.com/api/heroes');
    const data = await response.json();
    dispatch({ type: GET_HEROES, payload: data })
};

export function changeValue(payload) {
    return dispatch => {
        dispatch({ type: SELECT_TYPE, payload})
    }
}

import { GET_DATA } from "./types";

export function fetchData() {
    return async dispatch => {
        const response = await fetch('https://api.opendota.com/api/matches/271145478');
        const data = await response.json();
        dispatch({ type: GET_DATA, payload: data.chat })
        // return {
        //     type: GET_DATA,
        //     payload: response
        // }
    }
}

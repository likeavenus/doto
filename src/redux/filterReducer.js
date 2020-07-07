import { GET_HEROES, SELECT_TYPE } from "./types";

const initialState = {
    heroes: [],
    key: 'all',
    selectedHeroes: []
};

export const filterReducer = (state = initialState, action) => {
    if (action.type === GET_HEROES) {
        return {...state,  heroes: action.payload };
    } else if (action.type === SELECT_TYPE) {
        return {...state,
            key: action.payload,
            selectedHeroes: action.payload === 'all' ? state.heroes : state.heroes.filter(hero => hero.primary_attr === action.payload)
        }
    }
    return state;
};

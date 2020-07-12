import {FILTER_ALL, SET_FILTER} from "../store/types";

const initialState = {
  activeFilter: FILTER_ALL
};
export const visibilityFilterReducer = ( state =initialState, action) =>{

    switch (action.type) {
        case SET_FILTER: {
            return {
                activeFilter: action.payload.filter
            }
        }
        default: {
            return  state;
        }
    }

};
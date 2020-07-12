import {ADD_TODO, TOGGLE_TODO} from "../store/types";

const initialState = {
    nextId: 0,
    data: {}
};
export const TodoReducer = (state= initialState, action) =>{
    switch (action.type) {
        case  ADD_TODO:{
            return {
                ...state,
                data: {
                    ...state.data,
                    [state.nextId]:{
                        complete: false,
                        content: action.payload.content
                    }
                },
                nextId: state.nextId + 1
            }
        }
        case TOGGLE_TODO: {
            return {
                ...state,
                data: {
                    ...state.data,
                    [action.payload.id]:{
                        ...state.data[action.payload.id],
                        complete: !(state.data[action.payload.id].complete)
                    }
                }
            }
        }

        default: {
            return  state;
        }

    }
};
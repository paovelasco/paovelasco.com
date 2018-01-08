import initialState from "./initialState";
import {LOAD_MOTIVATIONS} from '../constants/actionTypes';


export default function motivationListReducer(state = initialState.motivationList, action){
    switch(action.type){
        case LOAD_MOTIVATIONS:
            return action.motivationList;

        default: 
            return state;
    }
}
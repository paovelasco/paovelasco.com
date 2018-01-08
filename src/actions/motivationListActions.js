import * as types from '../constants/actionTypes';
import data from '../../data';

export function loadMotivations(){
    return function(dispatch){
        return dispatch({
            type: types.LOAD_MOTIVATIONS,
            motivationList: data
        });
    };
}
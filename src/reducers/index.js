import { combineReducers } from 'redux';
import motivationList from './motivationListReducer';
import { routerReducer } from 'react-router-redux';

const rootReducer = combineReducers({
  motivationList,
  routing: routerReducer
});

export default rootReducer;

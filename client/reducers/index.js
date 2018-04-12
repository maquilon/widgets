import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { notificationReducer } from './notificationReducer';
import { employeeReducer } from './employeeReducer';

const rootReducer = combineReducers({
    routing: routerReducer,
    notificationSystem: notificationReducer,
    directory: employeeReducer
});

export default rootReducer;
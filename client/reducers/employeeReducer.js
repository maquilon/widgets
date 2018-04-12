import Immutable from 'immutable';
import Constants from '../constants';

// Employee Initial State
const directoryInitialState = {
    directory: Immutable.fromJS({
        employees: [],
        employee: [],
        cities: [],
        cityFilter: 'All'
    })
};

function employeeReducer(state = directoryInitialState.directory, action) {
    switch (action.type) {

        case Constants.LOAD_EMPLOYEES:
            state = state.updateIn(['employees'], (data) => data = Immutable.fromJS(action.employees));
            return state;

        case Constants.LOAD_EMPLOYEE:
            state = state.updateIn(['employee'], (data) => data = Immutable.fromJS(action.employee));
            return state;

        case Constants.CITY_FILTER:
            state = state.set('cityFilter', action.city);
            return state;

        case Constants.LOAD_CITIES:
            state = state.updateIn(['cities'], (data) => data = Immutable.fromJS(action.cities));
            return state;

        default:
            return state;
    }
}

export { employeeReducer, directoryInitialState };
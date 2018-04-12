import Immutable from 'immutable';
import Constants from '../constants';

// Employee Initial State
const employeeInitialState = {
    employee: Immutable.fromJS({
        employees: [],
    })
};

function employeeReducer(state =employeeInitialState.employee, action) {
    switch (action.type) {

        case Constants.LOAD_EMPLOYEES:
            state = state.updateIn(['employees'], (data) => data = Immutable.fromJS(action.employees));
            return state;

        default:
            return state;
    }
}

export { employeeReducer, employeeInitialState };
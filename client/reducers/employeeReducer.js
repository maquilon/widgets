import Immutable from 'immutable';
import Constants from '../constants';

// Employee Initial State
const directoryInitialState = {
    directory: Immutable.fromJS({
        employees: [],
    })
};

function employeeReducer(state = directoryInitialState.directory, action) {
    switch (action.type) {

        case Constants.LOAD_EMPLOYEES:
            state = state.updateIn(['employees'], (data) => data = Immutable.fromJS(action.employees));
            return state;

        default:
            return state;
    }
}

export { employeeReducer, directoryInitialState };
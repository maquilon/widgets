import axios from 'axios';
import Constants from '../constants/';
import { addNotification } from '../actions/notificationActions';

const base = 'http://challenge-dev.starmarkcloud.com/users/';

class EmployeeActions {
    static loadEmployees(employees) {
        return {
            type: Constants.LOAD_EMPLOYEES,
            employees
        }
    }

    // ===================================================================== //
    // ========================== API: ASYNC CALLS ========================= //
    // ===================================================================== //
 
    static loadEmployeesAsync() {
        return function (dispatch) {
            axios.get(base)
                .then(function (response) {
                    dispatch(EmployeeActions.loadEmployees(response.data));
                })
                .catch(function (error) {
                    dispatch(addNotification({ title: 'Error', message: 'Error loading Employees ' + response, level: 'error', autoDismiss: 0 }));
                });
        };
    }
}

export default EmployeeActions;
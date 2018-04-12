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

                    dispatch(EmployeeActions.loadEmployees(response.data.sort(compare)));
                })
                .catch(function (error) {
                    dispatch(addNotification({ title: 'Error', message: 'Error loading Employees ' + response, level: 'error', autoDismiss: 0 }));
                });
        };
    }


}


function compare(a, b) {
    // Use toUpperCase() to ignore character casing
    const lastNameA = a.lastName.toUpperCase();
    const lastNameB = b.lastName.toUpperCase();
  
    let comparison = 0;
    if (lastNameA > lastNameB) {
      comparison = 1;
    } else if (lastNameA < lastNameB) {
      comparison = -1;
    }
    return comparison;
  }

export default EmployeeActions;
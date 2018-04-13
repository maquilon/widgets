import axios from 'axios';
import Constants from '../constants/';
import { addNotification } from '../actions/notificationActions';
import { browserHistory, Link } from 'react-router';

const base = 'http://challenge-dev.starmarkcloud.com/users/';

class EmployeeActions {
    static loadEmployees(employees) {
        return {
            type: Constants.LOAD_EMPLOYEES,
            employees
        }
    }

    static loadEmployee(employee) {
        return {
            type: Constants.LOAD_EMPLOYEE,
            employee
        }
    }

    static updateCityFilter(city) {
        return {
            type: Constants.CITY_FILTER,
            city
        }
    }

    static loadCities(cities) {
        return {
            type: Constants.LOAD_CITIES,
            cities
        }
    }


    // ===================================================================== //
    // ========================== API: ASYNC CALLS ========================= //
    // ===================================================================== //

    
    static loadEmployeesAsync() {
        return function (dispatch) {
            let employees;
            let cities = [];
            axios.get(base)
                .then(function (response) {
                    employees = response.data;
                    dispatch(EmployeeActions.loadEmployees(employees.sort(compare)));
                })
                .then(function (response) {
                    employees.forEach(employee => {
                        cities.push(employee.address.city)
                    });
                    dispatch(EmployeeActions.loadCities(cities.sort()));
                })
                .catch(function (error) {
                    dispatch(addNotification({ title: 'Error', message: 'Error loading Employees ' + error, level: 'error', autoDismiss: 0 }));
                });
        };
    }

    static loadEmployeeAsync(id) {
        return function (dispatch) {
            axios.get(base + id)
                .then(function (response) {
                    dispatch(EmployeeActions.loadEmployee(response.data));
                })
                .then(function() {
                    browserHistory.push('/employeeDetail');
                })
                .catch(function (error) {
                    dispatch(addNotification({ title: 'Error', message: 'Error loading Employee' + error, level: 'error', autoDismiss: 0 }));
                });
        }
    }

    static updateCityFilterAsync(city) {
        return function (dispatch) {
            axios.get(base)
                .then(function (response) {
                    let obj = [];
                    obj.push(_.find(response.data, function (obj) { return obj.address.city === city; }));
                    dispatch(EmployeeActions.updateCityFilter(city));
                    if (city === 'All') { dispatch(EmployeeActions.loadEmployees(response.data)) } else { dispatch(EmployeeActions.loadEmployees(obj)); }
                })
                .catch(function (error) {
                    dispatch(addNotification({ title: 'Error', message: 'Error loading Employees filter by city ' + error, level: 'error', autoDismiss: 0 }));
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
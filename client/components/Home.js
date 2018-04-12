import React, { Component } from 'react';
import { connect } from 'react-redux';
import EmployeeActions from '../actions/employeeActions';


class Home extends Component {
    constructor(props, context) {
        super(props, context);
    }

    componentWillMount() {
        this.props.dispatch(EmployeeActions.loadEmployeesAsync());
    }


    unitTags(tags) {
        // List of unique tag values
        let uniqueTagList = tags.toJS().filter((x, i, a) => a.indexOf(x) == i);
        return uniqueTagList;
    }

    render() {
        let employees = this.props.directory.get('employees').map((employee, i) =>
            <div key={i} className="col-lg-6">
                <div className="bs-component">
                    <div className="card border-dark mb-3" style={{ maxWidth: '40rem' }}>
                        <div className="card-header">
                            <h3 className="card-title"> {employee.get('lastName')} {employee.get('firstName')} </h3>
                        </div>
                        <div className="card-body">
                            <div className="row">
                                <div className="col-lg-4">
                                    <img src={employee.get('avatar')} className="rounded-circle" alt={employee.get('lastName')} />
                                </div>
                                <div className="col-lg-8">
                                    <h5 className="card-text">{employee.get('email')}</h5>
                                    <h6 className="card-text">{employee.get('phone')}</h6>
                                    <h6 className="card-text">{employee.get('address').get('city')}, {employee.get('address').get('state')} </h6>

                                    {this.unitTags(employee.get('tags')).map((tag, y) => {
                                        return <span key={y} className="badge badge-primary" style={{ marginRight: 7 }}>{tag}</span>
                                    })
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>);
        return (
            <div>
                <div className="row">
                    <select
                        name="year"
                        className="form-control col-md-6"
                    >
                        {<option value=''>Please Select..</option>}

                    </select>

                </div>

                {/* Display the list of employee cards */}

                <div className="row" style={{ marginTop: 20 }}>
                    {employees}
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        directory: state.directory
    };
}

export default connect(mapStateToProps)(Home);

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

    render() {
        let employees = this.props.directory.get('employees').map((employee, i) =>
            <div className="col-lg-6">
                <div className="bs-component">
                    <div key={i} className="card border-dark mb-3" style={{ maxWidth: '40rem' }}>
                        <div className="card-header">
                            <h4 className="card-title"> {employee.get('lastName')} {employee.get('firstName')} </h4>
                        </div>
                        <div className="card-body">
                            <div className="row">
                                <div className="col-lg-4">
                                    <img src={employee.get('avatar')} className="rounded-circle" alt={employee.get('lastName')} />
                                </div>
                                <div className="col-lg-8">
                                    <h5 className="card-text">Dark card title</h5>
                                    <h6 className="card-text">Some quick example text to.</h6>
                                    <h6 className="card-text">Some quick example text to.</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>);
        return (
            <div className="row" style={{ marginTop: '20' }}>
                {employees}
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


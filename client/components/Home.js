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

        return (
            <div className="row" style={{ marginTop: '20' }}>

                <div className="col-lg-6">
                    <div className="bs-component">
                        <div className="card border-dark mb-3" style={{ maxWidth: '40rem' }}>
                            <div className="card-header">Header</div>
                            <div className="card-body">
                                <h4 className="card-title">Dark card title</h4>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-lg-6">
                    <div className="bs-component">
                        <div className="card border-dark mb-3" style={{ maxWidth: '40rem' }}>
                            <div className="card-header">Header</div>
                            <div className="card-body">
                                <h4 className="card-title">Dark card title</h4>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div>
                    </div>
                </div>

            


            </div>



        );
    }
}

function mapStateToProps(state) {
    return {
    };
}

export default connect(mapStateToProps)(Home);
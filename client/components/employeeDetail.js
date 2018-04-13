import React, { Component } from 'react';
import { connect } from 'react-redux';

class employeeDetail extends Component {
    // List of unique tag values
    unitTags(tags) {
        let uniqueTagList = tags.toJS().filter((x, i, a) => a.indexOf(x) == i);
        return uniqueTagList;
    }

    render() {
        return (
            <div>
                <a href="/" style={{ textDecoration: 'none' }} >
                    <div className="row col-lg-12">
                        <div className="col-lg-8">
                            <div className="card" style={{ marginTop: 20 }}>
                                <div className="card-body">
                                    <h4 className="card-title">{this.props.employee.get('lastName')} {this.props.employee.get('firstName')} </h4>
                                    <h6 className="card-subtitle mb-2 text-muted">DOB: {this.props.employee.get('dob')}</h6>
                                    <p className="card-text">Address</p>
                                    <h6 className="card-subtitle mb-2 text-muted">Street: {this.props.employee.get('address').get('street')}</h6>
                                    <h6 className="card-subtitle mb-2 text-muted">City:  {this.props.employee.get('address').get('city')}</h6>
                                    <h6 className="card-subtitle mb-2 text-muted">State:  {this.props.employee.get('address').get('state')}</h6>
                                    <h6 className="card-subtitle mb-2 text-muted">Zip:  {this.props.employee.get('address').get('zip')}</h6>
                                    <p className="card-text">Contact Information</p>
                                    <h6 className="card-subtitle mb-2 text-muted">Phone:  {this.props.employee.get('phone')}</h6>
                                    <h6 className="card-subtitle mb-2 text-muted">Email:  {this.props.employee.get('email')}</h6>
                                    <p className="card-text">Login Information</p>
                                    <h6 className="card-subtitle mb-2 text-muted">Username:  {this.props.employee.get('username')}</h6>
                                    <h6 className="card-subtitle mb-2 text-muted">Password:  {this.props.employee.get('password')}</h6>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div style={{ marginTop: 20 }}>
                                <img src={this.props.employee.get('avatar')} className="rounded-circle" />
                            </div>
                            {this.unitTags(this.props.employee.get('tags')).map((tag, y) => {
                                return <span key={y} className="badge badge-primary" style={{ marginRight: 7 }}>{tag}</span>
                            })}
                        </div>
                    </div>
                </a>
                <div style={{ marginTop: 20, marginLeft: 15 }}>
                    <a href="/" >Back to list</a>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        employee: state.directory.get('employee')
    };
}

export default connect(mapStateToProps)(employeeDetail);
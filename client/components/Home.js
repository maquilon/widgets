import React, { Component } from 'react';
import { connect } from 'react-redux';
import EmployeeActions from '../actions/employeeActions';


class Home extends Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
        this.props.dispatch(EmployeeActions.loadEmployeesAsync());
    }

    // List of unique tag values
    unitTags(tags) {
        let uniqueTagList = tags.toJS().filter((x, i, a) => a.indexOf(x) == i);
        return uniqueTagList;
    }

    showDetails(id) {
        this.props.dispatch(EmployeeActions.loadEmployeeAsync(id))
        // window.location.href= "employeeDetail";
    }

    displayLetter(employee) {
        console.log('Letter -->', employee.get('lastName').charAt(0));
        return <h6>5</h6>
    }

    // renderByGroups() {
    //     let alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
    //     let groups={};

    //     alphabet.forEach(function(letter) {
    //         groups[letter] = [];
    //         console.log('lette', letter)
    //     })
    // }
    // renderByGroups() {
    //     var groups = {};
    //     var directory = [];

    //     // Creating array by letters
    //     let employeesByLetter = this.props.directory.get('employees').map((employee, i) => {
    //         var initial = employee.get('lastName').charAt(0);
    //         if (!groups[initial]) {
    //             groups[initial] = [];
    //         }
    //         groups[initial].push(employee)
    //     })


    //     Object.keys(groups).forEach(function (key) {
    //         directory.push(
    //             <h1>{key}</h1>
    //         )
    //         if (groups[key] !== undefined) {
    //             groups[key].map((employee, i) => {
    //                 directory.push(
    //                     <div style={{ cursor: 'pointer' }} onClick={() => this.showDetails(employee.get('id'))} key={i} className="col-lg-6">
    //                         <div className="bs-component">
    //                             <div className="card border-dark mb-3" style={{ maxWidth: '40rem' }}>
    //                                 <div className="card-header">
    //                                     <h3 className="card-title"> {employee.get('lastName')} {employee.get('firstName')} </h3>
    //                                 </div>
    //                                 <div className="card-body">
    //                                     <div className="row">
    //                                         <div className="col-lg-4">
    //                                             <img src={employee.get('avatar')} className="rounded-circle" alt={employee.get('lastName')} />
    //                                         </div>
    //                                         <div className="col-lg-8">
    //                                             <h5 className="card-text">{employee.get('email')}</h5>
    //                                             <h6 className="card-text">{employee.get('phone')}</h6>
    //                                             <h6 className="card-text">{employee.get('address').get('city')}, {employee.get('address').get('state')} </h6>

    //                                             {this.unitTags(employee.get('tags')).map((tag, y) => {
    //                                                 return <span key={y} className="badge badge-primary" style={{ marginRight: 7 }}>{tag}</span>
    //                                             })}
    //                                         </div>
    //                                     </div>
    //                                 </div>
    //                             </div>
    //                         </div>
    //                     </div>
    //                 )
    //             })
    //         }
    //     })

    //     return directory;
//}

render() {
    var keyCounter = 9999;

    let cityOptions = this.props.directory.get('cities').map((city, i) => {
        return <option key={i} value={city}>{city}</option>
    })

    var groups = {};
    var directory = [];


    // Creating array by letters
    let employeesByLetter = this.props.directory.get('employees').map((employee, i) => {
        var initial = employee.get('lastName').charAt(0);
        if (!groups[initial]) {
            groups[initial] = [];
        }
        groups[initial].push(employee)
    })

    

    Object.keys(groups).forEach(function(key) {
        directory.push(
            <div className="col-lg-12" style={{ marginTop: 10, marginBottom: 10}} key={keyCounter++}><h1>{key}</h1></div>
        )
            groups[key].map((employee, i) => {
                directory.push(
                    <div key={keyCounter++} style={{ cursor: 'pointer' }} onClick={() => this.showDetails(employee.get('id'))} className="col-lg-6">
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

                                            {/* {this.unitTags(employee.get('tags')).map((tag, y) => {
                                                return <span key={y} className="badge badge-primary" style={{ marginRight: 7 }}>{tag}</span>
                                            })} */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            })
    })



    // let employees = this.props.directory.get('employees').map((employee, i) =>
    //     <div style={{ cursor: 'pointer' }} onClick={() => this.showDetails(employee.get('id'))} key={i} className="col-lg-6">
    //         <div className="bs-component">
    //             <div className="card border-dark mb-3" style={{ maxWidth: '40rem' }}>
    //                 <div className="card-header">
    //                     <h3 className="card-title"> {employee.get('lastName')} {employee.get('firstName')} </h3>
    //                 </div>
    //                 <div className="card-body">
    //                     <div className="row">
    //                         <div className="col-lg-4">
    //                             <img src={employee.get('avatar')} className="rounded-circle" alt={employee.get('lastName')} />
    //                         </div>
    //                         <div className="col-lg-8">
    //                             <h5 className="card-text">{employee.get('email')}</h5>
    //                             <h6 className="card-text">{employee.get('phone')}</h6>
    //                             <h6 className="card-text">{employee.get('address').get('city')}, {employee.get('address').get('state')} </h6>

    //                             {this.unitTags(employee.get('tags')).map((tag, y) => {
    //                                 return <span key={y} className="badge badge-primary" style={{ marginRight: 7 }}>{tag}</span>
    //                             })}
    //                         </div>
    //                     </div>
    //                 </div>
    //             </div>
    //         </div>
    //     </div>
    // );

    return (
        <div>
            <div className="row" style={{ marginTop: 20, marginLeft: 4 }}>
                <select name="city" className="form-control col-lg-3"
                    onChange={(e) => this.props.dispatch(EmployeeActions.updateCityFilterAsync(e.target.value))} >
                    {<option value='All'>Filter by City</option>}
                    {cityOptions}
                </select>
            </div>

            {/* Display the list of employee cards */}
            <div className="row" style={{ marginTop: 20 }}>
                {/* {employees} */}
                { directory }
            </div>

            <div className={this.props.directory.get('cityFilter') !== "All" ? '' : 'd-none'}>
                <a href="/">Back to list</a>
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
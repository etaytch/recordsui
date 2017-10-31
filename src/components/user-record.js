import React, { Component } from 'react';

import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createRecord } from '../actions';


class UserRecord extends Component {
    renderField(field) {
        const { meta: { touched, error }} = field;
        const className = `form-group ${ touched && error ? 'has-danger' : ''}`;
        return (
            <div className={className}>
                <label>{field.label}</label>
                <input
                    className="form-control"
                    type="text"
                    {...field.input}
                />
                <div className="text-help">
                    {touched ? error : ''}
                </div>
            </div>
        );
    }

    onSubmit(values) {
        this.props.createRecord(values, () => {
            this.props.history.push('/');
        });
    }

    render() {
        const { handleSubmit } = this.props;
        return (
            <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
            <Field
                label="Enter record:"
                name="record"
                component={this.renderField}
            />
         
            <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        );
    }
}

function validate(values) {
    const errors = {};

    if(!values.record) {
        errors.record = "Enter a record!";
    }

    return errors;
}

export default reduxForm({
    validate,
    form: 'UserRecordForm'
})(
    connect(null, { createRecord })(UserRecord)
);

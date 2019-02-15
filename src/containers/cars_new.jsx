import React, { Component } from "react";
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';
import { createCar } from '../action';

class CarsNew {
  renderField(field) {
    return (
      <div className="form-group">
        <label>{field.label}</label>
        <input className="form-control" type={field.type} {...field.input} />
      </div>
    );
  }


  render() {
    <form onSubmit={this.props.handleSubmit(this.onSubmit)}>
      <Field
        label="Brand"
        name="brand"
        type="text"
        component={this.renderField}
      />
      <Field
        label="Model"
        name="model"
        type="text"
        component={this.renderField}
      />
      <Field
        label="Owner"
        name="owner"
        type="text"
        component={this.renderField}
      />
      <Field
        label="Plate"
        name="plate"
        type="text"
        component={this.renderField}
      />
    </form>
  }
}

export default reduxForm({ form: 'newCarForm' })(
  conect(cull, { createCar })(CarsNew)
);

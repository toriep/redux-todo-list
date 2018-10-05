import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { addListItem } from '../actions';



class AddItem extends Component {
    renderInput(props){//you can also destructure in your argument so renderInput({input,label,meta: {touched,error}})
        console.log('Render Input Argument :', arguments);//arguments will tell you everything that is passed into the function
        //but arguments do not work for fat arrow function
        console.log('Render Input props :', props);//props.meta object has all the information from the input
        const{ input,label,meta: { touched,error } } = props; //this is just destructring all of these stuff from props

        return (//...props input make key value pairs from the input object, any property from the input object
            <div className="row">
                <div className="s12">
                    <label>{label}</label>
                    <input {...input} type="text" autoComplete="off" />
                    <p className="red-text text-darken-2">{touched && error}</p>{/*if touched is false, disable */}
                </div>
            </div>
        )
    }

    saveItem = async (values) => {
        console.log('Submitted Form values :', values);

        await this.props.addListItem(values);//our item is the values from the form, so we pass in values. this returns a promise
    
        this.props.history.push('/');
    }

    render() {
        console.log('Add Item this.props :', this.props);
        const {handleSubmit} = this.props;
        return (
            <div>
                <h1 className="center">Add Item</h1>
                <div className="row">
                    <div className="col s8 offset-s2">
                        <form onSubmit={handleSubmit(this.saveItem)}>
                            <Field name="title" component={this.renderInput} label="Title" />
                            <Field name="details" component={this.renderInput} label="Details" />
                            <div className="row">
                                <div className="s12 right-align">
                                    <button className="btn teal lighten-2">Add Item</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

function validate({title,details}){//this value in put will have a tilte and details property
    //this funcction gets called when the user interacts with the field
    //you can make complicated check for whatever form you're working on
    // const {title,details} = values;// you can destructure right on the arguments as above
    const errors = {};
    if(!title){//check to see if title input is empty
        errors.title = 'Please give your item a title'
    }
    if(!details){//check to see if details input is empty
        errors.details = 'Please give your item some details'
    }
    return errors;
}

AddItem = reduxForm({//redefines item as add item wrapped in reuxForm
    form: 'add-item',  //this is how you're telling it it's a redux form
    validate: validate //the key has to be 'validate' for redux to understand
    //same as just putting 'validate;
})(AddItem);// this is how Redux form gets connected with the class AddItem

export default connect(null,{//I don't really get this??
    addListItem: addListItem
})(AddItem);

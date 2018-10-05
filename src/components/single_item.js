import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Fragment } from 'react';
import { getSingleItem, clearSingleItem, toggleComplete } from '../actions';


class SingleItem extends Component {
    componentDidMount() {
        console.log('Item ID :', this.props.match.params.itemID);//look at List to see how itemID becomes part of this. It came from path basically
        this.props.getSingleItem(this.props.match.params.itemID);
    }

    componentWillUnmount(){
        this.props.clearSingleItem();//this is to clear the old data before the new item is rendered
    }
    
    render(){
        console.log('Single Item in SingleItem class render :', this.props.item);
        const { item, toggleComplete, match: {params} } = this.props;
        return (
            <Fragment>
                <h1 className="center">To Do Item</h1>
                <h3>Title: {item.title}</h3>
                <h4>Details: {item.details}</h4>
                <h4 className={`${item.complete ? 'teal-text lighten-2' : 'red-text darken-2'}`}>
                    {item.complete ? 'Item has been completed' : 'Item NOT complete'}
                </h4>
                <button onClick={() => toggleComplete(params.itemID)} className={`btn ${item.complete ? 'red' : 'teal lighten-1'}`}>
                    {item.complete ? 'Remove Complete' : 'Complete Item'}
                </button>
            </Fragment>
        )
    }
}


const mapStateToProps = (state) => {
    console.log('state :', state);

    return {
        item: state.list.single
    };
    
}


export default connect(mapStateToProps, {
    getSingleItem: getSingleItem,
    clearSingleItem: clearSingleItem,
    toggleComplete: toggleComplete
})(SingleItem);
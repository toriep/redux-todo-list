import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Fragment } from 'react';
import { getSingleItem } from '../actions';


class SingleItem extends Component {
    
    componentDidMount() {
        console.log('Item ID :', this.props.match.params.itemID);//look at List to see how itemID becomes part of this. It came from path basically
        this.props.getSingleItem(this.props.match.params.itemID);
    }
    
    render(){
        console.log('Single Item in SingleItem class render :', this.props.item);
        const { item } = this.props;
        return (
            <Fragment>
                <h1 className="center">To Do Item</h1>
                <h3>Title: {item.title}</h3>
                <h4>Details: {item.details}</h4>
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
    getSingleItem: getSingleItem
})(SingleItem);
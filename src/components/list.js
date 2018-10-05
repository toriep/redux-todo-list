import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getListData } from '../actions';


class List extends Component {
    
    componentDidMount() {
        console.log('componentdidmount this.props :', this.props);
        this.props.getListData();//how did getListData becomes part of props?
    }
    
    render() {
        console.log('List this.props :', this.props);
        const {list} = this.props;//this list came from mapStateToProp
        const listElements = list.map(item=>{
            return <li key={item._id} className="collection-item">{item.title}</li>
        })
        return (
            <div>
                <h1 className="center">To Do List</h1>
                <div className="row">
                    <div className="col s12 right-align">
                        <Link className="btn teal lighten-2" to="/add">Add Item</Link>
                    </div>
                </div>
                <ul className="collection">
                    {listElements}
                </ul>
            </div>
        )
    }
}

function mapStateToProps(state){
    console.log('Redux state inside mapStateToProp :', state);
    return {
        list: state.list.all//this came from the rootReducer and lists reducer
    }
}



export default connect(mapStateToProps,{
    getListData: getListData//this is an object of action creator
})(List);



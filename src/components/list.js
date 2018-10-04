import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getListData } from '../actions';


class List extends Component {
    
    componentDidMount() {
        this.props.getListData();
    }
    
    render() {
        console.log('List this.props :', this.props);
        const {list} = this.props;
        const listElements = list.map(item=>{
            return <li key={item._id} className="collection-item">{item.title}</li>
        })
        return (
            <ul className="collection">
                <li className="collection-item">{listElements}</li>
            </ul>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        list: state.list.all
    }
}



export default connect(mapStateToProps,{
    getListData: getListData
})(List);



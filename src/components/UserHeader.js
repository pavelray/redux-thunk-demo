import React, { Component } from 'react'
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {fetchUser} from '../actions';

export class UserHeader extends Component {

    componentDidMount(){
        this.props.fetchUser(this.props.userId);
    }

    render() {
        return (
        <div>
            User UserHeader
        </div>
        )
    }
}

const mapDispatchToProps = (dispatch) =>  bindActionCreators({fetchUser},dispatch);

export default connect(null,mapDispatchToProps)(UserHeader)

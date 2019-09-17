import React, { Component } from 'react'
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import {fetchPost} from '../actions';

export class PostList extends Component {
  
    componentDidMount(){
        this.props.fetchPost();
    }
  
  render() {
    return (
      <div>
        Hello
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) =>  bindActionCreators({fetchPost},dispatch);

export default connect(null,mapDispatchToProps)(PostList);

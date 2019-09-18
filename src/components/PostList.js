import React, { Component } from 'react'
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import {fetchPost} from '../actions';

export class PostList extends Component {
  
  componentDidMount(){
      this.props.fetchPost();
  }
  
  render() {
    console.log(this.props.posts);
    return (
      <div>
        Hello
      </div>
    )
  }
}


const mapStateToProps = (state) =>{
  //console.log(state);
  return {posts:state.posts}
}

const mapDispatchToProps = (dispatch) =>  bindActionCreators({fetchPost},dispatch);

export default connect(mapStateToProps,mapDispatchToProps)(PostList);

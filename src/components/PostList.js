import React, { Component } from 'react'
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import {fetchPostAndUsers} from '../actions';

import UserHeader from './UserHeader';

export class PostList extends Component {
  
  componentDidMount(){
      this.props.fetchPostAndUsers();
  }
  
  renderList(){
    return this.props.posts.map(post=>{
      return (
        <div className="item" key={post.id}>
          <i className="large middle aligned icon user"></i>
          <div className="content">
            <div className="description">
              <h2>{post.title}</h2>
              <p>{post.body}</p>
            </div>
            <UserHeader userId={post.userId}/>
          </div>
        </div>
      );
    });
  }

  render() {
    return (
      <div className="ui relaxed divided list">
        {this.renderList()}
      </div>
    )
  }
}


const mapStateToProps = (state) =>{
  //console.log(state);
  return {posts:state.posts}
}

const mapDispatchToProps = (dispatch) =>  bindActionCreators({fetchPostAndUsers},dispatch);

export default connect(mapStateToProps,mapDispatchToProps)(PostList);

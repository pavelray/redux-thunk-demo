import jsonPlaceHolder from "../apis/jsonPlaceHolder";
import _ from 'lodash';

//Solution 2
// This will get all the posts and based on the posts get the matching users
// getState - function exsists in redux store and get access to all the data that are present in redux store
// _.map - works same as js map and select the userId from all the posts
// _.uniq returns all the uniq userId from the posts
export const fetchPostAndUsers = () => async (dispatch,getState) => {
    await dispatch(fetchPosts());

    const userIds = _.uniq(_.map(getState().posts,'userId'));
    userIds.forEach(id=> dispatch(fetchUser(id)));
}

export const fetchPosts = () => async dispatch =>{
    const response = await jsonPlaceHolder.get('/posts');
    dispatch({type:'FETCH_POSTS', payload: response.data});
}

export const fetchPost = (id) => async dispatch =>{
    const response = await jsonPlaceHolder.get(`/posts/${id}`);
    dispatch({type:'FETCH_POST', payload: response.data});
}

export const fetchUsers = ()=> async dispatch =>{
    const response = await jsonPlaceHolder.get('/users');
    dispatch({type:'FETCH_USERS', payload:response.data});
}

export const fetchUser = (id)=> async dispatch =>{
    const response = await jsonPlaceHolder.get(`/users/${id}`);
    dispatch({type:'FETCH_USER', payload:response.data});
}

//Solution 1
// To disable multiple call to api, we can memoize the api call using lodash _memoize fucntion
// memoize helps to memorized the function call and will execute the function only with unique parameter
// export const fetchUser = (id)=> dispatch =>{
//    _fetchUser(id,dispatch);
// };

// const _fetchUser = _.memoize(async(id,dispatch) => {
//     const response = await jsonPlaceHolder.get(`/users/${id}`);
//     dispatch({type:'FETCH_USER', payload:response.data});
// });
import jsonPlaceHolder from "../apis/jsonPlaceHolder";

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
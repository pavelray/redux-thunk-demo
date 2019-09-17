import jsonPlaceHolder from "../apis/jsonPlaceHolder";

export const fetchPost = ()=> {
    const promise = jsonPlaceHolder.get('/posts');

    return{
        type: 'FETCH_POST',
        payload: promise
    };
}

// const response = await jsonPlaceHolder.get('/posts');
//dispatch({type: 'FETCH_POST', payload: response});

/*export const fetchPost = () => async dispatch =>{
    const response = await jsonPlaceHolder.get('/posts');
    dispatch({type:'FETCH_POST', payload: response})
}*/
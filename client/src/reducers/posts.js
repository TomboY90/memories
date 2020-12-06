import {
  CREATE_POST, DELETE_POST, FETCH_POST, LIKE_POST, UPDATE_POST
} from '../constants/actionType';

const reducer = (posts = [], action) => {
  switch (action.type) {
    case FETCH_POST:
      return action.payload;
    case CREATE_POST:
      return [...posts, action.payload];
    case UPDATE_POST:
      return posts.map(post => post._id === action.payload._id ? action.payload : post);
    case DELETE_POST:
      return posts.filter(post => post._id !== action.payload);
    case LIKE_POST:
      return posts.map(post => post._id === action.payload._id ? action.payload : post);
    default:
      return posts;
  }
}

export default reducer;
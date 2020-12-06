import axios from 'axios';

const URL = 'https://memories-covy.herokuapp.com/posts';

export const fetchPosts = () => axios.get(URL);
export const createPost = (newPost) => axios.post(URL, newPost);
export const updatePost = (id, post) => axios.patch(`${URL}/${id}`, post);
export const deletePost = (id) => axios.delete(`${URL}/${id}`);
export const likePost = (id) => axios.patch(`${URL}/${id}/likePost`);
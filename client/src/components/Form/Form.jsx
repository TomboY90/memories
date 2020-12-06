import React, { useState, useEffect } from 'react';
import { TextField, Button, Typography, Paper } from '@material-ui/core';
import FileBase from 'react-file-base64';
import { useDispatch, useSelector } from 'react-redux';

// Action
import { createPost, updatePost } from '../../actions/posts';

// style
import useStyles from './styles';

const Form = ({ currentId, setCurrentId }) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const [ postData, setPostData ] = useState({
    creator: '',
    title: '',
    message: '',
    tags: '',
    selectedFile: ''
  });
  const currentPost = useSelector(state => currentId ? state.posts.find(post => post._id === currentId) : null);

  useEffect(() => {
    if(currentPost) setPostData(currentPost);
  }, [currentPost])

  const handleTextInput = (name, val) => {
    setPostData({
      ...postData,
      [name]: val
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if (currentId) {
      dispatch(updatePost(currentId, postData))
    } else {
      dispatch(createPost(postData));
    }

    clear();
  }

  const clear = () => {
    setCurrentId(null);
    setPostData({
      creator: '',
      title: '',
      message: '',
      tags: '',
      selectedFile: ''
    })
  }
  
  return (
    <Paper className={classes.paper}>
      <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
        <Typography variant="h6">{currentId ? 'Editing' : 'Creating'} a Memory</Typography>
        <TextField name="creator" variant="outlined" label="Creator" fullWidth value={postData.creator} onChange={e => handleTextInput(e.target.name, e.target.value)} />
        <TextField name="title" variant="outlined" label="Title" fullWidth value={postData.title} onChange={e => handleTextInput(e.target.name, e.target.value)} />
        <TextField name="message" variant="outlined" label="Message" fullWidth value={postData.message} onChange={e => handleTextInput(e.target.name, e.target.value)} />
        <TextField name="tags" variant="outlined" label="Tags" fullWidth value={postData.tags} onChange={e => handleTextInput(e.target.name, e.target.value.split(','))} />

        <div className={classes.fileInput}>
          <FileBase 
            type="file"
            multiple={false}
            onDone={({base64}) => setPostData({ ...postData, selectedFile: base64 })}
          />
        </div>

        <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Submit</Button>
        <Button variant="contained" color="secondary" size="small" fullWidth onClick={clear} >Reset</Button>
      </form>
    </Paper>
  )
}

export default Form;
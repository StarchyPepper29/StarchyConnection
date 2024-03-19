import React from 'react'
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";

const add = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [author, setAuthor] = useState('');


  const handleSubmit = () => {
    const newPost = {
      title: title,
      author: author,
      tags : ["new"],
      body: description,
     
    };
    axios.post('http://localhost:3000/blogs', newPost)
    .then((response) => {
      console.log(response);
    }).then(() => {
      navigate('/blog');
    }
    )
    .catch((error) => {
      console.log(error);
    });
  };

  return (
    <div>
    <h1>Add a New Post</h1>
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>

      <div>
        <label htmlFor="description">Description:</label>
        <textarea
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="author">Author:</label>
        <input
          type="text"
          id="author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
      </div>
      <button type="submit">Add Post</button>
    </form>
  </div>
  );
};
  

export default add

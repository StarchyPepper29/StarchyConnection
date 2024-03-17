import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios';


const single = () => {  
  const { id } = useParams();
  const [post, setPosts] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/blogs/${id}')
      .then((response) => {
        setPosts(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  return (
    <div>
        <h1>{ 
            post.title
        }</h1>
        <h3>{ 
            post.author
        }</h3>
        <p>{ 
            post.body
        }</p>
        
    </div>
  )
}

export default single

import axios from 'axios';
import React from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from "react-router-dom";

const postbuttons = ({id}) => {
    const navigate = useNavigate();
  const deletePost = () => {
    axios.delete(`http://localhost:3000/blogs/${id}`)
    .then((response) => {
        navigate('/blog');
    })
    .catch((error) => {
        console.log(error);
    });
    }
    return (
    <div style={
        {
            display: 'flex',
            flexDirection: 'row',
            padding: '20px'
        }
    }>

                <Link to={`edit`}  >
                    <button>Edit</button>
                </Link>
                <button onClick={deletePost}>Delete</button>
                
    </div>
  )
}

export default postbuttons

import React from 'react'
import { Link } from 'react-router-dom'

const postbuttons = ({id}) => {
  deletePost = () => {
    axios.delete(`http://localhost:3000/blogs/${id}`)
    .then((response) => {
        console.log(response);
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
                    <button>Delete</button>
                
    </div>
  )
}

export default postbuttons

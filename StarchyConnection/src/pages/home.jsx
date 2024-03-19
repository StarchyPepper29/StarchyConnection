import React from 'react'
import { Link } from 'react-router-dom'


const home = () => {
  return (
    <div>
      <h1>Home</h1>
      <p>Welcome to Starchy Connection</p>
      <Link to={`add`}>
      <button>Add your own blog post</button>
      </Link>
      <Link to={`blog`}>
        <button>View all blog posts</button>
      </Link>
    </div>
  )
}

export default home

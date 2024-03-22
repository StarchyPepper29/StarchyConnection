import React from 'react'
import { Link } from 'react-router-dom'
import '../theonlycss.css'
import starchyConnectionLogo from '../StarchyConnectionEllipse.png'; // Import the image

const Home = () => {
  return (
    <div className='homediv'>
      <img src={starchyConnectionLogo} alt="Starchy Connection Logo" width="200" height="200" />
      <h1 className='MainTitle'>Welcome to Starchy Connection</h1>
      <Link to={`add`}>
        <button>Add your own blog post</button>
      </Link>
      <Link to={`blog`}>
        <button>View all blog posts</button>
      </Link>
    </div>
  )
}

export default Home;

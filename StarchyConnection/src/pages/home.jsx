import React from 'react'
import { Link } from 'react-router-dom'
import '../theonlycss.css'
import starchyConnectionLogo from '../StarchyConnectionEllipse.png'; // Import the image

const Home = () => {
  return (
    <div className='homediv'>
      <div className='header'>
      <img src={starchyConnectionLogo} alt="Starchy Connection Logo" width="200" height="200" />
      <h1 className='MainTitle'>Starchy Connection</h1>
      </div>
      <div className='Buttons'>
      <Link to={`add`}>
        <button>Add your own blog post</button>
      </Link>
      <Link to={`blog`}>
        <button>View all blog posts</button>
      </Link>
    </div>
    </div>
  )
}

export default Home;

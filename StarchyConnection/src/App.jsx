import React from 'react'
import {Routes , Route} from 'react-router-dom'
import Home from './pages/home'
import Blog from './pages/blog'
import Edit from './pages/edit'
import Single from './pages/single'
import Add from './pages/add'
const App = () => {
  return (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:id" element={<Single />} />
        <Route path="/blog/:id/edit" element={<Edit />} />
        <Route path="/add" element={<Add />} />
    </Routes>
  )
}

export default App

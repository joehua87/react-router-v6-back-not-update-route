import React from 'react'
import { useRoutes } from 'react-router'
import { Link } from 'react-router-dom'

function App() {
  let element = useRoutes([
    { path: '/', element: <div>Home</div> },
    { path: 'dashboard', element: <div>Dashboard</div> },
    { path: '*', element: <div>NotFound</div> }
  ]);
  return <div>
    <Link to="/">Home</Link>
    <Link to="dashboard">Dashboard</Link>
    {element}
  </div>
}

export default App

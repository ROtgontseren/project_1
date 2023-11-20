import React from 'react'
import Logo from '../Logo';

const Dashboard = () => {
  return (
    <div className='w-screen h-screen m-12'>
      <div className='flex'>
          <div className='flex items-center gap-4'>
             <Logo/>
             <h1>Dashboard</h1>
             <h1>Records</h1> 
          </div>
          <div className="flex items-center gap-6 justify-end">
             <button className="btn btn-active btn-primary rounded-3xl">+Records</button>
             <img className='w-8 h-8' src='Vector.png' /> 
          </div>
      </div>  
    </div>
  )
}

export default Dashboard;

import React from 'react'
import Footer from '../UserOperations/Footer'
import Navbar from '../UserOperations/Navbar'
import Sidebar from '../UserOperations/Sidebar'
import Edit from './Edit'

const UserEdit = () => {
  return (
    <div className='flex flex-row  w-screen  h-screen bg-[#F8F8F8]'>
      <div className='flex w-1/6'>

        <Sidebar />
      </div>
        <div className='flex flex-1  flex-col  h-screen '>
        <Navbar />
        <Edit />
        <Footer />
        </div>
        
    </div>
  )
}

export default UserEdit
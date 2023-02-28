import React from 'react'
import Footer from './Footer'
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import Table from './Table'

const UserOperations = () => {
  return (
    <div className='flex flex-row  w-screen  h-screen bg-[#F8F8F8]'>
      <div className='flex w-1/6'>

        <Sidebar />
      </div>
        <div className='flex flex-1  flex-col  h-screen '>
        <Navbar />
        <Table />
        <Footer />
        </div>
        
    </div>
  )
}

export default UserOperations
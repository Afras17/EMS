import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'


const AllTask = () => {
   const [userData,setUserData]=useContext(AuthContext)
  return (
    <div id='scroll' className='bg-[#1c1c1c] p-5 mt-5 rounded'>
        <div className='bg-emerald-400 mb-2 py-2 px-4 flex justify-between rounded text-sm'>
            <h2 className='w-1/5 font-bold text-black'>Employe Name</h2>
            <h3 className='w-1/5 font-bold text-black'>New Task</h3>
            <h5 className='w-1/5 font-bold text-black'>Active Task</h5>
            <h5 className='w-1/5 font-bold text-black'>Completed</h5>
            <h5 className='w-1/5 font-bold text-black'>Failed</h5>
        </div>
        <div  className=''>
        {userData.map(function(elem,idx){
            return <div key={idx} className='border-2 border-emerald-500 mb-2 py-2 px-4 flex justify-between rounded'>
            <h2 className='text-sm w-1/5 font-bold'>{elem.firstName}</h2>
            <h3 className='text-lg w-1/5 text-white'>{elem.taskCounts.newTask}</h3>
            <h5 className='text-lg w-1/5 text-white'>{elem.taskCounts.active}</h5>
            <h5 className='text-lg w-1/5 text-white'>{elem.taskCounts.completed}</h5>
            <h5 className='text-lg w-1/5 text-white'>{elem.taskCounts.failed}</h5>
        </div>
        })}
        </div>
    </div>
  )
}

export default AllTask
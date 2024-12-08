import React from 'react'

const AcceptTask = () => {
  return (
    <div className='flex-shrink-0 h-full w-[375px] p-5 bg-green-400 rounded-xl'>
                <div className='flex justify-between items-center'>
                    <h3 className='bg-red-600 text-sm px-3 py-1 rounded'>High</h3>
                    <h4 className='text-sm'>20 feb 2024</h4>
                </div>
                <h2 className='mt-5 text-2xl font-semibold'>Make a youtube video</h2>
                <p className='text-sm mt-2'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, quae? Aliquid molestias veniam odio molestiae?
                </p>
                <div className='flex justify-between mt-4'>
                    <button className='mt-5 bg-green-600 py-4 px-4 text-sm rounded-md'>mark as Completed</button>
                    <button className='mt-5 bg-red-700 py-4 px-7 text-sm rounded-md'>mark as Failed</button>
                </div>
            </div>
  )
}

export default AcceptTask
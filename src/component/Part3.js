import React from 'react'
import Text from './Text'
import bg from '../images/e.jpg'
import YesOrNo from './YesOrNo'

function Part3() {
  return (
    <div className='my-10 text-center'>
                <h2 className='text-xl font-bold'>عنوان فرعي</h2>
                <div className='grid md:grid-cols-3 items-start sm:grid-cols-1 my-8'>
                <YesOrNo/>                
                <div className='m-auto col-span-2'>
                <div className='relative'>
                <img src={bg} className="w-full h-screen bg-cover h-screen bg-no-repeat" />
                <div className='absolute  inset-0'>            
                <Text/> 
                </div>  </div>
                 
                </div>   
                </div>
         </div>
  )
}

export default Part3
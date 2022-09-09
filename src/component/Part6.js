import React from 'react'
import woman from '../images/0a0361a91280a5529a8bc45ccab7c825.jpg'
import Y from './Y'
import Text2 from './Text2'

function Part6() {
  return ( <div className='my-10 text-center'>
  <h2 className='text-xl font-bold'>عنوان فرعي</h2>
                <div className='grid md:grid-cols-2 items-center sm:grid-cols-1'>
                <img src={woman}/>
                <div>
                <Text2/> 
                <Y/>                 
                </div>
                </div>
  </div>
  
  )
}

export default Part6
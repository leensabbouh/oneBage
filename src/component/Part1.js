
import React from 'react'
import woman from '../images/f213fb4a39bb58fc51a5ec9a8946c0a8.jpg'
import YorN from './Y'
import Text2 from './Text2'

function Part1() {
  return ( <div className='my-10 text-center p-32'>
  <h2 className='text-xl font-bold'>عنوان فرعي</h2>
                <div className='grid md:grid-cols-2 items-center sm:grid-cols-1'>
                <img src={woman}/>
                <div>
                <Text2/> 
                <YorN />                
                </div>
                </div>
  </div>
  
  )
}

export default Part1
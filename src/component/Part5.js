import React from 'react'
import Text from './Text'
import bgtext from '../images/f.jpg'
import Avarage from './Avarage'

function Part5() {
  return (
    <div className='my-10 text-center  p-10'>
                <h2 className='text-xl font-bold'>ما هي مدة اجازة الأمومة</h2> 
                <div className='relative my-8'>
                <img src={bgtext} className="w-full h-3/4 bg-cover h-screen bg-no-repeat" />
                <div className='absolute  inset-0'>            
                <Text/> 
                </div>  </div>
                <Avarage/>   
         </div>
  )
}

export default Part5
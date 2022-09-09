import React from 'react'
import Text from './Text'
import YesOrNo2 from './YesOrNo2'

function Part4() {
  return ( <div className='my-10 text-center  p-10'>
  <h2 className='text-xl font-bold'>عنوان فرعي</h2>
                <div className='grid md:grid-cols-2 items-start sm:grid-cols-1'>
                <YesOrNo2/>                
                <Text/>  
                </div>
  </div>
  
  )
}

export default Part4
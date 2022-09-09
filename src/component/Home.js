import React from 'react'
import home from '../images/c2.jpg'
import Navbar from './Navbar'
function Home() {
  return (
<div className='text-black text-center'>
<img src={home} className="w-full bg-cover h-screen bg-no-repeat relative" />
  <div className='p-8 h-full absolute inset-0'>
    <Navbar/>
    
<div className=' max-w-3xl my-28 m-auto '>
    <h1 className='text-5xl font-bold my-10'>
                جشع طبي أو تساهل مشرط القيصرية يلقي بالمواليد إلى الحاضنات
    </h1>
    <p  className='text-lg font-bold'>
    تحقيق سارة جمال
    </p>
    </div>
  </div>
</div>
  )
}

export default Home
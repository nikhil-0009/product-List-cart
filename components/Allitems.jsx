import React from 'react'

import Singleitem from './Singleitem';
const Allitems = ({data}) => {
    
  return (
    <div className='md:w-[65%] max-md:flex flex-col '>
        <h1 className='font-extrabold md:text-3xl md:mb-4 text-5xl mb-4 max-md:mx-auto'> Desserts</h1>
        <div className='flex flex-wrap gap-6 max-md:justify-center'>
        {
            data.map((item)=>{
                return <Singleitem key={item.id} id={item.id} item={item} />
            })
        }
        
        </div>
        
    </div>
    
  )
}

export default Allitems
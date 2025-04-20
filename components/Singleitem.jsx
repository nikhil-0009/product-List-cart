import React from 'react'
import AddToCartBtn from './AddToCartBtn';

const Singleitem = ({item}) => {
    
  return (
    <div className='max-md:mb-2'>
        <img src={item.image.desktop} alt={item.name} className="w-[200px] h-[200px] rounded-xl max-md:w-[300px] max-md:h-[300px]"/>
        <AddToCartBtn key={item.id} id={item.id} name={item.name} price={item.price} />
        <p className='text-gray-600'>{item.category}</p>
        <h3 className='font-bold '>{item.name}</h3>
        <h4 className='text-orange-600 font-bold'>${item.price}</h4>
        <hr className='md:hidden text-gray-600' />
    </div>
  )
}

export default Singleitem
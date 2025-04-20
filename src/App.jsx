import { useState } from 'react'
import './App.css'
import Allitems from '../components/Allitems'
import UserCart from '../components/UserCart'
import data from '../data.json'
import { CartProvider } from '../CartContext'

function App() {
 const image= data.map((e)=>e.image.thumbnail)
//  console.log(image);

  return (
    <CartProvider>
    <div className='md:flex justify-between'>
      <Allitems data={data}/>
      <UserCart image={image} />
    </div>
    </CartProvider>
  )
}

export default App

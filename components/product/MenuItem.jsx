import Image from 'next/image.js'
import React from 'react'
import {ShoppingCartOutlined } from '@ant-design/icons';
const MenuItem = () => {
  return (
    <div className='bg-secondary w-80 rounded-md'>
      <div className='bg-white flex justify-center items-center border rounded-b-3xl p-2 hover:scale-110 transition-all'>
        <Image src="/images/f1.png" alt="Image" width={250} height={150}/>
      </div>
      <div className='text-white p-6 flex flex-col justify-center items-start gap-2'>
        <h2>Schmeckt Pizza</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi nobis rem inventore perspiciatis laborum iusto? Laboriosam, .</p>
        <div className='flex justify-between items-center w-full'>
          <p>20€</p>

            <div className='bg-primary rounded-full cursor-pointer hover:scale-110 transition-all'>
            <ShoppingCartOutlined  className ="text-2xl m-2 " />
            </div>
        </div>
      </div>

    </div>
  )
}

export default MenuItem
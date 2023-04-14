import Image from 'next/image.js'
import React from 'react'
import {ShoppingCartOutlined } from '@ant-design/icons';
import Link from 'next/link.js';
const MenuItem = ({prd}) => {
  return (
    <div className='bg-secondary w-80 rounded-md'>
      <Link href={`/product/${prd._id}`}>
      <div className='bg-white flex justify-center items-center border rounded-b-3xl p-2 hover:scale-110 transition-all'>
        <Image src={prd.img} alt="Image" width={250} height={250} priority/>
      </div>
      </Link>
      <div className='text-white p-6 flex flex-col justify-center items-start gap-2'>
        <h2>{prd.title}</h2>
        <p>{prd.desc}</p>
        <div className='flex justify-between items-center w-full'>
          <p>{prd.prices.length>0 ? prd.prices[0]:prd.prices}€</p>

            <div className='bg-primary rounded-full cursor-pointer hover:scale-110 transition-all'>
            <ShoppingCartOutlined  className ="text-2xl m-2 " />
            </div>
        </div>
      </div>

    </div>
  )
}

export default MenuItem
import React from 'react'
import Title from '../ui/Title.jsx'
import { Button } from 'antd'
import MenuItem from './MenuItem.jsx'

const MenuWrapper = () => {
  return (
    <div className='flex flex-col justify-center items-center'>
      <Title addClass="text-black mb-10 text-[40px]" >Unser Menü</Title>
      <div className='flex justify-center items-center gap-3'>
        <div className='hover:bg-secondary hover:text-white hover:border hover:rounded-full p-2 cursor-pointer w-20 flex justify-center items-center'>All</div>
        <div className='hover:bg-secondary hover:text-white hover:border hover:rounded-full p-2 cursor-pointer w-20 flex justify-center items-center'>Burger</div>
        <div className='hover:bg-secondary hover:text-white hover:border hover:rounded-full p-2 cursor-pointer w-20 flex justify-center items-center'>Pizza</div>
        <div className='hover:bg-secondary hover:text-white hover:border hover:rounded-full p-2 cursor-pointer w-20 flex justify-center items-center'>Pasta</div>
        <div className='hover:bg-secondary hover:text-white hover:border hover:rounded-full p-2 cursor-pointer w-20 flex justify-center items-center'>Fries</div>
      </div>
      <div className=' mt-8 grid xl:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-10'>
        <MenuItem />
        <MenuItem />
        <MenuItem />
        <MenuItem />
        <MenuItem />
      </div>

    </div>
  )
}

export default MenuWrapper
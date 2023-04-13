import React,{useState} from 'react'
import Title from '../ui/Title.jsx'
import MenuItem from './MenuItem.jsx'

const MenuWrapper = ({categoryList}) => {
  const [active, setActive] = useState(0);
  return (
    <div className='flex flex-col justify-center items-center'>
      <Title addClass="text-black mb-10 text-[40px]" >Unser Menü</Title>
      <div className='flex justify-center items-center gap-3'>
        
        {categoryList &&
            categoryList.map((category, index) => (
              <button
                className={`px-6 py-2  rounded-3xl ${
                  index === active && "bg-secondary text-white"
                }`}
                key={category._id}
                onClick={() => setActive(index)}
              >
                {category.title}
              </button>
            ))}
       
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
import MenuWrapper from '@/components/product/MenuWrapper.jsx'
import React from 'react'
import axios from 'axios'
const Index = ({categoryList}) => {
  return (
    <div className='mt-40'>
       <MenuWrapper categoryList={categoryList} />
    </div>
  )
}
export const getServerSideProps = async () => {
  const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/categories`);
  return {
    props: {
      categoryList: res.data ? res.data : [],
    },
  };
}
export default Index

import MenuWrapper from '@/components/product/MenuWrapper.jsx'
import React from 'react'
import { getSession } from 'next-auth/react'
const Index = () => {
  return (
    <div className='mt-40'>
      <MenuWrapper />
    </div>
  )
}
export const getServerSideProps = async({req})=>{
  const session = await getSession({req});
  if (!session) {
    return {
      redirect:{
        destination:"/login",
        permanent:false
      }
    }    
  }
  return {
    props:{}
  }
}
export default Index

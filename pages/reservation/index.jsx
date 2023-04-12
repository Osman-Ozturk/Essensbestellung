import React from 'react'
import Reservation from '@/components/Rezervation.jsx'
import { getSession } from 'next-auth/react'
const Index = () => {
  return (
        <div className='mt-24'>
        <Reservation />
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
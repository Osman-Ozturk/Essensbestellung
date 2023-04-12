import Login from '@/components/auth/Login.jsx'
import React from 'react'
import { getSession } from 'next-auth/react'
const Index = () => {
  return (
    <div>
        <Login />
    </div>
  )
}
export const getServerSideProps = async({req})=>{
  const session = await getSession({req});
  if (session) {
    return {
      redirect:{
        destination:"/profile",
        permanent:false
      }
    }    
  }
  return {
    props:{}
  }
}

export default Index
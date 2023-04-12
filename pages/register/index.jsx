
import Register from '@/components/auth/Register.jsx'
import { getSession } from 'next-auth/react'
const Index = () => {
  return (
    <div>
        <Register />
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
import React from 'react'
import Karussell from '@/components/ui/Karussell.jsx'
import Campaigns from '@/components/ui/Campaigns.jsx'
import MenuWrapper from '@/components/product/MenuWrapper.jsx'
import About from '@/components/ui/About.jsx'
import Reservation from '@/components/Rezervation.jsx'
import Customers from '@/components/customers/Customers.jsx'
import { getSession } from 'next-auth/react'
const Home = ({categoryList}) => {
  
  return (
    <div>
       <Karussell />
       <Campaigns />
       <MenuWrapper  categoryList={categoryList}/>
       <About />
       <Reservation />
       <Customers />
       
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

export default Home

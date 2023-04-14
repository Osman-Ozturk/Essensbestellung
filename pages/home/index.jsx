import React from 'react'
import Karussell from '@/components/ui/Karussell.jsx'
import Campaigns from '@/components/ui/Campaigns.jsx'
import MenuWrapper from '@/components/product/MenuWrapper.jsx'
import About from '@/components/ui/About.jsx'
import Reservation from '@/components/Rezervation.jsx'
import Customers from '@/components/customers/Customers.jsx'
import axios from 'axios'
const Home = ({categoryList,productList}) => {
  
  return (
    <div>
       <Karussell />
       <Campaigns />
       <MenuWrapper  categoryList={categoryList} productList={productList}/>
       <About />
       <Reservation />
       <Customers />
       
    </div>
  )
}
export const getServerSideProps = async () => {
  const product = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/products`);
  const categories = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/categories`);
  return {
    props: {
      productList: product.data ? product.data : [],
      categoryList: categories.data ? categories.data : [],
    },
  };
}

export default Home

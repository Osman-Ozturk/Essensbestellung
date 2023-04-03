import React from 'react'
import Karussell from '@/components/ui/Karussell.jsx'
import Campaigns from '@/components/ui/Campaigns.jsx'
import MenuWrapper from '@/components/product/MenuWrapper.jsx'
import About from '@/components/ui/About.jsx'
import Reservation from '@/components/Rezervation.jsx'
const Home = () => {
  return (
    <div>
       <Karussell />
       <Campaigns />
       <MenuWrapper />
       <About />
       <Reservation />
    </div>
  )
}

export default Home

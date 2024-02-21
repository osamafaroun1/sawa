import React, { useEffect } from 'react'
import Hero from '../../Components/Hero/Hero'
import OurServices from '../../Components/OurServices/OurServices'
import FooterSawa from '../../Components/FooterSawa/FooterSawa'
import Transition from '../../Components/Transition/Transition'
function Home() {
  useEffect(()=>{
    window.scrollTo(0,0);
  },[])
  return (
    <>
      <Hero />
      <OurServices />
      <FooterSawa />
    </>
  )
}

export default Home;
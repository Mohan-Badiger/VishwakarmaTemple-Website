import React from 'react'
import Hero from '../components/Hero.jsx'
import Founders from '../components/Founders.jsx'
import SectionCardList from '../components/SectionCardList.jsx'
import Contact from '../components/Contact.jsx'

const Home = () => {
  return (
    <div>
    <Hero/>
    <SectionCardList/>
    <Founders/>
    <Contact/>
    </div>
  )
}

export default Home
import React from 'react'
import Home from './pages/Home'
import About from './pages/About'
import { Route, Routes, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Events from './pages/Events'
import Banner from './components/Banner'
import ScrollToTop from './components/ScrollToTop'
import PhotoGallery from './pages/PhotoGallery'

const App = () => {

   const location = useLocation();
  
  // pages where banner should be hidden
  const hideBannerOn = ['/events'];
  
  const showBanner = !hideBannerOn.includes(location.pathname);

  return (
    <>
    {showBanner && <Banner />}
    <ScrollToTop/>
    <div className='px-3 lg:px-8 xl:px-[8%] bg-gradient-to-br from-yellow-100 via-gray-200 to-yellow-100'>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/events' element={<Events/>}/>
        <Route path='/photos' element={<PhotoGallery/>}/>
      </Routes>
      <Footer/>
    </div>
    </>
  )
}

export default App
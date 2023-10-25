import React from 'react'
import "./App.css"
import Header from './components/Header'
import AppointMent from './components/AppointMent'
import Plans from './components/Plans'
import About from './components/About'
import FormSection from './components/FormSection'
import Footer from './components/Footer'
import Services from './components/Services'
import Testimonial from './components/Testimonial'
function App() {
  return (
    <>
      <Header
        tagline="The First wealth is Health ..! Your Health is Our Priority"
        para="orem ipsum dolor sit amet consectetur adipisicing elit. Quam ad, optio dolor ullam dignissimos animi voluptatum velit repudiandae aspernatur nostrum magni amet voluptas sunt harum rem dicta delectus? Sunt veritatis totam quam voluptatem? Unde!"
       featured = "pngkit_business-woman-png_9611691.png"
      />

      <AppointMent />
      <Services />
      <Plans />
      <Testimonial />
      <About 
         featured ='surgery-1807541_1280.jpg'
      />
      <FormSection />
      <Footer />

    </>
  )
}

export default App

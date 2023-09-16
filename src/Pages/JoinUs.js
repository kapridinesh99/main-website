import React from 'react'
import VideoPlayer from '../Components/JoinUs/VideoPlayer'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import Features from '../Components/JoinUs/Features'
import Register from '../Components/JoinUs/Register'
import Business from '../Components/JoinUs/Business'

function JoinUs() {
  return (
    <main>
        <Header />
        <br /> <br /> <br />
        <VideoPlayer />
        <br /> <br /> <br />
        <Features />
        <br /> <br /> <br />
        <Register />
        <br /> <br /> <br />
        <Business />
        <br /> <br /> <br />
        <Footer />
    </main>
  )
}

export default JoinUs
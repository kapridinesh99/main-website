import React from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import Vision from '../Components/About/Vision'
import AboutArticle from '../Components/About/About'
import '../App.css'

function About() {
  return (
    <section>
        <Header />
        <main>
            <AboutArticle />
            <br /> <br /> 
            <Vision />
            <br /> <br />
            {/* <br /> <br />  */}
        </main>
        <Footer />
    </section>
  )
}

export default About
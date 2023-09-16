import React from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import ComplaintForm from '../Components/ContactUs/ComplaintForm'

function ContactUs() {
  return (
    <>
        <Header />
        <main>
            <ComplaintForm />
        </main>
        <Footer />
    </>
  )
}

export default ContactUs
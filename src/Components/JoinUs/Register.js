import React from 'react'
import './JoinUs.css'
import { Link } from 'react-router-dom'

function Register() {
  return (
    <article className='register'>
        <h3>Become a Real Value Direct Selling Partner</h3>
        <br /> <br /> <br /> 
        <img src='/register.svg' alt='register' />
        <br /> <br /> <br /> 
        <Link to='/signup' className='register-btn'>
            Register Now
        </Link>
        <br /> <br /> <br /> 
    </article>
  )
}

export default Register
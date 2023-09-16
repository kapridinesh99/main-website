import React from 'react'
import './JoinUs.css'

function Features() {
  return (
    <article className='flex align-center justify-center gap-5xl features'>
        <div className='each-feature flex align-center justify-center column gap-xl'>
            <header>
                <img width={150} src='/image1.svg' alt='image1' />
            </header>
            <main>
                <h3>Real Value products</h3>
                <p>Over 10 distinctive quality consumer products</p>
            </main>
        </div>
        <div className='each-feature flex align-center justify-center column gap-xl'>
            <header>
                <img width={150} src='/handshake.svg' alt='handshake' />
            </header>
            <main>
                <h3>Business Owners</h3>
                <p>More than 100 Direct Selling Partners across India earn extra incomes for themselves and their families</p>
            </main>
        </div>
        <div className='each-feature flex align-center justify-center column gap-xl'>
            <header>
                <img width={150} src='/location.svg' alt='location' />
            </header>
            <main>
                <h3>Presence across the India</h3>
                <p>Real Value operates in more than 10+ States across the Inida</p>
            </main>
        </div>
    </article>
  )
}

export default Features
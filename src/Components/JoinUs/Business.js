import React from 'react'
import './JoinUs.css'

function Business() {
  return (
    <article className='business'>
        <h3>Business Opportunity</h3>
        <br />
        <img src='/products/BusinessImage.png' alt='rect-box' />
        <br /> <br />
        <p>Real Values is a direct selling company that offers a wide range of high-quality FMCG products. 
        The company is committed to providing its customers with the best possible products and services. 
        Real Values is a Made in India company that manufactures its products in India using high-quality ingredients. 
        The company has a strong commitment to social responsibility and donates a portion of its profits to 
        charitable causes.</p>
        <br /> <br />
        <div className='pdfResources flex align-center space-evenly gap-2xl'>
            <img src='/pdf-button-1.svg' alt='resource-1' />
            <img src='/pdf-button-2.svg' alt='resource-1' />
            <img src='/pdf-button-3.svg' alt='resource-1' />
        </div>
    </article>
  )
}

export default Business
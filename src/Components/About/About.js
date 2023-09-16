import React from 'react'
import './About.css'
import { auBanner } from "../../Assets/index";

function About() {
    return (
        <article className='about-wrapper'>
            <div className='about-img'>
                <img className='au-banner' src={auBanner} alt='Logo' />
            </div>
            <div className='about-section'>
                <h2>About RV Enterprises</h2>
                <br />
                <p className='about-us-text'>
                    At Real Value, we believe in creating opportunities, transforming lives, and nurturing dreams. We are not just a company; we are a movement dedicated to delivering excellence in every aspect of your financial journey.
                    Our journey began with a vision to redefine the financial landscape. Inspired by the idea that everyone deserves access to the best investment opportunities, we embarked on a mission to empower individuals to achieve their financial goals and secure their futures. Real Value was born out of this vision, and since then, our commitment to delivering real value has remained unwavering.
                </p>
                <br />
                <p  className='about-us-text'>
                    Integrity: At the core of Real Value's identity is unwavering integrity. We believe in transparency, honesty, and trustworthiness in all our interactions. Our clients can have confidence in our ethical practices and financial solutions.

                    Innovation: We thrive on innovation and embrace change as an opportunity for growth. Our dedicated team continually explores new avenues, technologies, and strategies to provide cutting-edge financial solutions.

                    Customer-Centric: Real Value is built around you, our valued client. We prioritize your financial aspirations, ensuring that every decision we make is in your best interest. Your success is our success.

                    Excellence: We strive for excellence in everything we do. From our investments to our customer service, we set high standards and consistently aim to exceed them.
                </p>
                <br />
                <p  className='about-us-text'>
                    The clear vision, passion, positive attitude, ambition and pragmatism of the founders
                    and the core team of managerial personnel, led by them, has helped the company to grow
                    in leaps and bounds. Today we have more than 4 lakh direct sellers across the country
                    and more than 102 Franchisee and 1500+ Mini Franchisee under Galway Business working to
                    fulfill their inspired dreams. This efficient and wide independent distributor network of
                    Glaze ensures that Galway products reach every consumer in the country, even if they are
                    located in the remotest places and most remote corners of the country.
                </p>
            </div>
        </article>
    )
}

export default About
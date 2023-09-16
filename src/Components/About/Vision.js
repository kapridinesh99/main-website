import React from 'react'
import './About.css'

const valuesData = [
    {
        title: 'Integrity',
        description: 'To succeed'
    },
    {
        title: 'Innovation',
        description: 'To succeed'
    },
    {
        title: 'Customer-Centric',
        description: 'To succeed'
    },
    {
        title: 'Excellence',
        description: 'To succeed'
    },
    {
        title: 'Financial Empowerment',
        description: 'To succeed'
    }
];

function Vision() {
    return (
        <article className='vision-wrapper'>
            <h2>Vision & Mission</h2>
            <div className='flex column gap-5xl'>
                <div className='vision-card flex column gap-2xl'>
                    <h3 className='flex column align-center justify-center'>
                        <span>Our Vision</span>
                    </h3>
                    <p>
                    At Real Value, our vision is to be the foremost catalyst for financial empowerment, fostering a world where individuals from all walks of life have the knowledge, tools, and opportunities to achieve their dreams and secure their financial futures. We aspire to be recognized globally for our unwavering commitment to integrity, innovation, and excellence in delivering real value."
                    </p>
                </div>
                <div className='vision-card flex column gap-2xl'>
                    <h3 className='flex column align-center justify-center'>
                        <br />
                        <span>Our Mission</span>
                    </h3>
                    <p>
                    Our mission at Real Value is to empower individuals through smart and accessible financial solutions. We are dedicated to providing exceptional investment opportunities that generate outstanding returns while managing risks responsibly. We are committed to offering a superb commission structure to reward loyalty and referrals, acknowledging that our clients' success is our success. We aim to build better futures not only for our clients but also for the communities we serve, actively engaging in initiatives that uplift and empower. We pledge to uphold the highest standards of integrity, innovation, and customer-centricity in all our endeavors, ensuring that Real Value remains a trusted partner in prosperity.
                    </p>
                </div>
                <div className='vision-card flex column gap-2xl'>
                    <h3>
                        <span>Our Values</span>
                    </h3>
                    <div className='flex flex-wrap justify-center align-center gap-5xl'>
                        {
                            valuesData.map((value, index) => {
                                return (
                                    <div className='vision-feature-card flex column gap-2xl' key={index}>
                                        <h4 className='flex column align-center justify-center'>
                                            <span>{value.title}</span>
                                        </h4>
                                        <p>
                                            {value.description}
                                        </p>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </article>
    )
}

export default Vision
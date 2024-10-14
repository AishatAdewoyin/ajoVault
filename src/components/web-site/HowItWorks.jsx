import React from 'react'
import SmallHeaders from '../headers/headers/SmallHeaders'
import Paragraph from '../paragraphs'


function HowItWorks() {
  return (
    <div className='howItWorks'>

        <div className="list">
            <SmallHeaders heaserText="How it Works" class="" />
            <div className="main-content list-items">
                <li>Get started by signing Up or Logging In</li>
                <li>Choose one or more savings plans</li>
                <li>Complete KYC and sign standing order</li>
                <li>Savings payment and withdrawal are automated</li>
            </div>
        </div>

        <div className="stories">
          <SmallHeaders heaserText="" class="" />
            <div className="main-content">
                <div className="icon"></div>
                <Paragraph paragraphText="AjoVault has been helping me meet most of my bills obligations. I am able to pay my house rent promptly from the pooled contribution. I highly recommend it." />
                <SmallHeaders heaserText="Tosin James" class="profile-btn" />
            </div>
            <div className="indicator">
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    </div>
  )
}

export default HowItWorks
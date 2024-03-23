import React from 'react'
import './LandingPage.css'
import LoginForm from '../LoginForm/LoginForm'

const LandingPage = () => {
  return (
    <div className='LandingPage'>
      <div className="mainContainer-parent">
        <div className="main-container">
          <div className='main-top-left'>

          </div>
        </div>
        <div className='bottomline'>
          <div className='num1'></div>
          <div className='num2'></div>
          <div className='num3'></div>
        </div>
      </div>
      <div className='main-container-addon'>
        <div className="addon1"></div>
        <div className="addon2"></div>
      </div>
      <div className="content-container">
        <div className="content-left">
          <img src="Assets/img1.jpg" alt="img" />
        </div>
        <div className="content-right">
          <LoginForm/>
        </div>
      </div>
    </div>
  )
}

export default LandingPage
import React, { Component } from 'react';
// import backgroundImage from './Resources/images/pattern-background-desktop.svg';
import cardImage from './Resources/images/illustration-hero.svg';
import cardMusic from './Resources/images/icon-music.svg';
import './PaymentPage.css'
class PaymentPage extends Component {
  render() {
    return (
        <div className='outerDiv'>
      {/* <img src="../public/images/pattern-background-desktop.svg" alt='bg-pic'/> */}
      {/* {console.log(backgroundImage)}
      <img className='imageBackGround' src={backgroundImage} alt='bg-pic' /> */}

      <div className='card'>
        <img src={cardImage}  alt='card' className='cardImage'/>
        <div className='orderSummary'>
      Order Summary
      </div>

      <div className='orderDetails'>
      You can now listen to millions of songs, audiobooks, and podcasts on any device anywhere you like!
      </div>


      <div className='planCharge'>
        <div><img src={cardMusic} alt='card' style={{}} /></div>
        <div style={{display: 'flex', flexDirection: 'column'}}>
            <div>Annual Plan</div>
            <div>$59.99/year</div>
        </div>
        <div>
            <button className='changeButton'>Change</button>
        </div>
      </div>

      <button className='paymentButtonDiv'>
        <span className='paymentButton'>Proceed to Payment</span>
      </button>

      <div className='cancelButton'>
        Cancel Order
      </div>



      </div>

      


        </div>
    )
  }
}

export default PaymentPage;
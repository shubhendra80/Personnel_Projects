import React from 'react';
import './NewsHomenGrid.css';
import Logo from './Resources/images/images_News/logo.svg';
import Web3 from './Resources/images/images_News/image-web-3-desktop.jpg';
import RetroPc from './Resources/images/images_News/image-retro-pcs.jpg';
import Laptop from './Resources/images/images_News/image-top-laptops.jpg';
import Gaming from './Resources/images/images_News/image-gaming-growth.jpg';


function NewsHomenGrid() {
  return (
    <div className='mainDiv'>
      <div className='nav'>
        <div className='LogoContainer'><img className='imgLogo' src={Logo} alt='logo' /></div>

        <div className='ListContainer'>
          <li className='listEle'>
            <ul>Home</ul>
            <ul>New</ul>
            <ul>Popular</ul>
            <ul>Trending</ul>
            <ul>Categories</ul>
          </li>
        </div>

      </div>
      <div className='container'>
      

      <div className='grid-span-col-2'>
        <img src={Web3} alt='web3 img' className='web3img'/>
      </div>

      <div className='NewPostContainer grid-row-span-2'>
        <p className='headingMain'>New</p>

        <div>
        <p>Hydrogen VS Electric Cars</p>
        <p className='sec-para'>Will hydrogen-fueled cars ever catch up to EVs?</p>
        </div>
          <hr />
        <div>
        <p>The Downsides of AI Artistry</p>
        <p className='sec-para'>What are the possible adverse effects of on-demand AI image generation?</p>
        </div>
        <hr />
        <div>
        <p>Is VC Funding Drying Up?</p>
        <p className='sec-para'>Private funding by VC firms is down 50% YOY. We take a look at what that means.</p>
        </div>

      </div>


      <div>
      <div style={{fontSize: '30px', fontWeight: 700}}>
        The Bright Future of Web 3.0?
        </div>
      </div>

      <div>
        <p>
        We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people. But is it really fulfilling its promise?
        </p>

        <button className='readmorebutton'>READ MORE</button>
      </div>


      <div className='footerStories'>
        <img src={RetroPc} alt='retroPc' className='img-Foot' />
        <div>
          <p>
            01
          </p>
          <p>
            Relaeving retro Pcs
          </p>
          <p>
          What happens when old PCs are given modern upgrades?
          </p>
        </div>
      </div>


      <div className='footerStories'>
        <img src={Laptop} alt='Laptop' className='img-Foot'/>
        <div>
          <p>
            02
          </p>
          <p>
            Top 10 laptops
          </p>
          <p>
          What happens when old PCs are given modern upgrades?
          </p>
        </div>
      </div>

      <div className='footerStories'>
        <img src={Gaming} alt='Gaming' className='img-Foot'/>
        <div>
          <p>
            03
          </p>
          <p>
            The growth of gaming
          </p>
          <p>
          What happens when old PCs are given modern upgrades?
          </p>
        </div>
      </div>




      </div>
    </div>
  )
}

export default NewsHomenGrid
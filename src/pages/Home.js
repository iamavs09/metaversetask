import React from 'react';
import Card2 from '../helpers/Card2';
import Cards from '../helpers/Cards';
import Contact from '../helpers/Contact';
import "../styles/Home.css"
import Animation from "../assets/video.mp4"
import Footer from '../component/Footer';
function Home() {
  return (
    <div className='home'>
        <div className="img-container">
            <video src={Animation} autoPlay loop muted ></video>
        </div>
        <div className="roadmap-area">
            <h2 className='header1'>Road map</h2>
            <div className="roadmap-img"></div>
            <div className="firstlist">
                <ul>
                    <li>Website Lauch </li>
                    <li>Avatar System Launch </li>
                    <li>Token System Creation (minting)</li>
                    <li> Private Wallet Creation</li>
                    <li>Early Adoptor Initiative</li>
                </ul>
            </div>
            <div className="secondlist">
                <ul>
                    <li>Alpha Release</li>
                    <li>NFT Market Release </li>
                    <li>Token DEX Listing</li>
                    <li>Creator Tool Release</li>
                </ul>
            </div>
            <div className="thirdlist">
                <ul>
                    <li> Second Era Release</li>
                    <li>DAO Created</li>
                    <li>Real Estate Sale Open</li>
                </ul>
            </div>
            <div className="fourthlist">
                <ul>
                    <li> Third Era Release</li>
                </ul>
            </div>
        </div>

        <h2 className='header2'>It’s your turn to Build your own world in this Foradian Universe.</h2>

        <h3 className='header3'> Grab your NFT’s in the upcoming NFT auction.</h3>

        <button className='future-btn'>Future release plans</button>

        <Cards/>

        <div className="pinkimg"></div>

        <div className="wrapper">
        <div className="wrapper-left">
            <h2 className='right-heading-wrapper'>Build Your Best Avatar!</h2>
            <p className='left-p-tag' >Create your alter ego in the finest way possible! Our well-defined customization features will help you create the best version of your virtual presence.</p>
            <button className='wrapper-button'>Build Your Own Avtar</button>
        </div>
            <div className="wrapper-right">
                <div className="img-wrapper"></div>
            </div>
        </div>

        <div className="imersive-bg-img">
            <div className="imersive-text-wrapper">
            <h2 className="heading-imersive">Immerssive Experience</h2>
            <p className="imersive-text">Immerse yourself in an amazing, dynamic world filled with phenomenal experiences, a place where you can make your fantasies come true and create new memories.</p>
            <button className="imerive-btn">Explore</button>
            </div>
        </div>
        

        

        <div className="civilisation-wrapper">
            <div className="civilisation-left">
                <h2 className="civilisation-heading">Civilisation</h2>
                <p className="civilisation-text">Explore an everchanging world full of unique experiences. Hop in and build your own memories, make your fantasies come true! Explore an everchanging world full of unique experiences. Hop in and build your own memories, make your fantasies come true! </p>
                <button className="imerive-btn">Explore</button>
            </div>
            <div className="civilisation-right">

            </div>
        </div>

        <div className="line-end"></div>


        <h2 className="what-heading">What is in store for you</h2>

        <h4 className="what-sub-heading">Check out the key features of our meta verse They can help you create your first</h4>

        <Card2/>

        <Contact/>

        <Footer/>
        
    </div>
  )
}

export default Home
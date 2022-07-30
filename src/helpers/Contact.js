import React from 'react'
import "../helpers/Contact.css"

function Contact() {
  return (
    <>

        <div className="contact">

            <h2 className="contact-heading">Contact Us</h2>


            <div className="contact-wrapper">
                <div className="name-wrapper">
                    <h4 className="name">Name</h4>
                    <div className="text-and-image-box">
                        <input type="text" name="" id="text-box"  placeholder='RAJESH KUMAR'/>
                        <div className="name-img-box">
                            <div className="name-img"></div>
                        </div>
                    </div>
                </div>
                <div className="email-wrapper">
                    <h4 className="name">Name</h4>
                        <div className="text-and-image-box">
                            <input type="text" name="" id="text-box"  placeholder='RAJESH KUMAR'/>
                            <div className="name-img-box">
                                <div className="name-img"></div>
                            </div>
                        </div>
                </div>
            </div>

            <div className="message-wrapper">
                <h4 className="name">Message</h4>
                        <div className="text-and-image-box-meaasge">
                            <input type="text" name="" id="text-box2" />
                            <div className="name-img-box2">
                                <div className="name-img"></div>
                            </div>
                        </div>

            </div>

            <button className="contact-button">Send</button>


        </div>

    </>
  )
}

export default Contact
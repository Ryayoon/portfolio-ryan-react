import './Contact.css';
import React, { useRef } from 'react';
import emailJs from '@emailjs/browser';
import awsBadge from '../../assets/images/aws-ccp-logo.png';

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailJs.sendForm('service_2erutw5', 'template_8dmj6hg', form.current, 'uyNjIVn7vSSE7gtjB')
            .then(function(response) {
                alert('Successfully Sent!');
            }, function(error) {
                alert('Failed to send, Please Try Again!');
            });
    };
    return (
        <div className="contact">
            <h2>Contact</h2>
            <div className="submitting">
                <form ref={form} onSubmit={sendEmail}>
                    <ul>
                        <li className='detail-input'>
                            <input type="text" name="user_name" placeholder="Name" required/>
                        </li>
                        <li className='detail-input'>
                            <input type="email" name="user_email" placeholder="Email" required/>
                        </li>
                        <li className='detail-input'>
                            <input type="text" name="subject" placeholder="Subject" required />
                        </li>
                        <li className='detail-input'>
                            <textarea type="message" name="message" placeholder="Message" required/>
                        </li>
                        <li className='detail-input text-right'>
                            <input type="submit" className='flat-button' value="Send"/>
                        </li>
                    </ul>
                </form>
            </div>
            <div className="vertical-line">
            </div>
            <div className="further-details mt-[-54vh] md:mb-[8vh] md:mt-[-32vh]">
                <h3>Personal Details:</h3>
                <br/>
                <h6>Ryayoon7gzf@gmail.com</h6>
                <br/>
                <h6>+64 22 062 4057</h6>
                <br/>
                <h6>Auckland, New Zealand</h6>
                <img className="badge" src={awsBadge} alt="AWS-badge"/>
            </div>
        </div>
    );
}

export default Contact;
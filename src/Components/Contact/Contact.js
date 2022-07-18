import './Contact.css';
import React, { useRef } from 'react';
import emailJs from '@emailjs/browser';

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailJs.sendForm('service_2erutw5', 'template_8dmj6hg', form.current, 'uyNjIVn7vSSE7gtjB')
            .then((result) => {
                console.log(result.text);
                console.log("Message Sent")
            }, (error) => {
                console.log(error.text);

            });
    };
    return (
        <div className="contact">
            <h2>Contact Details</h2>
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
        </div>
    );
}

export default Contact;
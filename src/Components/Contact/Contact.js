import './Contact.css';
import React, {useRef} from 'react';
import emailJs from '@emailjs/browser';
import awsBadge from '../../assets/images/aws-ccp-logo.png';
import AnimatedPage from "../../Components/Animated/Animated";

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailJs.sendForm('service_2erutw5', 'template_8dmj6hg', form.current, 'uyNjIVn7vSSE7gtjB')
            .then(function (response) {
                alert('Successfully Sent!');
            }, function (error) {
                alert('Failed to send, Please Try Again!');
            });
    };
    return (
        <AnimatedPage>
        <div className="contact">
            <div className="flex justify-between content-center items-center flex-col md:flex-row items-stretch">
                <div className="flex-initial pt-5 pb-10">
                    <h1>Contact</h1>
                    <br/>
                    <div className="submitting">
                        <form ref={form} onSubmit={sendEmail}>
                            <input type="text" name="user_name" placeholder="Name" required/>
                            <input type="email" name="user_email" placeholder="Email" required/>
                            <input type="text" name="subject" placeholder="Subject" required/>
                            <textarea type="message" name="message" placeholder="Message" required/>
                            <div className="w-full text-right">
                                <input type="submit" className='flat-button' value="Send"/>
                            </div>
                        </form>
                    </div>
                </div>

                <div className="line h-[4px] w-full md:w-[5px] md:h-auto"></div>

                <div className="flex-initial md:ml-[4%] md:pt-10 pt-20">
                    <div className="further-details">
                        <h2>Personal Details:</h2>
                        <br/>
                        <h5><a href="mailto:Ryayoon7gzf@gmail.com">Ryayoon7gzf@gmail.com</a></h5>
                        <br/>
                        <h5><a href="tel:+64220624057">+64 22 062 4057</a></h5>
                        <br/>
                        <h5>Auckland, New Zealand</h5>
                        <img className="badge max-w-[250px]" src={awsBadge} alt="AWS-badge"/>
                    </div>

                </div>
            </div>
        </div>
        </AnimatedPage>
    );
}

export default Contact;
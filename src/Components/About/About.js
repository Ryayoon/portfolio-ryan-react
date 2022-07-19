import './About.css';
import {faCss3, faHtml5, faJava, faJsSquare, faPython, faReact, faAws} from "@fortawesome/free-brands-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const About = () => {
    return (
        <div className="about">
            <div className="flex justify-between content-evenly items-center md:items-stretch flex-col-reverse md:flex-row">

                <div className="text-2">
                    <h2 className="self-title">About Myself</h2>
                    <br/>
                    <p className="paragraph-1 max-w-[300px]">Currently, as a Certified AWS Cloud Practitioner I am studying
                        towards the Solutions Architect role. In terms of programming experiences I had implemented
                        some
                        basic frontend web development (using HTML, CSS, a bit of React and javascript)
                        in the past. Through high-school projects and University courses I had also learned how to
                        code
                        some Python, C , Java(Object Oriented Programming) and MATLAB.
                    </p>
                </div>
                <div className="flex flex-col justify-between -mb-[170px] md:mb-0 -mr-[150px] md:mr-0 -z-[1]">

                    <div className="w-[150px] h-[150px]">
                        <div className="cube-spinner">
                            <div className="face1">
                                <FontAwesomeIcon icon={faPython} color="#050e0b"/>
                            </div>
                            <div className="face2">
                                <FontAwesomeIcon icon={faHtml5} color="#F06529"/>
                            </div>
                            <div className="face3">
                                <FontAwesomeIcon icon={faCss3} color="#28A4D9"/>
                            </div>
                            <div className="face4">
                                <FontAwesomeIcon icon={faReact} color="#5ED4F4"/>
                            </div>
                            <div className="face5">
                                <FontAwesomeIcon icon={faJsSquare} color="#EFD81D"/>
                            </div>
                            <div className="face6">
                                <FontAwesomeIcon icon={faJava} color="#f70d0c"/>
                            </div>
                        </div>
                    </div>
                    <FontAwesomeIcon className="aws-logo" icon={faAws} color="#ec912d"/>

                </div>

            </div>

            <div className="text-3">
                <h2 className="job-title">Work Experience</h2>
                <br/>
                <hr className="indicate"/>
                <br/>
                <h4 className="cert-awards">Samsung Sales Representative - Millennium Retail</h4>
                <br/>
                <hr className="indicate"/>
                <br/>
                <h4 className="cert-awards">Field Merchandiser - DKSH</h4>
                <br/>
                <hr className="indicate"/>
                <br/>
                <h4 className="cert-awards">Mathematics Tutor - MyTuition</h4>
                <br/>
                <hr className="indicate"/>
            </div>
            <div className="text-4">
                <h2 className="affiliations-title">Affiliations</h2>
                <br/>
                <hr className="indicate"/>
                <br/>
                <h4 className="cert-awards">DEVS member (Developers Society)</h4>
                <br/>
                <hr className="indicate"/>
                <br/>
                <h4 className="cert-awards">WDCC member (Web Development & Consulting Club)</h4>
                <br/>
                <hr className="indicate"/>
                <br/>
                <h4 className="cert-awards">GDSC member (Google Developer Student Club)</h4>
                <br/>
                <hr className="indicate"/>
                <br/>
                <h4 className="cert-awards">The University of Auckland Badminton Club</h4>
                <br/>
                <hr className="indicate"/>
                <br/>
                <h4 className="cert-awards">KUMGANG Taekwondo (WTF)</h4>
                <br/>
                <hr className="indicate"/>
            </div>
        </div>

    );
}

export default About;
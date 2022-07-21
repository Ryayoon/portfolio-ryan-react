import './About.css';
import {faCss3, faHtml5, faJava, faJsSquare, faPython, faReact, faAws} from "@fortawesome/free-brands-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const About = () => {
    return (
        <div className="about">
            <div className="flex justify-between content-evenly items-center md:items-stretch flex-col-reverse md:flex-row">

                <div className="text-2">
                    <h1 className="self-title">About Myself</h1>
                    <br/>
                    <p className="paragraph-1 max-w-[300px] mt-[15px]">Currently, I am a Certified AWS Cloud Practitioner.
                        In terms of programming experience I have used HTML, CSS, React with javascript
                        in the past for some web-development. Through high-school and University courses I had also learned how to
                        code some Python, C , Java(Object Oriented Programming) and MATLAB.
                    </p>
                </div>
                <div className="flex flex-col justify-between -mb-[170px] md:mb-0 -mr-[150px] md:mr-0 -z-[1]">

                    <div className="w-[150px] h-[200px]">
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
                <ul className="colum-1 mr-[10.5%]">
                    <h2 className="titling">Work Experience</h2>
                    <br/>
                    <li>
                        <button className="projects"><h4 className="proj-text">Samsung Sales Representative - Millennium Retail</h4></button>
                    </li>
                    <li>
                        <button className="projects"><h4 className="proj-text">Field Merchandiser - DKSH</h4></button>
                    </li>
                    <li>
                        <button className="projects"><h4 className="proj-text">Mathematics Tutor - MyTuition</h4></button>
                    </li>
                </ul>
            </div>

            <div className="text-4">
                <ul className="colum-2 mr-[10.5%]">
                    <h2 className="titling">Affiliations</h2>
                    <br/>
                    <li>
                        <button className="projects"><h4 className="proj-text">PASS Mentor (The University of Auckland)</h4></button>
                    </li>
                    <li>
                        <button className="projects"><h4 className="proj-text">DEVS member (Developers Society)</h4></button>
                    </li>
                    <li>
                        <button className="projects"><h4 className="proj-text">WDCC member (Web Development & Consulting Club)</h4></button>
                    </li>
                    <li>
                        <button className="projects"><h4 className="proj-text">GDSC member (Google Developer Student Club)</h4></button>
                    </li>
                    <li>
                        <button className="projects"><h4 className="proj-text">Badminton Club (The University of Auckland)</h4></button>
                    </li>
                    <li>
                        <button className="projects"><h4 className="proj-text">Peer Support Leader (Pakuranga College)</h4></button>
                    </li>
                </ul>
            </div>
        </div>

    );
}

export default About;
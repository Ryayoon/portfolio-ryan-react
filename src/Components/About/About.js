import './About.css';
import {faCss3, faHtml5, faJava, faJsSquare, faPython, faReact, faAws} from "@fortawesome/free-brands-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import Collapsible from "../Collapsible/Collapsible";
import {useState} from "react";
import samsung from "../../assets/images/samsung.png";
import DKSH from "../../assets/images/DKSH.png";
import myTuition from "../../assets/images/MyTuition.png";
import AnimatedPage from "../../Components/Animated/Animated";

const About = () => {

    const[projects, setProjects] = useState([false, false, false]);

    const onClickProject = (index) => () => {
        const temporaryValue = !projects[index];
        let temporary = [false, false, false];
        temporary[index] = temporaryValue;
        setProjects(temporary);
    };

    return (
        <AnimatedPage>
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
                        <Collapsible
                            isOpen={projects[0]}
                            onClick={onClickProject(0)}
                            label="Samsung Sales Representative - Millennium Retail">
                            <div className="text mt-[-60px]">
                                <img className="images w-[150px] md:w-[350px]" src={samsung} alt="Samsung-logo"/>
                                <p className="explanation">
                                    <b>Working with Samsung New Zealand:</b>
                                    <li>
                                        - Outstanding Customer service
                                    </li>
                                    <li>
                                        - Ability to do Retail Sales Procedures
                                    </li>
                                    <li>
                                        - Excellent Communication and Interpersonal Skills
                                    </li>
                                    <li>
                                        - High level of technical knowledge and interest in technology
                                    </li>
                                    <li>
                                        - Testing of Mobile/ Electronic Devices
                                    </li>
                                    <li>
                                        - Confidence in Approaching Customers to recommend and Sell Products
                                    </li>
                                </p>
                            </div>
                        </Collapsible>
                    </li>
                    <li>
                        <Collapsible
                            isOpen={projects[1]}
                            onClick={onClickProject(1)}
                            label="Field Merchandiser - DKSH">
                            <div className="text mt-[-60px]">
                                <img className="images w-[150px] md:w-[250px]" src={DKSH} alt="DKSH-logo"/>
                                <br/>
                                <p className="explanation">
                                    <li>
                                        - Quality of Product displays
                                    </li>
                                    <li>
                                        - Ensuring stock levels are at optimal state and that my products are rotated
                                        and displayed at correct price
                                    </li>
                                    <li>
                                        - Building and maintaining professional store level relationships
                                    </li>
                                    <li>
                                        - Available to Communicate with Customers Effectively
                                    </li>
                                </p>
                            </div>
                        </Collapsible>
                    </li>
                    <li>
                        <Collapsible
                            isOpen={projects[2]}
                            onClick={onClickProject(2)}
                            label="Mathematics Tutor - MyTuition">
                            <div className="text mt-[-60px]">
                                <img className="images w-[150px] md:w-[250px]" src={myTuition} alt="MyTuition-logo"/>
                                <br/>
                                <p className="explanation">
                                    <li>
                                        - NCEA Mathematics Tutor
                                    </li>
                                    <li>
                                        - Providing and Building excellent one to one relation between Student and Tutor
                                    </li>
                                    <li>
                                        - Great interpretation Skills
                                    </li>
                                </p>
                            </div>
                        </Collapsible>
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
        </AnimatedPage>

    );
}

export default About;
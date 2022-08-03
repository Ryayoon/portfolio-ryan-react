import './About.css';
import {faCss3, faHtml5, faJava, faJsSquare, faPython, faReact, faAws} from "@fortawesome/free-brands-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import Collapsible from "../Collapsible/Collapsible";
import {useState} from "react";
import samsung from "../../assets/images/samsung.svg";
import DKSH from "../../assets/images/DKSH.png";
import myTuition from "../../assets/images/MyTuition.png";
import aucklandUni from "../../assets/images/UOA.png";
import devs from "../../assets/images/Devs.png";
import wdcc from "../../assets/images/Wdcc.png";
import badminton from "../../assets/images/badminton.png";
import pakuranga from "../../assets/images/pakuranga.png";
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

                <div className="text-2 z-[1]">
                    <h1 className="self-title">About Myself</h1>
                    <br/>
                    <p className="paragraph-1 max-w-[300px] mt-[15px]">Currently, I am a Certified AWS Cloud Practitioner.
                        In terms of programming experience I have used HTML, CSS, React with javascript
                        in the past for some web-development. Through high-school and University courses I had also learned how to
                        code some Python, C , Java(Object Oriented Programming) and MATLAB.
                    </p>
                </div>
                <div className="flex flex-col justify-between -mb-[170px] md:mb-0 -mr-[150px] md:mr-0 ">

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
                                <br/>
                                <img className="images w-[190px] md:w-[350px]" src={samsung} alt="Samsung-logo"/>
                                <br/>
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
                                    <b>As a Field Merchandiser at DKSH:</b>
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
                                    <b>As a Mathematics Tutor at MyTuition:</b>
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
                        <Collapsible
                            isOpen={projects[3]}
                            onClick={onClickProject(3)}
                            label="PASS Mentor (The University of Auckland)">
                            <div className="text mt-[-60px]">
                                <br/>
                                <img className="images w-[180px] md:w-[250px]" src={aucklandUni} alt="University of Auckland-logo"/>
                                <br/>
                                <p className="explanation">
                                    <b>As a UOA PASS Mentor:</b>
                                    <li>
                                        My role was to assist students in Part I Engineering at Grafton Hall UOA.
                                        Papers I offered to support were ENGGEN 140, ELECTENG 101 and ENGGEN 131.
                                    </li>
                                </p>
                            </div>
                        </Collapsible>
                    </li>
                    <li>
                        <Collapsible
                            isOpen={projects[4]}
                            onClick={onClickProject(4)}
                            label="DEVS member (Developers Society)">
                            <div className="text mt-[-60px]">
                                <br/>
                                <img className="images w-[180px] md:w-[250px]" src={devs} alt="Devs-logo"/>
                                <br/>
                                <p className="explanation">
                                    <b>UOA Developers Society:</b>
                                    <li>
                                        Developers Society Club (DEVS) is the largest student-run tech organisation
                                        within The University of Auckland. They collaborate with different tech companies across Oceania
                                        when hosting unique and valuable events.
                                    </li>
                                </p>
                            </div>
                        </Collapsible>
                    </li>
                    <li>
                        <Collapsible
                            isOpen={projects[5]}
                            onClick={onClickProject(5)}
                            label="WDCC member (Web Development & Consulting Club)">
                            <div className="text mt-[-60px]">
                                <br/>
                                <img className="images w-[180px] md:w-[250px]" src={wdcc} alt="Wdcc-logo"/>
                                <br/>
                                <p className="explanation">
                                    <b>UOA Web Development & Consulting Club:</b>
                                    <li>
                                        WDCC (Web Development & Consulting Club) is a non-profit organisation
                                        founded by two students from the University of Auckland. This club aims to integrate
                                        university knowledge and real-world industry practices.
                                    </li>
                                </p>
                            </div>
                        </Collapsible>
                    </li>
                    <li>
                        <Collapsible
                            isOpen={projects[6]}
                            onClick={onClickProject(6)}
                            label="Badminton Club member(The University of Auckland)">
                            <div className="text mt-[-60px]">
                                <br/>
                                <img className="images w-[130px] md:w-[160px]" src={badminton} alt="badminton-logo"/>
                                <br/>
                                <p className="explanation">
                                    <b>University of Auckland Badminton Club:</b>
                                    <li>
                                        University of Auckland Badminton Club (UABC) is a club dedicated to bringing
                                        people interested in badminton together.
                                    </li>
                                </p>
                            </div>
                        </Collapsible>
                    </li>
                    <li>
                        <Collapsible
                            isOpen={projects[7]}
                            onClick={onClickProject(7)}
                            label="Peer Support Leader (Pakuranga College)">
                            <div className="text mt-[-60px]">
                                <br/>
                                <img className="images w-[130px] md:w-[180px]" src={pakuranga} alt="pakuranga-logo"/>
                                <br/>
                                <p className="explanation">
                                    <b>As a Peer Support Leader:</b>
                                    <li>
                                        I supported junior students in their transition to College life.
                                        In the process of this, I had joined them in their junior camp and formed
                                        group sessions every week to guide them.
                                    </li>
                                </p>
                            </div>
                        </Collapsible>
                    </li>
                </ul>
            </div>
        </div>
        </AnimatedPage>

    );
}

export default About;
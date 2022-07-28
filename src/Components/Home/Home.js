import './Home.css';
import emoji from '../../assets/images/Emoji.png';
import newsResult from '../../assets/images/news-app-first.png';
import ourNews from '../../assets/images/our-news.png';
import newsApi from '../../assets/images/news-api.png';
import openWeather from '../../assets/images/open-weather.png';
import motor from '../../assets/images/electric-motor.png';
import code from '../../assets/images/encrypting-image.png';
import patterns from '../../assets/images/vc-patterns.png';
import devs from '../../assets/images/Devs-certificate.jpg';
import Certification from '../../assets/images/aws-certificate.jpg';
import CompSci from '../../assets/images/compsci-certi.png';
import ncea from '../../assets/images/NCEA.png';
import {faAngular, faPython, faAws} from "@fortawesome/free-brands-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import Collapsible from "../Collapsible/Collapsible";
import {useState} from "react";
import AnimatedPage from "../../Components/Animated/Animated";

const Home = () => {

    const[projects, setProjects] = useState([false, false, false, false, false, false, false]);

    const onClickProject = (index) => () => {
        const temporaryValue = !projects[index];
        let temporary = [false, false, false, false, false, false, false];
        temporary[index] = temporaryValue;
        setProjects(temporary);
    };

    return (
        <AnimatedPage>
            <div className="home">
                <div className="flex justify-between content-center items-center flex-col-reverse md:flex-row">
                    <div className="text-one max-w-[300px] z-10">
                        <h2>Hey there, I'm Ryan.</h2>
                        <p>I am currently a Part II Computer Systems Engineering Student @
                            The University of Auckland looking for potential Internship
                            opportunities to gain practical experiences in the industry in a professional
                            manner.
                        </p>
                    </div>
                    <img className='text-zero w-[250px] md:w-[350px] -mb-[50px] md:mb-0 -mt-[50px] -mr-[100px]' src={emoji} alt="my-emoji"/>

                </div>
                <div className="text-two">
                    <ul className="col-1 mr-[10.5%]">
                        <h2 className="titling">Projects</h2>
                        <br/>
                        <li>
                            <Collapsible
                                isOpen={projects[0]}
                                onClick={onClickProject(0)}
                                label="Hack for Happiness Project (News App)">
                                <div className="text mt-[-30px]">
                                    <h4>Positive News Web App - DEVS Hackathon</h4>
                                    <br/>
                                    <img className="images w-[240px] md:w-[450px]" src={newsResult} alt="implementation-result"/>
                                    <br/>
                                    <p className="explanation">We brainstormed and researched for what make people 'unhappy' to first see what the
                                        issues tended to be. From this after careful consideration we had come up with the
                                        idea of creating a News Web Application where it only displayed positive news about
                                        our current society which we had implemented this by using AWS Comprehend where it
                                        uses a mixture of AI and Machine Learning to measure sentiment in order to filter out
                                        negative news. Our application also displays the current weather conditions with
                                        suggestions on what fascinating activities users could be doing at that time.</p>
                                    <br/>
                                    <img className="images w-[250px] md:w-[450px]" src={ourNews} alt="Our-News"/>
                                    <br/>
                                    <p className="explanation">We had Implemented our web application using Angular framework communicating with
                                        OpenWeather API and AWS using AWS SDK in python language which we then used this
                                        to communicate with the news API.</p>
                                    <br/>
                                    <img className="techStack w-[60px]" src={newsApi} alt="news-api"/>
                                    <FontAwesomeIcon className="techStack" icon={faPython} color="#050e0b" />
                                    <FontAwesomeIcon className="techStack" icon={faAngular} color="#f70d0c" />
                                    <FontAwesomeIcon className="techStack" icon={faAws} color="#ec912d" />
                                    <img className="techStack w-[60px]" src={openWeather} alt="open-weather"/>
                                </div>
                            </Collapsible>
                        </li>
                        <li>
                            <Collapsible
                                isOpen={projects[1]}
                                onClick={onClickProject(1)}
                                label="Electric Motor Generation (ENGGEN 299)">
                                <div className="text mt-[-30px]">
                                    <h4>Generated an Electric Motor</h4>
                                    <br/>
                                    <img className="images w-[150px] md:w-[350px]" src={motor} alt="Electric-Motor"/>
                                    <br/>
                                    <p className="explanation">This course allowed me to gain some practical experience
                                        in implementing a fully functional circuit board which I then had to integrate
                                        to other working parts to get the motor to spin when the switch was turned on.
                                        It also allowed me to assure my theoretical knowledge on electricity and
                                        electromagnetism which was pretty fascinating.</p>
                                </div>
                            </Collapsible>
                        </li>
                        <li>
                            <Collapsible
                                isOpen={projects[2]}
                                onClick={onClickProject(2)}
                                label="Visual Cryptography Project (MATLAB)">
                                <div className="text mt-[-30px]">
                                    <h4>Visual Cryptography Project</h4>
                                    <br/>
                                    <img className="images w-[150px] md:w-[350px]" src={code} alt="MATLAB-code"/>
                                    <br/>
                                    <p className="explanation">For this project through Matlab I had to write a code that will encrypt and
                                        decrypt messages using a technique known as visual cryptography.
                                        During the project I had learnt that cryptographic algorithms are
                                        extremely important for allowing messages to be sent securely from one
                                        party to another so that a random party being able to understand the
                                        message once intercepted would not be possible.</p>
                                    <br/>
                                    <img className="images w-[150px] md:w-[350px]" src={patterns} alt="patterns"/>
                                </div>
                            </Collapsible>
                        </li>
                    </ul>
                </div>
            <br/>
                <div className="text-three">
                    <ul className="col-2 mr-[10.5%]">
                        <h2 className="titling">Certifications & Awards</h2>
                        <br/>
                        <li>
                            <Collapsible
                                isOpen={projects[3]}
                                onClick={onClickProject(3)}
                                label="AWS Cloud Practitioner - Certificate">
                                <div className="text mt-[-30px]">
                                    <img className="images w-[240px] md:w-[300px] shadow-lg" src={Certification} alt="aws-certificate"/>
                                </div>
                            </Collapsible>
                        </li>
                        <li>
                            <Collapsible
                                isOpen={projects[4]}
                                onClick={onClickProject(4)}
                                label="Best Technical Implementation @ Devs Hackathon - Award">
                                <div className="text mt-[-30px]">
                                    <img className="images w-[240px] md:w-[300px] shadow-lg" src={devs} alt="devs-certificate"/>
                                </div>
                            </Collapsible>
                        </li>
                        <li>
                            <Collapsible
                                isOpen={projects[5]}
                                onClick={onClickProject(5)}
                                label="Outstanding Achievement (COMPSCI 101) - Certificate">
                                <div className="text mt-[-30px]">
                                    <img className="images w-[240px] md:w-[300px] shadow-lg" src={CompSci} alt="compsci-certificate"/>
                                </div>
                            </Collapsible>
                        </li>
                        <li>
                            <Collapsible
                                isOpen={projects[6]}
                                onClick={onClickProject(6)}
                                label="NCEA Level 1 & 2 & 3 Excellence - Certificate">
                                <div className="text mt-[-30px]">
                                    <img className="images w-[240px] md:w-[300px] shadow-lg" src={ncea} alt="ncea-certificate"/>
                                </div>
                            </Collapsible>
                        </li>
                    </ul>
                </div>
            </div>
        </AnimatedPage>
    );
}

export default Home;
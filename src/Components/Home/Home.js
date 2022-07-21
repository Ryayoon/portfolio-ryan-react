import './Home.css';
import emoji from '../../assets/images/Emoji.png';
import newsResult from '../../assets/images/news-app-first.png';
import ourNews from '../../assets/images/our-news.png';
import newsApi from '../../assets/images/news-api.png';
import openWeather from '../../assets/images/open-weather.png';
import Collapsible from "../Collapsible/Collapsible";
import {faAngular, faPython, faAws} from "@fortawesome/free-brands-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const Home = () => {

    return (
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
                        <h2 className="titling">Certifications & Awards</h2>
                        <br/>
                        <li>
                            <button className="projects"><h4 className="proj-text">AWS Cloud Practitioner - Certificate</h4></button>
                        </li>
                        <li>
                            <button className="projects"><h4 className="proj-text">NCEA Level 1 & 2 & 3 Excellence - Certificate</h4></button>
                        </li>
                        <li>
                            <button className="projects"><h4 className="proj-text">Outstanding Achievement (COMPSCI 101) - Certificate</h4></button>
                        </li>
                        <li>
                            <button className="projects"><h4 className="proj-text">Best Technical Implementation @ Devs Hackathon - Award</h4></button>
                        </li>
                        <li>
                            <button className="projects"><h4 className="proj-text">Prize for NCEA Level 1 Mathematics - Award</h4></button>
                        </li>
                    </ul>
                </div>
                <div className="text-three">
                    <ul className="col-2 mr-[10.5%]">
                        <h2 className="titling">Projects</h2>
                        <br/>
                        <li>
                            <Collapsible label={<h4 className="proj-text">Hack for Happiness Project (News App)</h4>}>
                                <div className="text mt-[-30px]">
                                    <h4>As a part of 'The Simple Team' for Devs Hackathon we had to come up with a solution
                                        for the theme "Hack for Happiness".</h4>
                                    <br/>
                                    <img className="news-image w-[250px] md:w-[450px]" src={newsResult} alt="implementation-result"/>
                                    <br/>
                                    <p>We brainstormed and researched for what make people 'unhappy' to first see what the
                                        issues tended to be. From this after careful consideration we had come up with the
                                        idea of creating a News Web Application where it only displayed positive news about
                                        our current society which we had implemented this by using AWS Comprehend where it
                                        uses a mixture of AI and Machine Learning to measure sentiment in order to filter out
                                        negative news. Our application also displays the current weather conditions with
                                        suggestions on what fascinating activities users could be doing at that time.</p>
                                    <br/>
                                    <img className="news-image w-[250px] md:w-[450px]" src={ourNews} alt="Our-News"/>
                                    <br/>
                                    <p>We had Implemented our web application using Angular framework communicating with
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
                            <Collapsible label={<h4 className="proj-text">Electric Motor Generation (ENGGEN 299)</h4>}>
                            </Collapsible>
                        </li>
                        <li>
                            <Collapsible label={<h4 className="proj-text">Visual Cryptography Project (MATLAB)</h4>}>
                            </Collapsible>
                        </li>
                    </ul>
                </div>
            </div>
    );
}

export default Home;
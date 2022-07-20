import './Home.css';
import emoji from '../../assets/images/Emoji.png';

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
                    <ul className="col">
                        <h2 className="titling">Certifications & Awards</h2>
                        <br/>
                        <li>
                            <button className="projects"><h4>AWS Cloud Practitioner - Certificate</h4></button>
                        </li>
                        <li>
                            <button className="projects"><h4>NCEA Level 1 & 2 & 3 Excellence - Certificate</h4></button>
                        </li>
                        <li>
                            <button className="projects"><h4>Outstanding Achievement (COMPSCI 101) - Certificate</h4></button>
                        </li>
                        <li>
                            <button className="projects"><h4>Best Technical Implementation @ Devs Hackathon - Award</h4></button>
                        </li>
                        <li>
                            <button className="projects"><h4>Prize for NCEA Level 1 Mathematics - Award</h4></button>
                        </li>
                    </ul>
                </div>
                <div className="text-three">
                    <ul className="col">
                        <h2 className="titling">Projects</h2>
                        <br/>
                        <li>
                            <button className="projects"><h4 className="projects-text">Hack for Happiness Project (News App)</h4></button>
                        </li>
                        <li>
                            <button className="projects"><h4 className="projects-text">Visual Cryptography (MATLAB)</h4></button>
                        </li>
                    </ul>
                </div>
            </div>
    );
}

export default Home;
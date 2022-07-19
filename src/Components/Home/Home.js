import './Home.css';
import emoji from '../../assets/images/Emoji.png';

const Home = () => {

    return (
            <div className="home">
                <div className="flex justify-between content-center items-center flex-col-reverse md:flex-row">
                    <div className="text-one max-w-[300px]">
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
                    <h2>Certifications & Awards</h2>
                    <br/>
                    <hr className="indicate"/>
                    <br/>
                    <h4 className="cert-awards">AWS Cloud Practitioner - Certificate</h4>
                    <br/>
                    <hr className="indicate"/>
                    <br/>
                    <h4 className="cert-awards">NCEA Level 1 & 2 & 3 Excellence - Certificate</h4>
                    <br/>
                    <hr className="indicate"/>
                    <br/>
                    <h4 className="cert-awards">Best Technical Implementation @ Devs Hackathon - Award</h4>
                    <br/>
                    <hr className="indicate"/>
                    <br/>
                    <h4 className="cert-awards">Certificate of Outstanding Achievement (COMPSCI 101) - Award</h4>
                    <br/>
                    <hr className="indicate"/>
                    <br/>
                    <h4 className="cert-awards">Prize for NCEA Level 1 Mathematics - Award</h4>
                    <br/>
                    <hr className="indicate"/>
                </div>
                <div className="text-three">
                    <h2>Projects</h2>
                    <br/>
                    <hr className="indicate"/>
                    <br/>
                    <h4 className="cert-awards">Hack for Happiness Project (News App)</h4>
                    <br/>
                    <hr className="indicate"/>
                    <br/>
                    <h4 className="cert-awards">Visual Cryptography (MATLAB)</h4>
                    <br/>
                    <hr className="indicate"/>
                </div>
            </div>
    );
}

export default Home;
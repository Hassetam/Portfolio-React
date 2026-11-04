import Title from "./Title";
import Button from "./Button";
import '../styles/About.css';
import { sectionTitles, buttons } from "../data.js";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa"; // import format for libraries,- same as for js file.

function About(){
    return(
        <section className="about">
            <Title {...sectionTitles.about}/>

            <div className="right-side">
                <div className="profilepic">
                    <img src="../images/profile/pp.png"/>
                </div>
                    
                <div className="socials">
                    <a href="//github.com/Hassetam" target="_blank">
                        <FaGithub size={34}/>
                    </a>
                    <a href="https://www.linkedin.com/in/hasset-maemer-909b4a376/" target="_blank">
                        <FaLinkedin size={34}/>
                    </a>
                    <a href="https://mail.google.com/mail/?view=cm&fs=1&to=adugnahasset@gmail.com" target="_blank">
                        <FaEnvelope size={34}/>
                    </a>
                </div>
            </div>

            <div className="left-side">
                <h3> Curious by nature, <br/> driven by code. </h3>

                <p> I’m a second-year Software Engineering student who genuinely
                    loves what I’m studying. Not because I have to but
                    because writing code feels like a superpower that gets
                    stronger every semester.
                </p>

                <p> I started with Python, discovered web development,
                    and quickly realised I enjoy the full picture:
                    making something look good and making it actually work.
                    That balance between design and logic is where I feel
                    most creative.
                </p>

                <p> I’m not an expert yet, and I’m okay with that.
                    What I am is consistent, curious, and genuinely excited
                    to keep growing. I build things to learn,
                    and I learn things to build better.
                </p>

                <div className="qualities">
                    <Button {...buttons.about.PS} />
                    <Button {...buttons.about.CT} />
                    <Button {...buttons.about.PS} />
                    <Button {...buttons.about.QL} />                   
                </div>
            </div>

        </section>
    );
}

export default About;

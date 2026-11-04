import Title from "./Title";
import Button from "./Button";
import '../styles/Hero.css';
import { sectionTitles, buttons } from "../data.js";

function Hero() {
    return (
        <div className="hero">

            <div className="hero-left">
                <Title {...sectionTitles.hero} />

                <p className="description">
                    I write code, break things, fix them, and learn something
                    new every single day. Currently in my third year,
                    building foundations that will last.
                </p>

            </div>
            
            <div className="hero-right">
            <div className="top-right">
                <div>
                    <h2>2 <sup>nd</sup></h2>
                    <p>Year Student</p>
                </div>

                <div>
                    <h2>9</h2>
                    <p>Technologies</p>
                </div>

                <div>
                    <h2>4+</h2>
                    <p>Projects Built</p>
                </div>
            </div>
                <br/><br/>
                <div className="hero-buttons">
                    <Button {...buttons.hero.project} />
                    <Button {...buttons.hero.contact} />
                </div>
                
            </div>

        </div>
    );
}

export default Hero;
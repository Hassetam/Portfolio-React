import Title from "./Title"; // import format for components
import Button from "./Button";
import '../styles/Hero.css';  // import format for styles, doesn't use the word "from"
import { sectionTitles, buttons } from "../data.js";  // import format for js file, can list multiple item in the curley braces.

function Hero(){
    return(
        <div className="hero">
            <Title {...sectionTitles.hero} />

            <p className="description">
                I write code, break things, fix them, and learn something
                new every single day. Currently in my third year,
                building foundations that will last.
            </p>

            <div>
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

            <Button {...buttons.hero.project} />
            <Button {...buttons.hero.contact} />
            
        </div>
        );
    }

export default Hero;
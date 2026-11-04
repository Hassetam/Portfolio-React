import Title from "./Title";
import Button from "./Button";
import SkillCard from "./SkillCard";
import '../styles/Skills.css';
import { sectionTitles, buttons, skill } from "../data.js"

function Skills(){
    return (
        <section className="skills">
            <Title {...sectionTitles.skills} />

            <br/> <br/>

            <div className="container">
                <SkillCard {...skill.web}/>
                <SkillCard {...skill.programming}/>
                <SkillCard {...skill.data}/>
            </div>

            

        </section>
    )
}

export default Skills;
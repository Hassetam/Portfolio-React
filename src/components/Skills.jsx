import Title from "./Title";
import Button from "./Button";
import SkillCard from "./SkillCard";
import '../styles/Skillcard.css';
import { sectionTitles, buttons, skill } from "../data.js"

function Skills(){
    return (
        <section className="skills">
            <Title {...sectionTitles.skills} />

            <br/> <br/>
            
            <SkillCard {...skill.web}/>
            <SkillCard {...skill.programming}/>
            <SkillCard {...skill.data}/>

        </section>
    )
}

export default Skills;
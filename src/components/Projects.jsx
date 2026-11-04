import ProjectCard from "./ProjectCard";
import Title from "./Title";
import { sectionTitles, projects, buttons } from "../data.js";
import "../styles/Projects.css";

function Projects() {
    return (
        <section className="projects">
            <Title {...sectionTitles.projects} />

            <div className="projects-container">
                <ProjectCard
                    {...projects.things}
                    gitButton={buttons.projects.things.git}
                    demoButton={buttons.projects.things.demo}
                />

                <ProjectCard
                    {...projects.puppy}
                    gitButton={buttons.projects.puppy.git}
                    demoButton={buttons.projects.puppy.demo}
                />

                <ProjectCard
                    {...projects.apple}
                    gitButton={buttons.projects.apple.git}
                    demoButton={buttons.projects.apple.demo}
                />

                <ProjectCard
                    {...projects.gym}
                    gitButton={buttons.projects.gym.git}
                    demoButton={buttons.projects.gym.demo}
                />
            </div>
        </section>
    );
}

export default Projects;
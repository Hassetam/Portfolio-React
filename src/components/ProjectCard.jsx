import Button from "./Button";
import{buttons} from "../data.js";
import "../styles/ProjectCard.css";

function ProjectCard({image, name, desc, gitButton, demoButton}){
    return(
        <section className="card">
            <div>
                <img src={image} alt={name}/>
                <h2> {name} </h2>
                <p> {desc} </p>

                <div>
                    <Button {...gitButton} />
                    <Button {...demoButton} />
                </div>     

            </div>

        </section>
    );
}

export default ProjectCard;
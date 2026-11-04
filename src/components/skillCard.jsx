import '../styles/SkillCard.css';

function SkillCard({ topic, point1, point2, point3 }) {
    return (
        <div className="skill-card">
            <h2>{topic}</h2>
            <br/><br/>

            <h4>{point1.Pt}</h4>
            <p>{point1.Pd}</p>

            <h4>{point2.Pt}</h4>
            <p>{point2.Pd}</p>

            <h4>{point3.Pt}</h4>
            <p>{point3.Pd}</p>
        </div>
    );
}

export default SkillCard;
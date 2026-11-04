import '../styles/Title.css';

function Title({ smallTitle, title }) {
    return (
        <div className="title">
            <h5 className="small-title">
                {smallTitle}
            </h5>

            <h2>
                {title}
            </h2>

            <div className="title-line"></div>
        </div>
    );
}

export default Title;
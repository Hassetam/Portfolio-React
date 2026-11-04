import '../styles/Button.css';

function Button({ buttonText, link }) {
    return (
        <>
            {link ? (
                <a className='btn' href={link}>
                    <h5>{buttonText}</h5>
                </a>
            ) : (
                <button className='btn' disabled>
                    <h5>{buttonText}</h5>
                </button>
            )}
        </>
    );
}

export default Button;
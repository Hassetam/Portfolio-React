function Button({ buttonText, link }) {
    return (
        <>
            {link ? (
                <a href={link}>
                    <h5>{buttonText}</h5>
                </a>
            ) : (
                <button disabled>
                    <h5>{buttonText}</h5>
                </button>
            )}
        </>
    );
}

export default Button;
import '../styles/Navbar.css';

function Navbar() {
return(
    <header>
        <div className="logo">
                HA
        </div>

        <nav id="navbar">

            <ul>
                <li><a href="#hero">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#skills">Skills</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>

        </nav>

    </header>
)
}

export default Navbar;

        
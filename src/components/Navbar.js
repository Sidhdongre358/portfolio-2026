import { FaDownload } from "react-icons/fa";

function Navbar() {
    return (
        <nav className="navbar">
            <h2>Sidarth Dongre</h2>
            <div>
                 
                <a href="/Resume.pdf" download >
                    <FaDownload /> Resume
                </a>
                <a href="#experience">Experience</a>
                <a href="#projects">Projects</a>
                <a href="#skills">Skills</a>
                <a href="#about">About</a>
                <a href="#contact">Contact</a>
            </div>
        </nav>
    );
}

export default Navbar;
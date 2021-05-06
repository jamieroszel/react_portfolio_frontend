import { NONAME } from "node:dns";
import { Link } from "react-router-dom";
import HomeIcon from '@material-ui/icons/Home';

function Header(props) {
    // inline style for the nav tag
    const navStyle = {
        display: "flex",
        justifyContent: "space-around",
        border: "3px solid black",
        padding: "8px",
        width: "90%",
        margin: "auto",
        textDecoration: "none"
    };

    return (
        <header>
            <h1>My Portfolio Page</h1>
            <nav style ={navStyle}>
                <Link to="/">
                    <div>
                    <HomeIcon />    
                    Home</div>
                </Link>
                <Link to="/about">
                    <div>About</div>
                </Link>
                <Link to="/projects">
                    <div>Projects</div>
                </Link>
            </nav>
        </header>
    )
}

export default Header;
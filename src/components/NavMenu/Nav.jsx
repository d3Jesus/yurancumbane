import './navmenu.css'

function Nav() {
    return (
        <nav className="navbar navbar-expand-lg navmenu">
            <div className="container-fluid">
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="/">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" aria-current="page" href="#experiences">Experience</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" aria-current="page" href="#projects">Projects</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" aria-current="page" href="#posts">Writting</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Nav
const React = require('react');

module.exports = function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg  nav-color">
            <div className="container-fluid">
                <a className="navbar-brand" href="/">
                    SOUTH PARK
                </a>

                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <a
                            className="nav-link active nv-color"
                            aria-current="page"
                            href="/episodes"
                            style={{ color: '#1b402a', fontSize: '22px' }}
                        >
                            EPISODES
                        </a>
                        <a
                            className="nav-link active"
                            aria-current="page"
                            href="/characters"
                            style={{ color: '#1b402a', fontSize: '22px' }}
                        >
                            CHARACTERS
                        </a>
                    </div>
                </div>
            </div>
        </nav>

    );
};

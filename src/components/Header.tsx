export default function Header () {
    return (
        <header className="header">
            <a className="brand" href="/" aria-label="User Directory Home">
                <span className="brand-icon">U</span>
                <span>User<span className="brand-accent">Space</span></span>
            </a>

            <div className="header-content">
                <span className="header-badge">
                    <span className="status-dot" />
                    TEAM DIRECTORY
                </span>
                <h1>People make the difference.</h1>
                <p>
                    Discover your people, explore profiles, and find the
                    right connections.
                </p>
            </div>
        </header>

    );
}
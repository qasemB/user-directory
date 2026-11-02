import { Link, NavLink, useLocation } from "react-router-dom";
import { navigationItems } from "../config/navigation";

export default function Header () {
    const { pathname } = useLocation();

    const currentItem =
        navigationItems.find( ( item ) => item.path === pathname ) ??
        navigationItems[ 0 ];

    return (
        <header className="header">
            <div className="header-top">
                <Link className="brand" to="/" aria-label="User Directory Home">
                    <span className="brand-icon">U</span>
                    <span>User<span className="brand-accent">Space</span></span>
                </Link>

                <nav className="main-nav" aria-label="Main navigation">
                    { navigationItems.map( ( item ) => (
                        <NavLink
                            key={ item.path }
                            to={ item.path }
                            end={ item.path === "/" }
                            className="nav-link"
                        >
                            { item.label }
                        </NavLink>
                    ) ) }
                </nav>
            </div>

            <div className="header-content">
                <span className="header-badge">
                    <span className="status-dot" />
                    { currentItem.badge }
                </span>
                <h1>{ currentItem.title }</h1>
                <p>{ currentItem.description }</p>
            </div>
        </header>

    );
}

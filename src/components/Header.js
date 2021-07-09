import React from 'react'
import {Link} from "react-router-dom"
const Header = () => {
    return (
        <header>
            <div className="container">
                    <nav>
                        <ul>
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <Link to="/movies">Movies</Link>
                            </li>
                            <li>
                                <Link to="/tv-shows">TV Shows</Link>
                            </li>
                            <li>
                                <Link to="/login">Login</Link>
                            </li>
                            <li>
                                <Link to="/sign-up">Sign Up</Link>
                            </li>
                        </ul>
                    </nav>
            </div>
        </header>
    )
}

export default Header

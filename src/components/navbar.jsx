import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
    return (
        <nav className="navbar navbar-light bg-light mb-3">
            <Link to="/character">
                <span className="mb-0 h3">Characters</span>
            </Link>
			&nbsp; &nbsp; &nbsp;
            <Link to="/planet">
                <span className="mb-0 h3">Planets</span>
            </Link>
            <div className="ml-auto">
                <Link to="/">
                    <div class="dropdown">
                        <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Favoritos
                        </button>
                        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                            <a class="dropdown-item" href="#">personajes</a>
                            <a class="dropdown-item" href="#">casas</a>
                            <a class="dropdown-item" href="#">Something else here</a>
                        </div>
                    </div>
                </Link>
            </div>
        </nav>
    );
};

export default Navbar;
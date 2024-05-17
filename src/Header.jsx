import { Link } from "react-router-dom"

import { MainNav } from "./Header.js"

const Header = () => {
    return (
        <MainNav>
            <Link to="/">Página Inicial</Link>
            <span> | </span>
            <Link to="/sobre">Sobre</Link>
        </MainNav>
    )
}

export default Header
import { MainNav, RouterLink, LogoNav } from "./Header.js"

import imgLogoNav from "../../assets/images/AAAABUjpyr1ELnx5ihWcKmO9YBWXWFk9o61tQbL-umzerEjugg9NxXP21DQf7mKVQL1PtMOzhlL67KKA5tuJTe55LUapI-zGnPoH_wXP-xEGSKzw.png"

const Header = () => {
    return (
        <MainNav>
            <RouterLink to="/">Página inicial</RouterLink>
            <RouterLink to="/sobre">Sobre</RouterLink>
            <RouterLink to="/wallpapers">Wallpapers</RouterLink>
            <RouterLink to="/" ><LogoNav src={imgLogoNav} /></RouterLink>
            <RouterLink to="/episodios">Episódios</RouterLink>
            <RouterLink to="/personagens">Personagens</RouterLink>
            <RouterLink to="/planetas">Planetas</RouterLink>
        </MainNav>
    )
}

export default Header
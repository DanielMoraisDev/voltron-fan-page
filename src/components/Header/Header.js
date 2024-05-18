import { styled } from "styled-components";
import { Link } from "react-router-dom"

export const MainNav = styled.main`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    height: auto;
    gap: 10px;
    
`
export const RouterLink = styled(Link)`
    color: #ffffff;
    font-weight: bold;
    text-decoration: none;
    &:hover {
        color: #ff3fff;
    }
`

export const LogoNav = styled.img`
    cursor: pointer;
    height: 54px;
    width: 130px;
`
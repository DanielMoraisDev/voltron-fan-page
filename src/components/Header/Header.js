import { styled } from "styled-components";

export const MainNav = styled.nav`
    position: fixed;
    width: 100vw;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    padding: 5px;
    align-items: center;
    height: auto;
    gap: 10px;
    z-index: 99999;
    background-color: #00043f59;
    box-shadow: 0 0 1.5em #00043f59;
`

export const LogoNav = styled.img`
    cursor: pointer;
    height: 54px;
    width: 130px;
    transition: 0.6s;
    &:hover {
        transform: scale(1.05);
    }
`
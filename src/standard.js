import styled, { keyframes } from "styled-components";

import { Link } from "react-router-dom"

export const PrimaryButton = styled.button`
    padding: 12px 15px;
    border: none;
    border-radius: 6px;
    font-weight: bold;
    color: #fff;
    background-color: #f12ff1ff;
    transition: 0.6s;
    &:hover {
        background-color: #ff3fff;
        text-decoration: none;
    }
`

export const AnimatedButton = styled.button`
    padding: 12px 15px;
    border: none;
    border-radius: 6px;
    font-weight: bold;
    color: #fff;
    background-color: #f12ff1ff;
    transition: 0.9s;
    &:hover {
        background-color: #ff3fff;
        filter: drop-shadow(0 0 1.5em #646cff5e);
        text-decoration: none;
    }
`

export const Jumbotron = styled.main`
    position: relative;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 10px;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    z-index: 9999;
    border-radius: 0px 0px 30px 30px;
`

export const CardsContainer = styled.main`
    display: grid;
    align-items: center;
    justify-content: center;
    gap: 20px;
`

export const CardsHero = styled.main`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 10px;
    padding: 10px;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    z-index: 9999;
`

export const SideInformation = styled.div`
    width: 50%;
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 10px;
    z-index: 1;
`

export const SideImage = styled.div`
    width: 50%;
    margin: 15px;
    border-radius: 8px;
    height: 500px;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    box-shadow: 0px 5px 0px 0px #ff3fff;
`

export const RouterLink = styled(Link)`
    color: #ffffff;
    font-weight: bold;
    text-decoration: none;
    &:hover {
        color: #ff3fff;
        text-decoration: none;
    }
`

const animateOutline = keyframes`
    from {
        border-radius: 6px;
        outline: 0px solid #4f9bf965
    }
    to {
        border-radius: 6px;
        outline: 12px solid #4f9bf931
    }
`;

export const AnimatedComponent = styled.div`
    animation: ${animateOutline} 1.2s ease-out infinite;
`;

export const BackgroundJumbotron = styled.div`
    position: absolute;
    background-attachment: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    filter: brightness(60%);
    border-radius: 0px 0px 30px 30px;
    z-index: -1;
`

export const BoldedTitle = styled.h1`
    font-weight: bold;
`

export const Cards = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    padding: 20px;
    border-radius: 8px;
    gap: 15px;
    width: 450px;
    height: 100%;
    background-color: #aaaaaa23;
    cursor: default;
`
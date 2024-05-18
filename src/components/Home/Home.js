import styled from "styled-components";

export const Jumbotron = styled.main`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 10px;
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
    gap: 20px;
`

export const SideImage = styled.div`
    width: 50%;
    height: 500px;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
`
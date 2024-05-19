import styled from "styled-components";

export const CardsEpisodies = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    border-radius: 8px;
    gap: 15px;
    max-width: 400px;
    min-height: 340px;
    padding: 10px;
    height: 100%;
    background-color: #d4c7c723;
    cursor: default;
`

export const ImageEp = styled.img`
    width: 100%;
    height: 45%;
`

export const InformationEp = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    flex-direction: row;
    gap: 10px;
    font-weight: bold;
`;
import { Jumbotron, BackgroundJumbotron, SideInformation, BoldedTitle, CardsContainer } from "../../standard"
import { CardsCharacters, ImageCharacter } from "./Characters"

import backgroundImageVoltron from "../../assets/images/wallpaperflare.com_wallpaper.jpg"

import database from "../../database.json"

const characterDatabase = database.characters

const Characters = () => {
    const loadCharacters = () => {
        return characterDatabase.map((e, i) => {
            return (
                <CardsCharacters style={{ width: "100%" }} key={i}>
                    <ImageCharacter src={e.image}/>
                    <h5 style={{fontWeight: "bold", textAlign: "start"}}>{e.name}</h5>
                    <p>{e.description}</p>
                </CardsCharacters>
            )
        })
    }

    return (
        <>
            <Jumbotron style={{ flexDirection: "column", padding: '10%' }}>
                <BackgroundJumbotron style={{ backgroundImage: `url(${backgroundImageVoltron})` }} />
                <SideInformation>
                    <BoldedTitle style={{ textAlign: "center" }} >Conheça os personagens mais marcantes da série!</BoldedTitle>
                    <p style={{ textAlign: "center" }}>Descubra os episódios mais impactantes de Voltron: O Defensor Lendário e reviva os momentos inesquecíveis desta jornada épica!</p>
                </SideInformation>
            </Jumbotron>
            <CardsContainer style={{ gridTemplateColumns: "auto auto auto", padding: "0 10px" }}>
                {loadCharacters()}
            </CardsContainer>
        </>
    )
}

export default Characters
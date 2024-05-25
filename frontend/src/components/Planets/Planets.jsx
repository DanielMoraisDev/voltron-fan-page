import { Jumbotron, BackgroundJumbotron, SideInformation, BoldedTitle, CardsContainer } from "../../standard"
import { CardsPlanets, ImagePlanets } from "./Planets"

import backgroundImageVoltron from "../../assets/images/973491.png"

import database from "../../database.json"

const planetsDatabase = database.planets

const Planets = () => {
    const loadEpisodies = () => {
        return planetsDatabase.map((e, i) => {
            return (
                <CardsPlanets style={{ width: "100%" }} key={i}>
                    <ImagePlanets src={e.image}/>
                    <h5 style={{fontWeight: "bold", textAlign: "start"}}>{e.name}</h5>
                    <p>{e.description}</p>
                </CardsPlanets>
            )
        })
    }

    return (
        <>
            <Jumbotron style={{ flexDirection: "column", padding: '10%' }}>
                <BackgroundJumbotron style={{ backgroundImage: `url(${backgroundImageVoltron})` }} />
                <SideInformation>
                    <BoldedTitle style={{ textAlign: "center" }} >Visite os principais planetas do universo de voltron</BoldedTitle>
                    <p style={{ textAlign: "center" }}>Viaje pelos planetas-chave de Voltron e descubra mundos vibrantes, repletos de histórias emocionantes e desafios épicos esperando para serem enfrentados.</p>
                </SideInformation>
            </Jumbotron>
            <CardsContainer style={{ gridTemplateColumns: "auto auto auto", padding: "0 10px" }}>
                {loadEpisodies()}
            </CardsContainer>
        </>
    )
}

export default Planets
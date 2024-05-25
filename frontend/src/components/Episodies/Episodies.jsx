import { Jumbotron, BackgroundJumbotron, SideInformation, BoldedTitle, CardsContainer } from "../../standard"
import { CardsEpisodies, InformationEp, ImageEp } from "./Episodies"

import backgroundImageVoltron from "../../assets/images/episodies_voltron.jpg"

import database from "../../database.json"

const episodiesDatabase = database.episodies

const Episodies = () => {
    const loadEpisodies = () => {
        return episodiesDatabase.map((e, i) => {
            return (
                <CardsEpisodies style={{ width: "100%" }} key={i}>
                    <ImageEp src={e.image}/>
                    <h5 style={{fontWeight: "bold", textAlign: "start"}}>{e.titulo}</h5>
                    <p>{e.sinopse}</p>
                    <InformationEp><p>{e.ep}</p><p>{e.temp}</p></InformationEp>
                </CardsEpisodies>
            )
        })
    }

    return (
        <>
            <Jumbotron style={{ flexDirection: "column", padding: '10%' }}>
                <BackgroundJumbotron style={{ backgroundImage: `url(${backgroundImageVoltron})` }} />
                <SideInformation>
                    <BoldedTitle style={{ textAlign: "center" }} >Veja os episódios mais marcantes da série!</BoldedTitle>
                    <p style={{ textAlign: "center" }}>Reviva as emocionantes batalhas espaciais e as revelações de Voltron nos episódios mais marcantes da série!</p>
                </SideInformation>
            </Jumbotron>
            <CardsContainer style={{ gridTemplateColumns: "auto auto auto", padding: "0 10px" }}>
                {loadEpisodies()}
            </CardsContainer>
        </>
    )
}

export default Episodies
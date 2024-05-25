import { Link } from "react-router-dom"

import VideoPlayer from "./scripts/VideoPlayer.jsx"

import { Jumbotron, CardsHero, Cards, CardsContainer, SideInformation, PrimaryButton, RouterLink, AnimatedComponent, BackgroundJumbotron, BoldedTitle } from "../../standard.js"
import { VideoContainer } from "./About.js"

import backgroundImageVoltron from "../../assets/images/wp2644682-voltron-legendary-defender-wallpapers.jpg"

import database from "../../database.json"
const cardsHeroDatabase = database.about.cardsHero
const cardsDatabase = database.about.cards

const About = () => {
    const cardsHeroLoad = () => {
        return cardsHeroDatabase.map((e, i) => {
            if (i % 2 == 0) {
                return (
                    <CardsHero key={i}>
                        <SideInformation>
                            <h1>{e.titulo}</h1>
                            <p>{e.texto}</p>
                        </SideInformation>
                    </CardsHero>
                )
            } else {
                return (
                    <CardsHero key={i}>
                        <SideInformation>
                            <h1>{e.titulo}</h1>
                            <p>{e.texto}</p>
                        </SideInformation>
                    </CardsHero>
                )
            }
        })
    }
    const cardsLoad = () => {
        return cardsDatabase.map((e, i) => {
            return (
                <Cards key={i}>
                        <h1 style={{textAlign: "center"}} >{e.titulo}</h1>
                        <p>{e.texto}</p>
                    <AnimatedComponent><Link to={e.link}><PrimaryButton>{e.buttonText}</PrimaryButton></Link></AnimatedComponent>
                </Cards>
            )
        })
    }

    return (
        <>
            <Jumbotron style={{ flexDirection: "column", padding: '10%'}}>
                <BackgroundJumbotron style={{backgroundImage: `url(${backgroundImageVoltron})`}} />
                <SideInformation>
                    <BoldedTitle style={{textAlign: "center"}} >Conheça sobre o Voltron!</BoldedTitle>
                    <p style={{ textAlign: "center" }}>Descubra o poderoso universo de Voltron e mergulhe em uma jornada épica de coragem e união!</p>
                </SideInformation>
            </Jumbotron>
            <VideoContainer>
                <h2 style={{ fontWeight: "bold" }}>Assista ao trailer:</h2>
                <VideoPlayer />
                <RouterLink style={{ padding: "15px" }} target="_blank" to="https://youtu.be/NXW1waqRCb0?si=S1a2zvStAOOXs8z7">Ver no youtube</RouterLink>
            </VideoContainer>
            {cardsHeroLoad()}
            <CardsContainer style={{ gridTemplateColumns: "auto auto" }}>
                {cardsLoad()}
            </CardsContainer>
        </>
    )
}

export default About
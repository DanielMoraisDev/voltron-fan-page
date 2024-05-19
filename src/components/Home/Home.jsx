import { Link } from "react-router-dom"

import { Jumbotron, CardsHero, SideImage, SideInformation, PrimaryButton, AnimatedComponent, AnimatedButton, BackgroundJumbotron, BoldedTitle } from "../../standard.js"

import backgroundImageVoltron from "../../assets/images/wp2644674-voltron-legendary-defender-wallpapers.jpg"

import database from "../../database.json"
const homeDatabase = database.home

const Home = () => {
    const loadHomeCards = () => {
        return homeDatabase.map((e, i) => {
            if (i % 2 == 0) {
                return (
                    <CardsHero key={i}>
                        <SideInformation style={{ padding: "20px" }}>
                            <BoldedTitle>{e.titulo}</BoldedTitle>
                            <p>{e.texto}</p>
                            <Link to={e.link}><AnimatedButton>{e.buttonText}</AnimatedButton></Link>
                        </SideInformation>
                        <SideImage style={{ backgroundImage: `url(${e.imageSide})` }}>
                        </SideImage>
                    </CardsHero>
                )
            } else {
                return (
                    <CardsHero key={i}>
                        <SideImage style={{ backgroundImage: `url(${e.imageSide})` }}>
                        </SideImage>
                        <SideInformation style={{ padding: "20px" }}>
                            <BoldedTitle>{e.titulo}</BoldedTitle>
                            <p>{e.texto}</p>
                            <Link to={e.link}><AnimatedButton>{e.buttonText}</AnimatedButton></Link>
                        </SideInformation>
                    </CardsHero>
                )
            }
        })
    }
    return (
        <>
            <Jumbotron style={{ flexDirection: "column", padding: '10%'}}>
                <BackgroundJumbotron style={{backgroundImage: `url(${backgroundImageVoltron})`}} />
                <SideInformation>
                    <BoldedTitle style={{textAlign: "center"}} >Conheça sobre o Voltron!</BoldedTitle>
                    <p style={{ textAlign: "center" }}>Descubra o poderoso universo de Voltron e mergulhe em uma jornada épica de coragem e união!</p>
                    <AnimatedComponent><Link to={"/sobre"}><PrimaryButton>Saiba mais</PrimaryButton></Link></AnimatedComponent>
                </SideInformation>
            </Jumbotron>
            {loadHomeCards()}

        </>
    )
}

export default Home
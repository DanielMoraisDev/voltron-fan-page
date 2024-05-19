import { Link } from "react-router-dom"

import { Jumbotron, CardsHero, SideImage, SideInformation, PrimaryButton } from "../../standard.js"

import backgroundImageVoltron from "../../assets/images/wp2644674-voltron-legendary-defender-wallpapers.jpg"
import charactersImageVoltron from "../../assets/images/image.png"
import episodiesImageVoltron from "../../assets/images/wp2401263-keith-and-lance-wallpapers.png"
import planetsImageVoltron from "../../assets/images/wp2644865-voltron-legendary-defender-wallpapers.jpg"
import wallpapersImageVoltron from "../../assets/images/wp2644713-voltron-legendary-defender-wallpapers.jpg"

const Home = () => {
    return (
        <>
            <Jumbotron style={{ flexDirection: "column", backgroundImage: `url(${backgroundImageVoltron})`, padding: '10%' }} >
                <SideInformation>
                    <h1>Conheça sobre o voltron!</h1>
                    <p style={{ textAlign: "center" }}>Descubra o poderoso universo de Voltron e mergulhe em uma jornada épica de coragem e união!</p>
                    <Link to={"/sobre"}><PrimaryButton>Saiba mais</PrimaryButton></Link>
                </SideInformation>
            </Jumbotron>
            <CardsHero>
                <SideInformation>
                    <h1>Conheça sobre os personagens</h1>
                    <p>Embarque em uma jornada para desvendar os segredos e as nuances de cada Paladino e vilão que molda o destino do universo Voltron. Explore suas histórias de origem, habilidades únicas e as complexidades de suas personalidades!</p>
                    <Link to={"/personagens"}><PrimaryButton>Conhecer agora</PrimaryButton></Link>
                </SideInformation>
                <SideImage style={{ backgroundImage: `url(${charactersImageVoltron})` }}>
                </SideImage>
            </CardsHero>
            <CardsHero>
                <SideImage style={{ backgroundImage: `url(${episodiesImageVoltron})` }}>
                </SideImage>
                <SideInformation>
                    <h1>Veja os episódios mais marcantes da série</h1>
                    <p>Prepare-se para uma montanha-russa de emoções enquanto você mergulha nos momentos mais impactantes da série. De confrontos épicos a revelações surpreendentes, cada episódio escolhido promete uma experiência inesquecível!</p>
                    <Link to={"/episodios"}><PrimaryButton>Ver agora</PrimaryButton></Link>
                </SideInformation>
            </CardsHero>
            <CardsHero>
                <SideInformation>
                    <h1>Visite os principais planetas da série</h1>
                    <p>Descubra os planetas mais famosos da série Voltron e mergulhe na emoção da exploração. De Arus, com sua história rica e lendários Leões, até Balto, com seus mistérios e desafios selvagens, cada planeta é uma promessa de aventura e descoberta.</p>
                    <Link to={"/planetas"}><PrimaryButton>Ver agora</PrimaryButton></Link>
                </SideInformation>
                <SideImage style={{ backgroundImage: `url(${planetsImageVoltron})` }}>
                </SideImage>
            </CardsHero>
            <CardsHero>
                <SideImage style={{ backgroundImage: `url(${wallpapersImageVoltron})` }}>
                </SideImage>
                <SideInformation>
                    <h1>Adicione os seus wallpapers favoritos!</h1>
                    <p>Mostre seu amor pela série e exiba sua paixão com os wallpapers exclusivos da nossa galeria! Personalize seu dispositivo com a energia vibrante e mostre ao mundo o quão fã você é. Faça o download dos nossos wallpapers e mergulhe ainda mais fundo no universo de Voltron!</p>
                    <Link to={"/planetas"}><PrimaryButton>Ver agora</PrimaryButton></Link>
                </SideInformation>
            </CardsHero>

        </>
    )
}

export default Home
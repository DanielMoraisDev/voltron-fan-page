import { Link } from "react-router-dom"

import VideoPlayer from "./scripts/VideoPlayer.jsx"

import { Jumbotron, CardsHero, CardsContainer, SideInformation, PrimaryButton } from "../../standard.js"
import { Cards, VideoContainer } from "./About.js"

import backgroundImageVoltron from "../../assets/images/wp2644682-voltron-legendary-defender-wallpapers.jpg"

const About = () => {
    return (
        <>
            <Jumbotron style={{ flexDirection: "column", backgroundImage: `url(${backgroundImageVoltron})`, padding: '10%' }} >
                <SideInformation>
                    <h1>Descubra o mundo de Voltron!</h1>
                    <p style={{ textAlign: "center" }} >Embarque nessa jornada épica e mergulhe no incrível mundo de Voltron! Aqui, a coragem e a união são os pilares de uma aventura repleta de mistérios cósmicos e desafios intergalácticos.</p>
                </SideInformation>
            </Jumbotron>
            <VideoContainer>
                <h2 style={{fontWeight: "bold"}}>Assista ao trailer:</h2>
                <VideoPlayer/>
                <span style={{padding: "15px"}}><Link target="_blank" to="https://youtu.be/NXW1waqRCb0?si=S1a2zvStAOOXs8z7">Ver no youtube</Link></span>
            </VideoContainer>
            <CardsHero>
                <SideInformation>
                    <h1>Voltron: A Continuação de uma Franquia Adorada</h1>
                    <p>Voltron assume o desafio de dar continuidade a uma das franquias mais queridas da cultura pop. Esta série não apenas resgata a essência da original, mas também expande o universo de maneiras surpreendentes. Com uma abordagem ousada e respeitosa, Voltron rejuvenesce a saga, mantendo-se fiel ao legado que a precede. É uma celebração do passado e do futuro, reafirmando o lugar especial que Voltron ocupa nos corações dos fãs, antigos e novos.</p>
                </SideInformation>
            </CardsHero>
            <CardsHero>
                <SideInformation>
                    <h1>Explorando detalhes</h1>
                    <p>Prepare-se para mergulhar nas profundezas do universo de Voltron com esta introdução detalhada à série. Desde os primórdios da história até os momentos épicos de batalha, esta exploração abrangente oferece uma visão holística do mundo de Voltron. Conheça os personagens, compreenda os conflitos e desvende os segredos que moldam essa narrativa intergaláctica. Seja você um fã de longa data ou um novato curioso, esta introdução é o ponto de partida perfeito para uma jornada inesquecível através das estrelas.</p>
                </SideInformation>
            </CardsHero>
            <CardsContainer style={{gridTemplateColumns: "auto auto"}}>
            <Cards>
                <h1>Principais planetas</h1>
                <p>Conheça os destinos intergalácticos que moldam o universo de Voltron. De Arus, o lendário lar dos Leões e da Princesa Allura, a Balto, um mundo selvagem repleto de desafios, cada planeta tem sua própria história e importância na saga.</p>
                <Link to={"/planetas"}><PrimaryButton>Explorar mais</PrimaryButton></Link>
            </Cards>
            <Cards>
                <h1>Principais personagens</h1>
                <p>Descubra os valentes guerreiros que compõem o lendário time de Voltron. Desde Shiro, o líder corajoso, até Hunk, o coração do grupo, cada personagem traz sua própria habilidade e determinação para a batalha contra as forças do mal.</p>
                <Link to={"/personagens"}><PrimaryButton>Conhecer mais</PrimaryButton></Link>
            </Cards>
            </CardsContainer>
        </>
    )
}

export default About
import { Link } from "react-router-dom"

import { Jumbotron, SideImage, SideInformation } from "./Home.js"
import { PrimaryButton } from "../../standard.js"

import backgroundImageVoltron from "../../assets/images/wp2644674-voltron-legendary-defender-wallpapers.jpg"
import charactersImageVoltron from "../../assets/images/image.png"
import episodiesImageVoltron from "../../assets/images/wp2401263-keith-and-lance-wallpapers.png"

const Home = () => {
    return (
        <>
            <Jumbotron style={{ flexDirection: "column", backgroundImage: `url(${backgroundImageVoltron})`, padding: '10%' }} >
                <SideInformation>
                    <h1>Conheça sobre o voltron!</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos a alias nulla autem recusandae praesentium pariatur, illum vero blanditiis repellat? Magnam perferendis minima, alias minus hic mollitia aliquid ullam nostrum.</p>
                    <Link to={"/sobre"}><PrimaryButton>Saiba mais</PrimaryButton></Link>
                </SideInformation>
                
            </Jumbotron>
            <Jumbotron style={{ padding: '10px' }}>
                <SideInformation>
                    <h1>Conheça sobre os personagens</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos a alias nulla autem recusandae praesentium pariatur, illum vero blanditiis repellat? Magnam perferendis minima, alias minus hic mollitia aliquid ullam nostrum.</p>
                    <Link to={"/personagens"}><PrimaryButton>Conhecer agora</PrimaryButton></Link>
                </SideInformation>
                <SideImage style={{ backgroundImage: `url(${charactersImageVoltron})` }}>
                </SideImage>
            </Jumbotron>
            <Jumbotron style={{ padding: '10px' }}>
                <SideImage style={{ backgroundImage: `url(${episodiesImageVoltron})` }}>
                </SideImage>
                <SideInformation>
                    <h1>Veja os episódios mais marcantes da série</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos a alias nulla autem recusandae praesentium pariatur, illum vero blanditiis repellat? Magnam perferendis minima, alias minus hic mollitia aliquid ullam nostrum.</p>
                    <Link to={"/episodios"}><PrimaryButton>Ver agora</PrimaryButton></Link>
                </SideInformation>
            </Jumbotron>

        </>
    )
}

export default Home
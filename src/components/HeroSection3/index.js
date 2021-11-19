import React, {useState} from 'react';
import Video from '../../videos/video4.mp4';
import {
    HeroContainer,
    HeroBg,
    VideoBg,
    HeroContent,
    HeroH1,
} from './HeroElements';

import avatar_farid from '../../images/avatar_farid.png'
import avatar_scout from '../../images/avatar_scout.png'
import Member from "./Member";
import styled from "styled-components";


const members = [
    {
        "image": avatar_farid,
        "name": "ARIYA",
        "role": "Operations",
        "description": "Ariya co-founded Axenic, helping some of the biggest brands with their products, marketing, and blockchain tech. His eclectic skills and silicon valley roots bring a unique perspective in disrupting markets.",
        "twitter_handle": "@ariyabehjat",
        "twitter_url": "https://twitter.com/ariyabehjat"
    },
    {
        "image": avatar_scout,
        "name": "Collie",
        "role": "Dev/UX-UI/Solidity",
        "description": "Collie is a digital artist who has animated & created content for the World Series of Poker, Playtika, Hustler, Casesars` Palace, & more. He now ocdes & creates crypto art in his studio in the mountains of Colorado.",
        "twitter_handle": "@southern_expat",
        "twitter_url": "https://twitter.com/southern_expat"
    },
    {
        "image": avatar_farid,
        "name": "FARID",
        "role": "Mental Health Expert",
        "description": "Dr. Farid is a Clinical Psychologist and host of \"In Session,\" where he covers topics relevant to psychology and mental health. He brings awareness and helps promote a culture of understanding and knowledge.",
        "twitter_handle": "@",
        "twitter_url": ""
    },
    {
        "image": avatar_scout,
        "name": "JAZZ",
        "role": "Metwork Manager",
        "description": "Jazz has been at the leading edge of culture since childhood. In 2014, het founded NextAge Label. featured in Resident Advisor, XLR8R, THe Fader, Tabs Out, & more. COO of family-owned boutique file & production studio Cream Cheese Films",
        "twitter_handle": "@jazzcallner",
        "twitter_url": "https://twitter.com/jazzcallner"
    },
    {
        "image": avatar_farid,
        "name": "Jurriaan",
        "role": "Project Manager",
        "description": "Jurriaan founded BLEND\BUREAUX, a creative network agency for brands like CHANEL, Puma, Reebok, G-STAR, Levi's, Maison Margiela, Bacardi, Warsteiner, Sony Playstation, Warhol Foundation & many more.",
        "twitter_handle": "@jurriaan_bakker",
        "twitter_url": "https://twitter.com/jurriaan_bakker"
    },
    {
        "image": avatar_scout,
        "name": "Lamsing",
        "role": "Community Manager",
        "description": "Lamsing is a Crypto manic who went rogue, NFT Addict, product builder, Spends all his fiat on NFT's, ex-Martial arts sensei, Passionate about NFT's, Crypto & Art! #NFTs4aBetterWorld",
        "twitter_handle": "@lamsingcap",
        "twitter_url": "https://twitter.com/Lamsingcap"
    },
    {
        "image": avatar_scout,
        "name": "Scout",
        "role": "Community Developer",
        "description": "Being a multifaceted community socialite, Scout has worked with about 10 NFT community projects within the last quarter. Scout has helped amplify NFT brands through empowering scalability and community values.",
        "twitter_handle": "@",
        "twitter_url": "https://twitter.com/scoutapp"
    },
    {
        "image": avatar_scout,
        "name": "VRDLOKO",
        "role": "Community Leader",
        "description": "'Crazy Earthlingz! Enthousiast to unite and connect with every atom of the Crypto & NFT Universe. Started hist passion with Crypto & got addicted to NFTs to spread love ad unity.",
        "twitter_handle": "@vrdloko",
        "twitter_url": "https://twitter.com/VRDLOKO"
    },
]

const Members = styled.div`
      display: grid; 
      grid-template-columns: repeat(2, 1fr); 
      grid-template-rows: repeat(3, 1fr); 
      grid-column-gap: 60px;
      grid-row-gap: 60px; 
      margin-top: 60px;
  
    @media screen and (max-width: 1070px) {
        //max-width: 100%;
        grid-template-columns: 1fr; 
        grid-template-rows: repeat(3, 1fr); 
    }  
`

const HeroSection = () => {
    const [hover, setHover] = useState(false);

    const onHover = () => {
        setHover(!hover);
    };
    return (
        <HeroContainer id='home'>
            <HeroBg>
                <VideoBg playsInline autoPlay loop muted src={Video} type='video/mp4'/>
            </HeroBg>
            <HeroContent>
                <HeroH1>AstroMojis Comrades</HeroH1>
                <Members>
                    {members.map(item => <Member member={item}/>)}
                </Members>
            </HeroContent>
        </HeroContainer>
    );
}

export default HeroSection;

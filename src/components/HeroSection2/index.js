import React, {useState} from 'react';
import {
    HeroContainer,
    HeroContent,
    TopLine, Image,
} from './HeroElements';
import ship from './SPACE-SHIP-MAIN-web.png'; // with import
import Roadmap from './Roadmap'

function HeroSection() {
    return (
        <HeroContainer id='home'>
            <HeroContent>
                <img src={ship} width="100%"/>
                <TopLine>The Mission</TopLine>
                <Roadmap/>
            </HeroContent>
        </HeroContainer>
    );
}

export default HeroSection;

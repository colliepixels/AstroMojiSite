import React, {useState} from 'react';
import Video from '../../videos/video4.mp4';
import {
    HeroContainer,
    HeroBg,
    VideoBg,
    HeroContent,
    TopLine, Image,
} from './HeroElements';
import ship from './SPACE-SHIP-MAIN-web.png'; // with import
import map from './vertical-roadmap.png';
import roadmap from '../../images/roadmap.png';

function HeroSection() {
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
                <img src={ship} width="100%"/>
                <TopLine>The Mission</TopLine>
                <Image src={roadmap} />
            </HeroContent>
        </HeroContainer>
    );
}

export default HeroSection;

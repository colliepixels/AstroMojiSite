import React, {useState} from 'react';
import Video from '../../videos/video.mp4';
import {
    HeroContainer,
    HeroBg,
    VideoBg,
    HeroContent,
    Image,
    Title,
    Subtitle,
    Body,
} from './HeroElements';

import frame from './frame-web2.gif'; // with import

function HeroSection() {
    const [hover, setHover] = useState(false)

    const onHover = () => setHover(!hover)

    return (
        <HeroContainer id='home'>
            <HeroBg>
                <VideoBg playsInline autoPlay loop muted src={Video} type='video/mp4' fluid/>
            </HeroBg>
            <HeroContent>
                <Image src={frame} />
                <Title>11,111 NFT Collection</Title>
                <Subtitle>Crafted by Marwan Shahin</Subtitle>
                <Body>
                    Humankind has explored the furthest depths of outer space. <span>Now</span>,
                    a courageous collection of explorers, the Astromojis, have gathered to explore
                    the final frontier. Become an Astromoji and take the journey through the depths
                    of inner space, as we endeavor to create inner peace.
                </Body>
            </HeroContent>
        </HeroContainer>

    )
}

export default HeroSection

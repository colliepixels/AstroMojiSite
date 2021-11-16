import React, { useState } from 'react';
import Video from '../../videos/video4.mp4';
import {
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroContent,
  HeroH1,
} from './HeroElements';
import ship from './SPACE-SHIP-MAIN-web.png'; // with import
import map from './vertical-roadmap.png'; // with import

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
      <img src={ship} width="100%" class="img-responsive"/>
        <br></br>
        <br></br>
        <br></br>
        <HeroH1>Where we're going, there are no roads.</HeroH1>
        <br></br>
        <br></br>
        <br></br>
        <img src={map} width="50%" class="img-responsive"/>
      </HeroContent>
    </HeroContainer>
  );
}

export default HeroSection;

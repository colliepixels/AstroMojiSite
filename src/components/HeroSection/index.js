import React, { useState } from 'react';
import Video from '../../videos/video.mp4';
import {
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroContent,
  HeroH1,
  HeroH2,
  HeroP,
} from './HeroElements';

import frame from './frame-web2.gif'; // with import

function HeroSection() {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };
  return (
    <HeroContainer id='home'>
      <HeroBg>
        <VideoBg playsInline autoPlay loop muted src={Video} type='video/mp4'  fluid />
      </HeroBg>
      <HeroContent>
      <img src={frame} width="60%" class="img-responsive"/>
        <HeroH1>11,111 NFT Collection</HeroH1>
        <HeroP>
          Crafted by Marwan Shahin
        </HeroP>
        <HeroP>
          Launching soon...
        </HeroP>
        <br></br>
        <br></br>
        <div></div>
        <HeroH2>
        Realize deeply that the present moment is all we have. Making the <span>NOW</span> the primary
        focus of our lives. If you get the inside right, the outside will fall into place.
        Primary reality is within; secondary reality without.
      </HeroH2>
      </HeroContent>
    </HeroContainer>

  );
}

export default HeroSection;

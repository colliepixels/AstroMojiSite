import React, { useState } from 'react';
import Video from '../../videos/video4.mp4';
import {
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroContent,
  HeroH1,
} from './HeroElements';

import bio1 from '../../images/Jurriaan-team-bio.png';
import bio2 from '../../images/Ariya-team-bio.png';
import bio3 from '../../images/Collie-team-bio.png'; 
import bio4 from '../../images/Puji-team-bio.png';
import bio5 from '../../images/Lamsing-team-bio.png';
import bio6 from '../../images/VRDLoko-team-bio.png';
import bio7 from '../../images/Jazz-team-bio.png';


function HeroSection() {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };
  return (
    <HeroContainer id='home'>
      <HeroBg>
        <VideoBg playsInline autoPlay loop muted src={Video} type='video/mp4' />
      </HeroBg>
      <HeroContent>
      <HeroH1>AstroMoji Team</HeroH1>
        <a href="https://twitter.com/jurriaan_bakker"><img src={bio1} width="100%"/></a>
        <a href="https://twitter.com/ariyabehjat"><img src={bio2} width="100%"/></a>
        <a href="https://twitter.com/southern_expat"><img src={bio3} width="100%"/></a>
        <a href="https://twitter.com/PujiPup"><img src={bio4} width="100%"/></a>
        <a href="https://twitter.com/Lamsingcap"><img src={bio5} width="100%"/></a>
        <a href="https://twitter.com/VRDLOKO"><img src={bio6} width="100%"/></a>
        <a href="https://twitter.com/jazzcallner"><img src={bio7} width="100%"/></a> 
        <br></br>
        <br></br>
        <br></br>
        <div></div>
      </HeroContent>
    </HeroContainer>
  );
}

export default HeroSection;

import styled from 'styled-components';
import {MdKeyboardArrowRight, MdArrowForward} from 'react-icons/md';

export const HeroContainer = styled.div`
  background: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 100px 30px 280px;
  position: relative;
  z-index: 1;
    
  @media screen and (max-width: 768px) {
    padding: 100px 6px 100px;
  }
  
  :before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: -webkit-gradient(
        linear,
        left top,
        left bottom,
        from(rgba(0, 0, 0, 0.2)),
        to(rgba(0, 0, 0, 0.2))
      ),
    
  }
`;

export const HeroBg = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
`

export const VideoBg = styled.video`
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
  background: #232a34;
  position: absolute;
  
`;

export const HeroContent = styled.div`
    z-index: 3;
    max-width: 1200px;
    display: flex;
    flex-direction: column;
    align-items: center;
  
    @media screen and (max-width: 768px) {
        padding: 0px 36px;
    }
`;

export const Image = styled.img`
    width: 50%;
    @media screen and (max-width: 768px) {
        width: 80%;
    }
`

export const Title = styled.h1`
    color: #fff;
    font-size: 48px;
    text-align: center;
    margin-top: 24px;

    @media screen and (max-width: 768px) {
        font-size: 42px;
    }

    @media screen and (max-width: 480px) {
        font-size: 36px;
        line-height: 1.2;
    }
`;

export const Subtitle = styled.span`
  margin-top: 18px;
  color: #fff;
  font-size: 22px;
  text-align: center;
  max-width: 800px;
  font-family: Helvetica, sans-serif;

  @media screen and (max-width: 768px) {
    font-size: 18px;
  }

  @media screen and (max-width: 480px) {
    font-size: 16px;
  }
  
  a {
    color: #fff;
  }
`;

export const Body = styled.p`
    margin-top: 48px;
    max-width: 80%;
    text-align: justify;
    text-justify: auto;
    color: #fff;
    font-size: 24px;

    @media screen and (max-width: 768px) {
        font-size: 18px;
        text-align: center;
        max-width: 100%;
    }
`;

export const HeroBtnWrapper = styled.div`
  margin-top: 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
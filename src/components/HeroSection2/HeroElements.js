import styled from 'styled-components';
import { MdKeyboardArrowRight, MdArrowForward } from 'react-icons/md';
import stars from '../../images/stars.png'
import avatar_collie from '../../images/avatar_collie.jpg'

export const HeroContainer = styled.div`
background: url(${stars}) repeat #000;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 10px 100px;
  position: relative;
  z-index: 1;

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
      @media (max-width: 768px) {
        height: 00px;
      }
  }
  
  @media screen and (max-width: 768px) {
    padding: 0 10px 60px;
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
`;

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
  max-height: 100%;
  padding: 60px 0 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  
  @media screen and (max-width: 768px) {
    padding: 50px 0;
  }
`;

export const TopLine = styled.div`
  color: #ffd800;
  font-size: 16px;
  line-height: 16px;
  font-weight: 700;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  padding: 120px 0 42px;
`;

export const HeroH1 = styled.h1`
  color: #fff;
  font-size: 46px;
  text-align: center;

  @media screen and (max-width: 768px) {
    font-size: 40px;
  }

  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`;

export const HeroBtnWrapper = styled.div`
  margin-top: 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Image = styled.img`
  width: 75%;
  height: auto;
  
  @media screen and (max-width: 768px) {
    width: 85%;
  }  
  
  @media screen and (max-width: 480px) {
    width: 100%;
  }
`
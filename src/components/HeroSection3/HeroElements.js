import styled from 'styled-components';
import { MdKeyboardArrowRight, MdArrowForward } from 'react-icons/md';

export const HeroContainer = styled.div`
  background: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
  height: 100%;
  position: relative;
  z-index: 1;

  padding: 0 0 200px;
  position: relative;
  z-index: 1;
    
  @media screen and (max-width: 768px) {
    padding: 0 36px 100px;
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
  max-width: 1400px;
  padding: 0px 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  
    @media screen and (max-width: 768px) {
        padding: 0 0;
    }
`;

export const HeroH1 = styled.h1`
  color: #fff;
  font-size: 48px;
  text-align: center;

  @media screen and (max-width: 768px) {
    font-size: 40px;
  }

  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`;

export const TopLine = styled.div`
  color: #ffd800;
  font-size: 16px;
  line-height: 16px;
  font-weight: 700;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  margin-bottom: 16px;
`;

export const HeroBtnWrapper = styled.div`
  margin-top: 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Members = styled.div`
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
import React from 'react';
import {
  InfoContainer,
  InfoWrapper,
  InfoRow,
  Column1,
  Column2,
  TextWrapper,
  TopLine,
  Heading,
  Body,
  ImgWrap,
  Img,
} from './InfoElements';
import mural from '../../images/marwan.gif'; // with import

const InfoSection = ({
  lightBg,
  imgStart,
  topLine,
  lightText,
  headline,
  description,
  img,
  img7,
  img8,
  img9,
  alt,
  id,
  primary,
  darkText,
}) => {
  console.log(primary);
  return (
    <>
      <InfoContainer lightBg={lightBg} id={id}>
        <InfoWrapper>
          <InfoRow imgStart={imgStart}>
            <Column1>
              <TextWrapper>  
                <TopLine>{topLine}</TopLine>
                <Heading lightText={lightText}>{headline}</Heading>
                <Body darkText={darkText}>{description}</Body>
                <ImgWrap>
                  <div><Img src={img7} alt={alt}/></div>
                  <div><Img src={img8} alt={alt}/></div>
                  <div><Img src={img9} alt={alt}/></div>
                </ImgWrap>
              </TextWrapper> 
            </Column1>
            <Column2>
              <ImgWrap>
              <Img src={mural} width="100%" class="img-responsive"/>
              </ImgWrap>
            </Column2>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    </>
  );
};

export default InfoSection;

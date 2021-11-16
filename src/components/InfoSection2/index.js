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
  Subtitle,
  ImgWrap,
  Img
} from './InfoElements';
import mural from '../../images/Marwan-Mural.gif'; // with import

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
                <Subtitle darkText={darkText}>{description}</Subtitle>
                <ImgWrap>
              <a href="https://arabic.cnn.com/style/article/2018/08/15/egypt-marwan-shahin"><Img src={img7} alt={alt}/></a>
              <a href="https://designmuseum.org/exhibitions/hope-to-nope-graphics-and-politics-2008-18/qa-with-marwan-shahin#"><Img src={img8} alt={alt}/></a>
              <a href="https://www.egypttoday.com/Article/4/3074/Artist-Of-The-Month-Marwan-Shahin"><Img src={img9} alt={alt}/></a>
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

import styled from 'styled-components';
import cnn from "../../images/logo-cnn.png";
import React from "react";

export const InfoContainer = styled.div`
    color: #fff;
    background: ${({lightBg}) => (lightBg ? '#f9f9f9' : '#000000')};  
    padding: 0 0 200px;

    @media screen and (max-width: 1200px) {
        padding: 0 60px 100px;
    }
    
    @media screen and (max-width: 768px) {
        padding: 0 36px 100px;
    }
`;

export const InfoWrapper = styled.div`
    display: grid;
    z-index: ;
    width: 100%;
    max-width: 1070px;
    margin-right: auto;
    margin-left: auto;
    padding: 0;
    justify-content: center;
`;

export const InfoRow = styled.div`
  display: grid;
  grid-auto-columns: minmax(auto, 1fr);
  align-items: flex-start;
  grid-template-areas: ${({imgStart}) =>
    imgStart ? "'col2 col1'" : "'col1 col2'"};
  /* Must use '\' css class \'' */

  @media screen and (max-width: 868px) {
    grid-template-areas: ${({imgStart}) =>
    imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`};
  }
`;

export const Column1 = styled.div`
  margin: 0;
  padding: 0;
  grid-area: col1; 
`;

export const Column2 = styled.div`
  margin-bottom: 15px;
  padding: 0 60px 0 0;
  grid-area: col2;
  
    @media screen and (max-width: 868px) {
    padding: 0;
  }
  
  @media screen and (max-width: 768px) {
    margin: 0 0 0 0;
  }  
`;

export const TextWrapper = styled.div`
  max-width: 540px;
  padding-top: 0;
  
  @media screen and (max-width: 868px) {
    max-width: 100%;
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

export const Heading = styled.h1`
  margin-bottom: 24px;
  font-size: 2rem;
  line-height: 1.1;
  font-weight: 600;
  color: ${({lightText}) => (lightText ? '#f7f8fa' : '#000000')};
  hyphens: auto;
  
  @media screen and (max-width: 480px) {
    font-size: 1.75rem;
  }
`;

export const Body = styled.p`
  width: 100%;
  margin-bottom: 35px;
  font-size: 1rem;
  line-height: 2rem;
  color: ${({darkText}) => (darkText ? '#000000' : '#fff')};
  font-family: Helvetica, sans-serif;
  white-space: pre-wrap;
`;


export const ImgWrap = styled.div`
    display: flex;
    justify-content: space-between;
    
    @media screen and (max-width: 480px) {
        margin-top: 36px;
    }
`;

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`

export const Img = styled.img`
    flex: 1 1 auto;
    max-width:100%;
    
    &.partner {
        max-width: 80%;
    }
`;

export const Link = styled.a`
    display: flex;
    align-items: center;
    justify-content: center;
    
    img:hover {
        transform: scale(1.1);
        transition: all 0.2s ease-out;
    }
`

export const PartnerContainer = styled.div`
    display: grid; 
    grid-template-columns: repeat(4, 1fr); 
    grid-template-rows: repeat(2, 1fr); 
    grid-column-gap: 0px;
    grid-row-gap: 0px; 
`

export const PartnerLink = ({logo, url, alt}) =>
    <Container>
        {url !== ''
            ? <Link href={url} target="_blank" rel="noopener noreferrer">
                <Img className="partner" width={'80%'} src={logo} alt={alt}/>
            </Link> : <Img className="partner" width={'80%'} src={logo} alt={alt}/>}
    </Container>

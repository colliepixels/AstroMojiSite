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
    PartnerLink,
    PartnerContainer
} from './InfoElements';
import mural from '../../images/marwan.gif'; // with import
import cnn from '../../images/logo-cnn.png';
import nyt from '../../images/logo-nyt.png';
import tdm from '../../images/logo-tdm.png';
import paddle from '../../images/logo-paddle.png';
import dazed from '../../images/logo-dazed.png';
import virgin from '../../images/logo-virgin.png';
import obey from '../../images/logo-obey.png';
import egypt from '../../images/logo-egypt.png';

const partners = [
    {
        "logo": cnn,
        "url": "https://www.cnn.com/",
        "alt": "CNN"
    },
    {
        "logo": nyt,
        "url": "https://www.nytimes.com/",
        "alt": "NYT"
    },
    {
        "logo": tdm,
        "url": "https://designmuseum.org",
        "alt": "TDM"
    },
    {
        "logo": paddle,
        "url": "https://www.paddle8.com/",
        "alt": "Paddle"
    },
    {
        "logo": dazed,
        "url": "https://www.dazeddigital.com",
        "alt": "Dazed"
    },
    {
        "logo": virgin,
        "url": "https://www.virginmedia.com/",
        "alt": "Virgin Media"
    },
    {
        "logo": obey,
        "url": "https://obeyclothing.com",
        "alt": "Obey"
    },
    {
        "logo": egypt,
        "url": "https://www.egypttoday.com",
        "alt": "Egypt"
    }
]

const InfoSection = ({
                         lightBg,
                         imgStart,
                         topLine,
                         lightText,
                         headline,
                         description,
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
                                <PartnerContainer>
                                    {partners.map((partner, index) => (
                                        <PartnerLink {...partner} key={index}/>
                                    ))}
                                </PartnerContainer>
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

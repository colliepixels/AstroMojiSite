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
        "url": "https://arabic.cnn.com/style/article/2018/08/15/egypt-marwan-shahin",
        "alt": "CNN"
    },
    {
        "logo": nyt,
        "url": "",
        "alt": "NYT"
    },
    {
        "logo": tdm,
        "url": "https://designmuseum.org/exhibitions/hope-to-nope-graphics-and-politics-2008-18/qa-with-marwan-shahin#",
        "alt": "TDM"
    },
    {
        "logo": paddle,
        "url": "https://milled.com/paddle8/express-yourself-with-national-coalition-against-censorship-and-boys-9E8kzPeanJ04pdRZ",
        "alt": "Paddle"
    },
    {
        "logo": dazed,
        "url": "https://www.dazeddigital.com/photography/article/23704/1/egypt-seizes-graffiti-book-for-inciting-revolution",
        "alt": "Dazed"
    },
    {
        "logo": virgin,
        "url": "",
        "alt": "Virgin Media"
    },
    {
        "logo": obey,
        "url": "https://graziamagazine.com/me/articles/increase-the-peace-inside-shepard-faireys-first-visit-to-the-middle-east/",
        "alt": "Obey"
    },
    {
        "logo": egypt,
        "url": "https://www.egypttoday.com/Article/4/3074/Artist-Of-The-Month-Marwan-Shahin",
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

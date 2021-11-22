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
    Img,
    FootNote
} from './InfoElements3';


const InfoSection3 = ({
                          lightBg,
                          imgStart,
                          topLine,
                          lightText,
                          headline,
                          img,
                          alt,
                          id,
                          primary,
                      }) => {
    console.log(primary);
    return (
        <>
            <InfoContainer lightBg={lightBg} id={id}>
                <InfoWrapper>
                    <InfoRow imgStart={imgStart}>
                        <Column1>
                            <TextWrapper>
                                <TopLine>{topLine}Full transparency</TopLine>

                                <Heading lightText={lightText}>{headline}From Mission Control</Heading>
                                <Subtitle>
                                    <ul>
                                        <li>ERC-721 tokens : Ethereum blockchain</li>
                                        <li>Profile-view AstroMojis</li>
                                        <li>Fair launch pricing</li>
                                        <li>Doxed & vetted Team</li>
                                        <li>A white-hat NFT project</li>
                                        <li>111 AstroMojis reserved for promos</li>
                                        <li>8 Attributes, each with many traits</li>
                                        <li>Community driven roadmap</li>
                                    </ul>
                                </Subtitle>
                            </TextWrapper>

                        </Column1>
                        <Column2>
                            <ImgWrap>
                                <Img src={img} alt={alt}/>
                            </ImgWrap>
                        </Column2>
                    </InfoRow>
                  <FootNote>
                      AstroMojis realize that the present moment is all we have. Making “the now” the primary focus of
                      our lives. If we get the inside right, the outside will fall into place.
                        <br/><br/>
                      Primary reality starts within and Secondary reality follows.
                  </FootNote>
                </InfoWrapper>
            </InfoContainer>
        </>
    );
};

export default InfoSection3;

import React from 'react';
import {
  FaInstagram,
  FaDiscord,
  FaTwitter,
} from 'react-icons/fa';
import { animateScroll as scroll } from 'react-scroll';
import {
  FooterContainer,
  FooterWrap,
  FooterLinksContainer,
  FooterLinksWrapper,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  WebsiteRights,
  SocialIcons,
  SocialIconLink
} from './FooterElements';
import bannerlogo from './Banner-Logo-for-web.png'; // with import


const Footer = () => {
  const toggleHome = () => {
    scroll.scrollToTop();
  };
  return (
    <FooterContainer>
      <FooterWrap>
        <FooterLinksContainer>
          <FooterLinksWrapper>
          </FooterLinksWrapper>
        </FooterLinksContainer>
        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo to='/' onClick={toggleHome}>
            <img src={bannerlogo} alt={'AstroMoji'} />
            </SocialLogo>
            <WebsiteRights>AstroMojis🚀 © 2021 All rights reserved.</WebsiteRights>
            <SocialIcons>
              
              <SocialIconLink href='https://www.instagram.com/astro.mojis/' target='_blank' aria-label='Instagram'>
                <FaInstagram />
              </SocialIconLink>
             
              <SocialIconLink
                target='_blank'
                aria-label='Twitter'
                href='//www.twitter.com/astromojis'
              >
                <FaTwitter />
              </SocialIconLink>
              <SocialIconLink href='https://discord.gg/ugnYPKrcmM' target='_blank' aria-label='Discord'>
                <FaDiscord />
              </SocialIconLink>
            </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  );
};

export default Footer;

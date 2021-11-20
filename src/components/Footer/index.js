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
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  WebsiteRights,
  SocialIcons,
  SocialIconLink,
  TermsLink,
  LinkWrapper
} from './FooterElements';
import bannerlogo from './Banner-Logo-for-web.png'; // with import
import discord from '../../images/discord.png';


const Footer = () => {
  const toggleHome = () => {
    scroll.scrollToTop();
  };
  return (
    <FooterContainer>
      <FooterWrap>
        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo to='/' onClick={toggleHome}>
              <img src={bannerlogo} alt={'AstroMoji'} />
            </SocialLogo>
            <LinkWrapper>
              <WebsiteRights>AstroMojis🚀 © 2021 All rights reserved.</WebsiteRights>
              <TermsLink href="/terms.pdf" rel="noreferrer noopener" target="_blank">Terms of Service</TermsLink>
            </LinkWrapper>
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
              <SocialIconLink
                  href='https://discord.gg/ugnYPKrcmM'
                  target='_blank'
                  aria-label='Discord'
                  style={{marginTop: "4px"}}
              >
                <img src={discord} width="26px"/>
              </SocialIconLink>
            </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  );
};

export default Footer;

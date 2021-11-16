import React, { useState, useEffect } from 'react';
import { IconContext } from 'react-icons/lib';
import { animateScroll as scroll } from 'react-scroll';
import {
  Nav,
  NavbarContainer,
  NavLogo,
} from './NavbarElements';

import { FaInstagram, FaTwitter, FaDiscord } from "react-icons/fa";

import {
  SocialMedia,
  SocialMediaWrap,
  SocialIcons,
  SocialIconLink,
} from "./FooterElements";
import bannerlogo from './Banner-Logo-for-web.png'; // with import

const Navbar = ({ toggle }) => {
  const [scrollNav, setScrollNav] = useState(false);

  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNav);
  }, []);

  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <Nav scrollNav={scrollNav}>
          <NavbarContainer>
            <NavLogo onClick={toggleHome} to="/"><img src={bannerlogo} width="100%" alt={'AstroMoji'}/></NavLogo>
            <SocialMedia>
              <SocialMediaWrap>
                <SocialIcons>
                  <SocialIconLink
                    target="_blank"
                    aria-label="Twitter"
                    href="https://www.twitter.com/Astromojis"
                  >
                    <FaTwitter />
                  </SocialIconLink>

                  <SocialIconLink
                    href="https://www.instagram.com/astro.mojis/"
                    target="_blank"
                    aria-label="Instagram"
                  >
                    <FaInstagram />
                  </SocialIconLink>
                  <SocialIconLink
                    href="https://discord.gg/ugnYPKrcmM"
                    target="_blank"
                    aria-label="Discord"
                  >
                    <FaDiscord />
                  </SocialIconLink>
                </SocialIcons>
              </SocialMediaWrap>
            </SocialMedia>
          </NavbarContainer>
        </Nav>
      </IconContext.Provider>
    </>
  );
};

export default Navbar;

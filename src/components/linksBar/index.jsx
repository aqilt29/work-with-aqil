import React from 'react';
import { StyledLink, IconWrapper, LinkBox, LinksBarContainer, LinkText } from './styles';
import EthSvg from '../../images/ethShell.svg'
import styled from 'styled-components';

const linkNames = ['Reading', 'Cool Stuff', 'Projects'];

const LinkItem = ({name}) => {
  return (
    <StyledLink
      to={`/${name.toLowerCase().replace(/ /g, '')}`}
    >
      <LinkBox>
        <LinkText>{name}</LinkText>
        <IconWrapper>
          <EthSvg />
        </IconWrapper>
      </LinkBox>
    </StyledLink>
  )
}

const MobileSocialsLinksContainer = styled(LinkBox)`
  position: relative;
  
`;

const MobileSocialsLinks = () => {

  return (
    <MobileSocialsLinksContainer>
      <IconWrapper>
        <EthSvg />
      </IconWrapper>
      <IconWrapper>
        <EthSvg />
      </IconWrapper>
      <IconWrapper>
        <EthSvg />
      </IconWrapper>
      <IconWrapper>
        <EthSvg />
      </IconWrapper>
    </MobileSocialsLinksContainer>
  )
};


export const LinksBar = () => {
  return (
    <>
      <LinksBarContainer>
        {
          linkNames.map((name, idx) => <LinkItem name={name} key={`${idx}`}/>)
        }
      <MobileSocialsLinks />
      </LinksBarContainer>
    </>
  )
}
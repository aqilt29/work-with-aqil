import React from 'react';
import { StyledLink, IconWrapper, LinkBox, LinksBarContainer, LinkText } from './styles';
import EthSvg from '../../images/ethShell.svg'

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

export const LinksBar = () => {
  return (
    <LinksBarContainer>
      {
        linkNames.map((name, idx) => <LinkItem name={name} key={`${idx}`}/>)
      }
    </LinksBarContainer>
  )
}
import React from 'react';
import { IconWrapper, LinkBox, LinksBarContainer, LinkText } from './styles';
import EthSvg from '../../images/ethShell.svg'

const linkNames = ['Reading', 'Cool Stuff', 'Writing'];

const LinkItem = ({name}) => {
  return (
    <LinkBox>
      <LinkText>{name}</LinkText>
      <IconWrapper>
        <EthSvg />
      </IconWrapper>
    </LinkBox>
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
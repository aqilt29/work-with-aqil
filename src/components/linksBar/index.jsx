import React from 'react';
import { IconWrapper, LinkBox, LinksBarContainer, LinkText } from './styles';
import EthSvg from '../../images/ethShell.svg'

export const LinksBar = () => {
  return (
    <LinksBarContainer>
      <LinkBox>
        <LinkText>Reading</LinkText>
        <IconWrapper>
          <EthSvg />
        </IconWrapper>
      </LinkBox>
      <LinkBox>
        <LinkText>Cool Stuff</LinkText>
        <IconWrapper>
          <EthSvg />
        </IconWrapper>
      </LinkBox>
      <LinkBox>
        <LinkText>Writing</LinkText>
        <IconWrapper>
          <EthSvg />
        </IconWrapper>
      </LinkBox>
    </LinksBarContainer>
  )
}
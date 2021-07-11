import * as React from 'react';
import {
  BioContainer,
  BioHeader,
  BioText,
  HeroContainer,
  HeroImg,
  MailAnchor,
  MailButton,
  
} from './styles';
import staticEthGif from '../../images/staticethgif.gif'
// import EthIcon from '../../images/ethIcon.svg'
import { bio, bio1, bio2 } from '../../utils/frontPageText';

const Hero = () => {
  return (
    <HeroContainer>
      <HeroImg src={staticEthGif}/>
      <BioContainer>
        <BioHeader>What About</BioHeader>
        <BioText>{bio2}</BioText>
        <BioText>{bio}{<a target="__Blank" href="https://finematics.com/history-of-defi-explained" >DeFi Summer</a>}{bio1}</BioText>
        <MailAnchor
          href="mailto:me@workwithaqil.com?subject=Hi I saw your website &body=Hi Aqil,">
          <MailButton>
            Contact Me
          </MailButton>
        </MailAnchor>
      </BioContainer>
    </HeroContainer>
  )
}

export default Hero;

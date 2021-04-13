import * as React from "react"
import Layout from "../components/layout/index.jsx"

import styled from 'styled-components';
import { device } from '../styles/devices';

import programmingGif from '../images/computerDeskMoshed.gif'
import staticEthGif from '../images/staticethgif.gif'
import blockchaingif from '../images/blockchaingif.gif'
import computerVaporGif from '../images/computervapor.gif'
// import first5000days from '../images/first5000days.jpg'

import { resources } from '../utils/resources';

const HeroText = styled.h1`
  font-size: 8em;
  padding-left: .1em;
  line-height: .8;
  font-weight: 100;
  z-index: 200;
  color: black;

  /* mix-blend-mode: darken; */
`;

const HeroContainer = styled.div`
  padding-top: 2em;
  /* overflow-x: hidden; */
  height: 550px;
`;

const TopBar = styled.div`
  letter-spacing: .1em;
  border-top: none;
  border-bottom: 2px solid black;
  padding: 1em;
  display: flex;
  justify-content: center;

  @media ${device.tablet} {
    padding: 0;
    justify-content: flex-start;
  }
`;

const TitleHolder = styled.div`
  display: contents;
  
  @media ${device.tablet} {
    display: block;
    border-right: 2px solid black;
    padding: 2em;
  }
`;

const MainGif = styled.img`
  -webkit-transform: scaleX(-1);
  transform: scaleX(-1);
  position: absolute;
  
  object-fit: cover;
  width: 300px;
  height: 600px;
  top: 19%;
  z-index: -100;
  right: 0px;
`;

const ColoredBox = styled.div`
  background-color: ${props => props.color || 'white'};
  width: 100vw;
  height: 75vh;
`

const TextBlurbContainer = styled.div`
  background-color: white;
  border-top: 2px solid black;
  /* border-bottom: 2px solid black; */
  width: 100vw;
  padding-left: 2em;
  padding-bottom: 2.5em;
`;

const BlurbText = styled.p`
  max-width: 85vw;
  font-size: 22px;
  line-height: 36px;

  margin-block-start: 1em;
  margin-block-end: 1em;
`;

const EthGif = styled.img`
  display: block;
  max-width: 80vw;
`;

const TextHeader = styled.h2`
    font-size: ${props => props.size || '4em'};
    max-width: 90vw;
    margin-top: .5em;
`;

const BigList = styled.li`
  margin-left: 1.5em;
  font-size: 2em;
  padding-top: .75em;
  letter-spacing: 4pt;

  &:hover {
    list-style-type: circle;
  }
`;

const IndexPage = () => {
  return (
    <Layout>
      <TopBar>
        <TitleHolder>
          <h3>
            Work With Aqil
          </h3>
        </TitleHolder>
      </TopBar>
      <HeroContainer>
        <HeroText>
          Work With Web3
        </HeroText>
        <MainGif src={programmingGif} alt="I do program sometimes, blockchain." />
      </HeroContainer>
      <TextBlurbContainer>
        <TextHeader>About Web 3.0</TextHeader>
        <BlurbText>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente tenetur eum est quis corporis exercitationem officia obcaecati iste ducimus perferendis!</BlurbText>
        <BlurbText>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente tenetur eum est quis corporis exercitationem officia obcaecati iste ducimus perferendis!</BlurbText>
        <EthGif src={staticEthGif} slt="Ethereum Gif" />
        <BlurbText>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente tenetur eum est quis corporis exercitationem officia obcaecati iste ducimus perferendis!</BlurbText>
        <BlurbText>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente tenetur eum est quis corporis exercitationem officia obcaecati iste ducimus perferendis!</BlurbText>
        <EthGif src={blockchaingif} slt="Blockchain Gif" />
        <BlurbText>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente tenetur eum est quis corporis exercitationem officia obcaecati iste ducimus perferendis!</BlurbText>
        <TextHeader size="3em">Contact Me</TextHeader>
        <ul>
          <BigList>
            <a href="mailto:me@workwithaqil.com">Email</a></BigList>
          <BigList>
            <a target="__blank" href="https://twitter.com/workwithaqil">@Twitter</a>
          </BigList>
        </ul>
        <EthGif style={{ marginTop: '4em', marginBottom: '4em' }} src={computerVaporGif} />
        <TextHeader size="3em">Reading</TextHeader>
        <ul>
          {
            resources.map(({title, link, alt}) => (
              <BigList>
                <a target="__blank" alt={alt} href={link}>{title}</a>
              </BigList>
            ))
          }
        </ul>
        {/* <TextHeader size="3em">Projects</TextHeader> */}
        {/* <EthGif src={first5000days}/> */}
      </TextBlurbContainer>
    </Layout>
  )
}

export default IndexPage

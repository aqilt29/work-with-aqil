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
import { Header } from "../components/header/index.jsx";

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
      <Header />
      
    </Layout>
  )
}

export default IndexPage

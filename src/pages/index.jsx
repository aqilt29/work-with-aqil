import * as React from "react"
import styled from 'styled-components';

import Layout from "../components/layout/index.jsx"
// import { Header } from "../components/header/index.jsx";
import Hero from "../components/hero/index.jsx"
import { LinksBar } from '../components/linksBar/index.jsx'

// import staticEthGif from '../images/staticethgif.gif'


const EthGif = styled.img`
  display: block;
  max-width: 80vw;
`;

const IndexPage = () => {
  return (
    <Layout>
      {/* <Header /> */}
      <Hero />
      <LinksBar />
    </Layout>
  )
}

export default IndexPage

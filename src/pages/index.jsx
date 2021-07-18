import * as React from "react"
import Layout from "../components/layout/index.jsx"
// import { Header } from "../components/header/index.jsx";
import Hero from "../components/hero/index.jsx"
import { LinksBar } from '../components/linksBar/index.jsx'


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

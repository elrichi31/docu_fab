import * as React from "react"
import Layout from "../components/Layout"
import Seo from "../components/SEO"
import BannerModule from "../components/BannerModule/BannerModule"
import BasicTextModule from "../components/BasicTextModule/BasicTextModule"
import PerksModule from "../components/PerksModule/PerksModule"
import Perk from "../components/PerksModule/Perk"
import Features from "../components/Features/Features"
import LatestPosts from "../components/Post/LatestPosts"

const Index = () => {
  return (
    <>
      <Seo title="Home" />
      <Layout>
        <BannerModule
          title="Fabian documental"
          subTitle="En plena adolescencia, Fabián está decidido a volver al ring y librar el combate más 
          importante de su vida: ser reconocido como el primer boxeador transgénero de Ecuador.  
          Fabián entiende que su batalla va más allá del cuadrilátero.."
        />
        <BasicTextModule
          title="Sinopsis"
          content="Fabián fue campeón de boxeo de Ecuador cuando tenía 13 años, pero dejó su pasión para iniciar su tratamiento hormonal. Hoy, a sus 19 años, después de poner a su familia de su lado, se enfrenta a las autoridades deportivas de Ecuador para convertirse en el primer atleta transgénero del país. 
          La historia de una excampeona que transita hacia convertirse en un hombre referente del transfeminismo."
          link="/products"
          linkText="View Products"
        />
        <PerksModule>
          <Perk title="The Title" content="The content" />
        </PerksModule>
        <Features
          title="Featured Products from Barcadia."
          introduction="Vivamus quam mauris, pulvinar vel mauris id, interdum semper neque. Proin malesuada libero eget tellus scelerisque, id egestas tortor egestas."
        />
        <LatestPosts
          title="Equipo involucrado en este proyecto"
          introduction="Conoce al resto del equipo que hizo posible este documental."
        />
      </Layout>
    </>
  )
}

export default Index

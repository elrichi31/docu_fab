import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { PerksModuleStyles } from "./PerksModuleStyles"
import { MdOutlineClose as Cross } from "react-icons/md"
import Perk from "./Perk"

const PerksModule = () => {
  return (
    <PerksModuleStyles className="section section__padding">
      <StaticImage
        className="perks__image--bg"
        src="../../../static/abstract-building.jpg"
        height={900}
        alt="Perks Module"
        layout="constrained"
        placeholder="tracedSVG"
      />
      <div className="perks__image--overlay"></div>
      <div className="container container__tight">
        <StaticImage
          src="../../../static/campuslatino.png"
          alt="Perk Image"
          layout="constrained"
          placeholder="tracedSVG"
        />
        <StaticImage
          src="../../../static/labadec.png"
          alt="Perk Image"
          layout="constrained" 
          placeholder="tracedSVG"
        />
        
        <StaticImage
          src="../../../static/conecta.png"
          alt="Perk Image"
          layout="constrained"
          placeholder="tracedSVG"
          style={{filter: "invert(100%)"}}

        />
        <StaticImage
          src="../../../static/red edoc.png"
          alt="Perk Image"
          layout="constrained"
          placeholder="tracedSVG"
          style={{filter: "invert(100%)"}}
        />
      </div>
    </PerksModuleStyles>
  )
}

export default PerksModule

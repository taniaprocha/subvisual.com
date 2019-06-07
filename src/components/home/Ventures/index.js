import React from "react"
import PropTypes from "prop-types"

import CallToAction from "../../CallToAction"
import HelpingWith from "./HelpingWith"
import LookingFor from "./LookingFor"
import Portfolio from "./Portfolio"
import Subtitle from "../../Subtitle"
import Text from "../../Text"
import Title from "../../Title"
import Universe from "./Universe"

import { VENTURES } from "../../../pages/index"

import "./index.module.css"

const Ventures = ({ planetMorph, visible }) => (
  <section styleName="root">
    <div styleName="content">
      <header styleName="header">
        <Title>Meaningful Ventures</Title>
      </header>
      <section styleName="section lookingFor">
        <Subtitle>Looking for</Subtitle>
        <LookingFor />
      </section>
      <section styleName="section helpingWith">
        <Subtitle>Helping with</Subtitle>
        <HelpingWith />
      </section>
      <div styleName="universe">
        <Universe
          visible={visible === VENTURES}
          subvisualPlanetMorph={planetMorph}
        />
      </div>
      <section styleName="section portfolio">
        <header styleName="portfolioHeader">
          <Subtitle>Portfolio</Subtitle>
        </header>
        <div styleName="portfolioContent">
          <Portfolio planetMorph={planetMorph} visible={visible === VENTURES} />
        </div>
      </section>
      <footer styleName="footer">
        <p>
          <Text size="large">Join our venture universe.</Text>
          <br />
          <CallToAction size="large">Let's talk.</CallToAction>
        </p>
      </footer>
    </div>
  </section>
)

Ventures.propTypes = {
  planetMorph: PropTypes.func,
}

Ventures.defaultProps = {
  planetMorph: () => {},
}

export default Ventures

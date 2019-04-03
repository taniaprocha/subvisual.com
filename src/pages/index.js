import React, { useState } from "react"
import { useMorph } from "react-morph"
import { easeOutSin, easeInSin } from "react-morph/lib/easings"
import Observer from "@researchgate/react-intersection-observer"

import About from "../components/home/About"
import Hero from "../components/home/Hero"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Ventures from "../components/home/Ventures"

import "../common/normalize.css"

export const HERO = "HERO"
export const VENTURES = "VENTURES"
export const ABOUT = "ABOUT"

const easings = {
  translateX: easeOutSin,
  translateY: easeInSin,
}

const spring = {
  damping: 10,
  mass: 1,
  stiffness: 40,
}

const config = { easings, spring, getMargins: true }

const IndexPage = () => {
  const morph = useMorph(config)
  const [visible, setVisible] = useState(HERO)
  const setSection = section => isVisible => {
    if (isVisible) setVisible(section)
  }

  return (
    <>
      <Layout>
        <SEO
          title="Subvisual - We nurture ideas that empower people"
          keywords={[]}
        />
        <Observer onChange={setSection(HERO)}>
          <Hero planetMorph={morph} visible={visible} />
        </Observer>
        <Observer onChange={setSection(VENTURES)}>
          <Ventures planetMorph={morph} visible={visible} />
        </Observer>
        <Observer onChange={setSection(ABOUT)}>
          <About planetMorph={morph} visible={visible} />
        </Observer>
      </Layout>
    </>
  )
}

export default IndexPage

import React from "react"
import PropTypes from "prop-types"
import Img from "gatsby-image"
import { StaticQuery, graphql } from "gatsby"
import { ParallaxProvider, ParallaxBanner } from "react-scroll-parallax"

import CallToAction from "../../CallToAction"
import LoadPlaceholder from "../../LoadPlaceholder"
import Text from "../../Text"
import Title from "./Title"

import "./index.module.css"

const renderParallaxImage = ({ baseDelay, image, parallaxAmount }) => (
  <ParallaxBanner
    layers={[
      {
        children: (
          <LoadPlaceholder delay={baseDelay}>
            {onLoad => (
              <Img
                fadeIn={false}
                onLoad={onLoad}
                fluid={image}
                imgStyle={{ display: "block" }}
                style={{ height: "100%" }}
              />
            )}
          </LoadPlaceholder>
        ),
        amount: parallaxAmount,
      },
    ]}
  />
)

const Hero = ({ data, planetMorph, visible }) => {
  const baseDelay = 0.3

  return (
    <ParallaxProvider>
      <div styleName="root">
        <div styleName="content">
          <div styleName="title">
            <Title planetMorph={planetMorph} visible={visible} />
          </div>
          <div styleName="text">
            <p>
              <Text>
                Building a company from the ground up is hard and stressful,
                particularly in heavy regulated fields such as fintech and
                digital healthcare.
              </Text>
            </p>
            <p>
              <Text>
                Struggling with designing and developing that awesome idea
                you’ve had? We can help you succeed.{" "}
                <CallToAction>Together.</CallToAction>
              </Text>
            </p>
          </div>
          <div styleName="images">
            <div styleName="image">
              <div styleName="horizontal">
                {renderParallaxImage({
                  baseDelay,
                  image: data.hero1_h.childImageSharp.fluid,
                  parallaxAmount: 0.2,
                })}
              </div>
              <div styleName="vertical">
                {renderParallaxImage({
                  baseDelay,
                  image: data.hero1_v.childImageSharp.fluid,
                  parallaxAmount: 0.2,
                })}
              </div>
            </div>
            <div styleName="image">
              <div styleName="horizontal">
                {renderParallaxImage({
                  baseDelay: baseDelay + 0.1,
                  image: data.hero2_h.childImageSharp.fluid,
                  parallaxAmount: 0.2,
                })}
              </div>
              <div styleName="vertical">
                {renderParallaxImage({
                  baseDelay: baseDelay + 0.1,
                  image: data.hero2_v.childImageSharp.fluid,
                  parallaxAmount: 0.2,
                })}
              </div>
            </div>
            <div styleName="image" id="lixo">
              <div styleName="horizontal">
                {renderParallaxImage({
                  baseDelay: baseDelay + 0.2,
                  image: data.hero3_h.childImageSharp.fluid,
                  parallaxAmount: 0.2,
                })}
              </div>
              <div styleName="vertical">
                {renderParallaxImage({
                  baseDelay: baseDelay + 0.2,
                  image: data.hero3_v.childImageSharp.fluid,
                  parallaxAmount: 0.2,
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </ParallaxProvider>
  )
}

Hero.propTypes = {
  planetMorph: PropTypes.func,
}

Hero.defaultTypes = {
  planetMorph: () => {},
}

export default props => (
  <StaticQuery query={query} render={data => <Hero data={data} {...props} />} />
)

const query = graphql`
  query {
    hero1_v: file(relativePath: { regex: "/hero-1-vertical.jpg/" }) {
      childImageSharp {
        fluid(maxHeight: 452, quality: 100) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    hero1_h: file(relativePath: { regex: "/hero-1-horizontal.jpg/" }) {
      childImageSharp {
        fluid(maxHeight: 224, quality: 100) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }

    hero2_v: file(relativePath: { regex: "/hero-2-vertical.jpg/" }) {
      childImageSharp {
        fluid(maxHeight: 452, quality: 100) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    hero2_h: file(relativePath: { regex: "/hero-2-horizontal.jpg/" }) {
      childImageSharp {
        fluid(maxHeight: 224, quality: 100) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }

    hero3_v: file(relativePath: { regex: "/hero-3-vertical.jpg/" }) {
      childImageSharp {
        fluid(maxHeight: 452, quality: 100) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    hero3_h: file(relativePath: { regex: "/hero-3-horizontal.jpg/" }) {
      childImageSharp {
        fluid(maxHeight: 320, quality: 100) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
  }
`

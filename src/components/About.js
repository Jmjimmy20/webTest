import React from "react"
import styled from "@emotion/styled"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import { ParallaxProvider, Parallax } from "react-scroll-parallax"

import Decoration from "../images/line2.svg"
import Collapsable from "./Collapsable"
import Row from "./Row.styled"

const Paragraph = styled.p`
  letter-spacing: 0.2em;
  line-height: 1.8em;
  margin-bottom: 2.3rem;
  font-size: 0.9rem;
`

const LeftImage = styled.div`
  width: 100%;
  z-index: 2;
  position: relative;
  @media (min-width: 768px) {
    width: 80%;
    margin-left: auto;
  }
`

const RightImage = styled.div`
  width: 80%;
  display: block;
  transform: translate(-10%, 30%);
  @media (min-width: 768px) {
    width: 49%;
    margin: auto;
    transform: translate(0);
  }
`

const DecoImg = styled.img`
  position: absolute;
  width: auto;
  height: 70%;
  top: 0;
  right: 20%;
  @media (min-width: 768px) {
    display: none;
  }
`

const Column = styled.div`
  width: 100%;
  flex: 0 0 100%;
  text-align: center;
  padding: 0 20px;
  position: relative;
  margin: auto;
  &:first-of-type,
  &:last-of-type {
    width: 50%;
    flex: 0 0 50%;
  }
  &:first-of-type {
    order: 1;
    padding: 0;
  }
  &:nth-of-type(2) {
    order: 0;
  }
  &:last-of-type {
    order: 2;
    padding: 0;
    margin-top: auto;
  }
  @media (min-width: 768px) {
    width: 80%;
    flex: 0 0 80%;
    &:nth-of-type(2) {
      margin-bottom: 50px;
    }
  }
  @media (min-width: 992px) {
    padding: ${props => (props.padding ? "0 50px" : "0")};
    width: 100%;
    flex: 0 0 100%;
    &,
    &:first-of-type,
    &:last-of-type {
      width: 33.3333333%;
      flex: 0 0 33.3333333%;
    }
    &:first-of-type {
      order: 0;
      padding: ${props => (props.padding ? "0 50px" : "0")};
    }
    &:nth-of-type(2) {
      order: 1;
      margin-bottom: 0;
      padding: ${props => (props.padding ? "0 50px" : "0")};
    }
    &:last-of-type {
      order: 2;
      padding: ${props => (props.padding ? "0 50px" : "0")};
      margin-bottom: auto;
    }
  }
`

const About = () => {
  const { aboutImg1, aboutImg2 } = useStaticQuery(graphql`
    {
      aboutImg1: allImageSharp(
        filter: { fluid: { originalName: { eq: "estefania-scala-about.jpg" } } }
      ) {
        nodes {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      aboutImg2: allImageSharp(
        filter: {
          fluid: { originalName: { eq: "estefania-scala-about-2.jpg" } }
        }
      ) {
        nodes {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <div id="about">
      <ParallaxProvider>
        <Collapsable title="About">
          <Row>
            <Column data-sal="slide-up" data-sal-delay="300">
              <LeftImage>
                <Img fluid={aboutImg1.nodes[0].fluid} alt="Estefan??a Scala" />
              </LeftImage>
            </Column>
            <Column padding>
              <Paragraph data-sal="slide-up" data-sal-delay="300">
                Soy Estefan??a Scala, Licenciada en Marketing y Comunicaci??n por
                el Tecnol??gico de Monterrey. Cuento con un M??ster de
                Comunicaci??n y Relaciones P??blicas por parte del ESIC,un M??ster
                en Imagen Personal y Estilismo y M??ster en Imagen Corporativa,
                ambos por ASTIDI en Barcelona.
              </Paragraph>
              <Paragraph data-sal="slide-up" data-sal-delay="300">
                Poseo una extraordinaria capacidad de comunicaci??n, as?? como
                amplia experiencia en manejo de equipos de trabajo y log??stica
                de eventos masivos.
              </Paragraph>
              <Paragraph data-sal="slide-up" data-sal-delay="300">
                Mi principal inter??s profesional se centra en las ??reas de
                marketing, comunicaci??n y relaciones p??blicas, teniendo como
                objetivo el desarrollo de nuevas estrategias para el crecimiento
                de las organizaciones e individuos.
              </Paragraph>
            </Column>
            <Column>
              <Parallax y={[0, -60]}>
                <DecoImg
                  src={Decoration}
                  alt="decoration"
                  data-sal="slide-up"
                  data-sal-delay="300"
                />
                <RightImage>
                  <Img
                    fluid={aboutImg2.nodes[0].fluid}
                    alt="Estefan??a Scala"
                    data-sal="slide-up"
                    data-sal-delay="300"
                  />
                </RightImage>
              </Parallax>
            </Column>
          </Row>
        </Collapsable>
      </ParallaxProvider>
    </div>
  )
}

export default About

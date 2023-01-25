import React from 'react'
import { Head } from './Head'
import { Dcard } from './Dcard'
import Experience from './Experience'
import Mission from './Mission'
import AboutHead from './Abouthead/AboutHead'
import Leading from './Abouthead/Leading'
import Layout from '../../layout'

const About = () => {
  return (<>
  <Layout>
  <AboutHead />
  <Leading />
  <Head />
  <Experience />
  <Mission />
  <Dcard />
  </Layout>
  </>
   
  )
}

export default About
import React from 'react'
import ProjectCard from '../components/ProjectCard'
import { Typography } from '@mui/material'
import teph1 from '../img/designportfolio/teph1.jpg'
import teph2 from '../img/designportfolio/teph2.jpg'
import teph3 from '../img/designportfolio/teph3.jpg'
import teph4 from '../img/designportfolio/teph4.jpg'
import logo from '../img/designportfolio/logo.jpg'

type Props = {}

const DesignPortfolio = (props: Props) => {
  return (
    <div>
      <Typography variant = "h1">Design Portfolio</Typography> 
      <ProjectCard title = "Tephinet Infographics" logo = {logo} img = {[teph1, teph2, teph3, teph4]} description="TEPHINET's target audience is individuals who already tend to be familiar with their goal, which is to serve all people through standardized training, experiential learning, training program quality improvement, mentoring, and knowledge exchanges in order to connect epidemiologists better, faster, and with quality across the globe. Graphics are intended to be modern and appealing to the eye. This was a really fun project because I was able to use almost any graphics/organization I wanted as long as the information was clearly portrayed." date = "28 December 2018" subtitle = "Social media graphics dispersing information gathered from surveys given to TEPHINET (Training Programs in Epidemiology and Public Health Interventions Network ) member groups, known as FETPs (field epidemiology training programs).">

      </ProjectCard>
    </div>
    
  )
}

export default DesignPortfolio
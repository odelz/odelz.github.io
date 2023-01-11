import React from 'react'
import ProjectCard from '../components/ProjectCard'
import { Typography } from '@mui/material'
import logo from '../img/designportfolio/logo.jpg'
const project1imgs = ["src\img\teph1.jpg", "src\img\teph2.jpg","src\img\teph3.jpg"]

type Props = {}

const CodingPortfolio = (props: Props) => {
  return (
    <div>
      <Typography variant = "h1">Portfolio</Typography> 
      <ProjectCard title = "Tephinet Infographics" logo = {logo} img = {project1imgs} description="TEPHINET's target audience is individuals who already tend to be familiar with their goal, which is to serve all people through standardized training, experiential learning, training program quality improvement, mentoring, and knowledge exchanges in order to connect epidemiologists better, faster, and with quality across the globe. Graphics are intended to be modern and appealing to the eye. This was a really fun project because I was able to use almost any graphics/organization I wanted as long as the information was clearly portrayed." date = "28 December 2018" subtitle = "Social media graphics dispersing information gathered from surveys given to TEPHINET (Training Programs in Epidemiology and Public Health Interventions Network ) member groups, known as FETPs (field epidemiology training programs).">

      </ProjectCard>
    </div>
    
  )
}

export default CodingPortfolio
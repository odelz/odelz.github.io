import React from 'react'
import ProjectCard from '../components/ProjectCard'
import { Typography } from '@mui/material'
import prolon1 from '../img/codingportfolio/prolon1.jpg'
import prolon2 from '../img/codingportfolio/prolon2.jpg'
import prolon3 from '../img/codingportfolio/prolon3.jpg'
import prolon4 from '../img/codingportfolio/prolon4.jpg'
import prolon5 from '../img/codingportfolio/prolon5.jpg'
import prolon6 from '../img/codingportfolio/prolon6.jpg'

type Props = {}

const CodingPortfolio = (props: Props) => {
  return (
    <div>
      <ProjectCard title = "Prolon Website" logo = {prolon1} img = {[prolon2, prolon3, prolon4]} description="TEPHINET's target audience is individuals who already tend to be familiar with their goal, which is to serve all people through standardized training, experiential learning, training program quality improvement, mentoring, and knowledge exchanges in order to connect epidemiologists better, faster, and with quality across the globe. Graphics are intended to be modern and appealing to the eye. This was a really fun project because I was able to use almost any graphics/organization I wanted as long as the information was clearly portrayed." date = "28 December 2018" subtitle = "Social media graphics dispersing information gathered from surveys given to TEPHINET (Training Programs in Epidemiology and Public Health Interventions Network ) member groups, known as FETPs (field epidemiology training programs).">

      </ProjectCard>


    </div>
    
  )
}

export default CodingPortfolio
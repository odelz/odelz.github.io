import React from 'react'
import { Box, Typography, Container } from '@mui/material'
import me from '../img/IMG_3551.jpg'
import '../index.css';
import ScrollingTextBanner from '../components/ScrollingTextBanner';

type Props = {}

const Home = (props: Props) => {
  return (
    <div>
      <Box sx={{ display: "flex", flexDirection: "row", alignItems: "center", background: "linear-gradient(to bottom, #fff9e3, #d7aefb, #f18bce);", height: "88vh" }}>
        <div className="about-text">
          <Typography variant="h3" sx={{ fontFamily: 'NotoSerifDisplay-VariableFont' }}>
            Hi, nice to meet you, I'm Odelia.
          </Typography>
          <Typography variant="h2" sx={{ fontFamily: 'NotoSerifDisplay-VariableFont' }}>
            I'm a <Typography variant="h2" component="span" style={{ fontFamily: 'NotoSerifDisplay-Italic-VariableFont' }}>dreamer</Typography> and a{' '}
            <Typography variant="h2" component="span" style={{ fontFamily: 'NotoSerifDisplay-Italic-VariableFont' }}>rebel</Typography>, passionate about web development and creating beautiful, functional user experiences.
          </Typography>
        </div>
        <div className="about-image">
          <img src={me} alt="Me" />
        </div>

      </Box>
      <ScrollingTextBanner text={["Human-Centered Design", "Full-Stack Developer", "Msc in Computer Science student", "Adventurer", "Tastemaker"]} />
      <Box sx={{ display: "flex", flexDirection: "row", alignItems: "center", background: "linear-gradient(to bottom,#f18bce, #8EB8E5, #5E4AE3);", height: "88vh"}}>
        <Container>
          <Typography variant="h3" sx={{ fontFamily: 'NotoSerifDisplay-VariableFont' }}>
            I graduated with my Bsc in Computational Media from the Georgia Institute of Technology in 2021. I am currently pursuing my Msc in Computer Science at the Technical University of Denmark.
          </Typography>
        </Container>
      </Box>
    </div>

  )
}

export default Home
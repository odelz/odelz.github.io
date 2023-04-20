import React from 'react'
import { Box, Typography } from '@mui/material'
import me from '../img/IMG_3551.jpg'
import '../index.css';

type Props = {}

const Home = (props: Props) => {
  return (
    <Box sx ={{display: "flex", flexDirection: "row", alignItems: "center", background: "linear-gradient(to bottom, #fff9e3, #d7aefb, #f18bce);", height: "91vh"}}>
    <div className="about-text">
    <Typography variant="h3" sx={{ fontFamily: 'NotoSerifDisplay-VariableFont' }}>
          Hi, nice to meet you, I'm Odelia.
        </Typography>
        <Typography variant= "h2" sx={{ fontFamily: 'NotoSerifDisplay-VariableFont' }}>
          I'm a <Typography variant= "h2" component="span" style={{fontFamily: 'NotoSerifDisplay-Italic-VariableFont' }}>dreamer</Typography> and a{' '}
          <Typography variant= "h2" component="span" style={{fontFamily: 'NotoSerifDisplay-Italic-VariableFont'}}>rebel</Typography>; a hardworking and ambitious adventurer trying to discover where I fit into in this big, wide world. I'm passionate about web development and creating beautiful, functional user experiences.
        </Typography>
      </div>
      <div className="about-image">
        <img src={me} alt="Me" />
      </div>
    </Box>
  )
}

export default Home
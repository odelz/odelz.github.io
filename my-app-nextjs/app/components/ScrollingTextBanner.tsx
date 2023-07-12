import React from 'react';
import { Box, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

// Define a styled component for the scrolling text container
const ScrollingTextContainer = styled(Box)({
  display: 'flex',
  fontFamily: 'Karla',
  alignItems: 'center',
  fontSize: '1.25rem',
  width: '100%',
  minWidth: '100%',
  overflowX: "auto",
  overflowY: "hidden",
  whiteSpace: 'nowrap',
  animation: 'marquee 20s linear infinite',
  '@keyframes marquee': {
    '0%': {
      transform: 'translateX(100%)',
    },
    '100%': {
      transform: 'translateX(-100%)',
    },
  },
  '&::-webkit-scrollbar': {
    display: 'none',
  },
});

type Props = {
  text: string[];
};

const ScrollingTextBanner = ({ text }: Props) => {
  return (
    <Box bgcolor="primary.main" >
      <ScrollingTextContainer>
      {text.map((item, index) => (
        <span key={index} style={{ paddingRight: '10rem',whiteSpace: 'nowrap' }}>
          {item}
        </span>
      ))}
      </ScrollingTextContainer>
    </Box>
  );
};

export default ScrollingTextBanner;

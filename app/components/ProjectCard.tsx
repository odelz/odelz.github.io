import { FC, useState } from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia, { CardMediaProps } from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import ShareIcon from '@mui/icons-material/Share';

interface ProjectCardProps {
  title: string;
  description: string;
  color: string;
  image?: string;
}

const CardContainer = styled(Card)({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100%',
  textDecoration: "none"
});

const Image = styled(CardMedia)({
  height: 'auto',
  width: '100%',
  paddingTop: '56.25%', // 16:9 aspect ratio
});

const ProjectCard: FC<ProjectCardProps> = ({ title, description, color, image }) => {
  const [hovered, setHovered] = useState(false);


  return (
    <CardContainer sx={{ bgcolor: color }} onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
      {image && <Image image={image} />}
      <CardHeader
        title={title}
      />
      <CardContent>
        <Typography variant="body2" >
          {description}
        </Typography>
      </CardContent>
    </CardContainer>
  );
};

export default ProjectCard;

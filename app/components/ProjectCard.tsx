'use client'
import { FC, useState } from 'react';

interface ProjectCardProps {
  title: string;
  description: string;
  color: string;
  image?: string;
}


const imageStyle = {
  height: 'auto',
  width: '100%',
  paddingTop: '56.25%', // 16:9 aspect ratio
};

const ProjectCard: FC<ProjectCardProps> = ({ title, description, color, image }) => {
  const [hovered, setHovered] = useState(false);

  const handleMouseEnter = () => setHovered(true);
  const handleMouseLeave = () => setHovered(false);

  return (
    <div
      className = "project-card"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {image && <img src={image} alt={title} style={imageStyle} />}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default ProjectCard;

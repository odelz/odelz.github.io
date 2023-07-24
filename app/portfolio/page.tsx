'use client'
import React, { useState } from 'react';
import Layout from '../components/Layout';
import Image from 'next/image';


interface ImageData {
  src: string;
  title: string;
  description: string;
}

type Props = {}

const PortfolioPage = (props: Props) => {

  const images: ImageData[] = [    {
      src: 'blender.png',
      title: 'Image 1',
      description: 'Description for Image 1',
    },
    {
      src: 'prolon.jpg',
      title: 'Image 2',
      description: 'Description for Image 2',
    },
    {
      src: 'prolon3.jpg',
      title: 'Image 3',
      description: 'Description for Image 3',
    },
    // Add more images with titles and descriptions...
  ];
  const [selectedImage, setSelectedImage] = useState<ImageData | null>(null);

  const handleClick = (image: any) => {
    setSelectedImage(image);
  };

  const handleClose = () => {
    setSelectedImage(null);
  };

  return (
    <Layout>
      {selectedImage && (
        <div className="overlay" onClick={handleClose}>
          <div className="image-container">
            <Image
              src={`/images/${selectedImage.src}`}
              alt={selectedImage.title}
              width={600}
              height={400}
            />
            <div className="image-info">
              <h2>{selectedImage.title}</h2>
              <p>{selectedImage.description}</p>
            </div>
          </div>
        </div>
      )}

      <div className="grid">
        {images.map((image, index) => (
          <div className="grid-item" key={index}>
            <div onClick={() => handleClick(image)}>
              <Image
                src={`/images/${image.src}`}
                alt={`Image ${index + 1}`}
                width={300}
                height={200}
              />
            </div>
          </div>
        ))}
      </div>
    </Layout>
  );
};
export default PortfolioPage;
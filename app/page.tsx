import React from 'react';
import Image from 'next/image'
import { Noto, NotoItalic } from '../styles/fonts'
import Layout from './components/Layout';

export default function Page() {

  return (
    < Layout>
      <div className='home'>
        <div className="about-text">
          <h3 className={Noto.className}>
            Hi, nice to meet you, I'm Odelia.
          </h3>
          <h3 className={Noto.className}>
            I'm a{' '}
            <span className={NotoItalic.className}>
              dreamer
            </span>{' '}
            and a{' '}
            <span className={NotoItalic.className}>
              rebel
            </span>
            , passionate about web development and creating beautiful, functional user experiences.
          </h3>
        </div>
        <div className="about-image">
          <Image
            src="/images/profile.jpg"
            width={500}
            height={500}
            alt="Picture of the author"
          />
        </div>
      </div>
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        background: 'linear-gradient(to bottom,#f18bce, #8EB8E5, #5E4AE3)',
        height: 'auto',
        minHeight: '100vh',
      }}>
        <div>
          <h4 className={Noto.className}>
            I graduated with my Bsc in Computational Media from the Georgia Institute of Technology in 2021. I am currently pursuing my Msc in Computer Science at the Technical University of Denmark.
          </h4>
        </div>
      </div>
    </Layout>
  );
}

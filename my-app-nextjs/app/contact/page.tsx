import React from 'react';
import Layout from '../components/Layout';

const ContactPage: React.FC = () => {
  return (
    <Layout>
      <div className="contact">
        <h1>Contact Me</h1>
        <p>
          You can reach out to me through the following channels:
        </p>
        <ul>
          <li>
            <a href="mailto:your-email@example.com">Email</a>
          </li>
          <li>
            <a href="https://twitter.com/your-twitter-handle">Twitter</a>
          </li>
          <li>
            <a href="https://linkedin.com/in/your-linkedin-profile">LinkedIn</a>
          </li>
          <li>
            <a href="https://github.com/your-github-username">GitHub</a>
          </li>
          {/* Add more social media links as needed */}
        </ul>
      </div>
      <style>{`
        .contact {
          text-align: center;
        }

        h1 {
          font-size: 2rem;
          margin-bottom: 1rem;
        }

        p {
          font-size: 1.2rem;
          margin-bottom: 2rem;
        }

        ul {
          list-style-type: none;
          padding: 0;
          margin: 0;
        }

        li {
          margin-bottom: 1rem;
        }

        a {
          color: #0070f3;
          text-decoration: none;
        }
      `}</style>
    </Layout>
  );
};

export default ContactPage;

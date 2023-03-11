import React from 'react';
import Feature from '../../components/feature/Feature';
import './features.css';

const featuresData = [
  {
    title: 'Instant response',
    text: 'Our AI builds can provide quick and timely responses to your queries, allowing you to get the information you need without delay.',
  },
  {
    title: 'Available 24/7',
    text: 'You can use our custom built AI tools anytime, anywhere, as they are available around the clock.',
  },
  {
    title: 'Accuracy',
    text: `Our AI builds are trained on a vast amount of data and supported by OpenAI's API, which allows it to provide accurate and reliable responses to your questions.`,
  },
  {
    title: 'Multilingual support',
    text: 'Our AI builds can communicate in multiple languages, making it useful for users from different countries and language backgrounds.',
  },
];

const Features = () => (
  <div className="gpt3__features section__padding" id="features">
    <div className="gpt3__features-heading">
      <h1 className="gradient__text">
        Seize the future today. Take action to make your vision a reality.
      </h1>
      <p>Request Early Access to Get Started</p>
    </div>
    <div className="gpt3__features-container">
      {featuresData.map((item, index) => (
        <Feature title={item.title} text={item.text} key={item.title + index} />
      ))}
    </div>
  </div>
);

export default Features;

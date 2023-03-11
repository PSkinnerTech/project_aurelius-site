import React from 'react';
import Feature from '../../components/feature/Feature';
import './whatGPT3.css';

const WhatGPT3 = () => (
  <div className="gpt3__whatgpt3 section__margin" id="wgpt3">
    <div className="gpt3__whatgpt3-feature">
      <Feature
        title="What is GPT-3"
        text="GPT-3 (Generative Pre-trained Transformer 3) is a state-of-the-art language model developed by OpenAI. It is a neural network that has been pre-trained on a vast amount of text data and can generate human-like text responses to a wide range of tasks, including natural language processing, language translation, content creation, and conversation."
      />
    </div>
    <div className="gpt3__whatgpt3-heading">
      <h1 className="gradient__text">
        The possibilities are beyond your imagination
      </h1>
      <p>Explore the Library</p>
    </div>
    <div className="gpt3__whatgpt3-container">
      <Feature
        title="Chatbots"
        text="GPT-3 can be used to build chatbots that can interact with customers in a natural language, answer their questions, and help them navigate through products and services."
      />
      <Feature
        title="Content Creation"
        text="GPT-3 can generate high-quality, human-like content, including product descriptions, social media posts, and articles. This can save businesses time and resources in content creation."
      />
      <Feature
        title="Data Analysis"
        text="GPT-3 can analyze and process vast amounts of text data, enabling businesses to extract insights and trends from social media, customer feedback, and other sources of textual data."
      />
      <Feature
        title="Language Translation"
        text="GPT-3 can translate text between different languages with high accuracy, enabling businesses to expand their reach and communicate with customers in different regions."
      />
    </div>
  </div>
);

export default WhatGPT3;

import React from 'react';
import Feature from '../../components/feature/Feature';
import './whatGPT3.css';

const WhatGPT3 = () => (
  <div className="gpt3__whatgpt3 section__margin" id="wgpt3">
    <div className="gpt3__whatgpt3-feature">
      <Feature
        title="What is Artificial Intelligences?"
        text="AI, or artificial intelligence, is a field of computer science that focuses on the development of machines that can perform tasks that usually require human intelligence, such as learning, problem-solving, decision-making, and understanding natural language.
        There are several top AI models that can be used for developing products, such as BERT (Bidirectional Encoder Representations from Transformers), GPT-3.5 (Generative Pre-trained Transformer 3.5), GPT-4, Transformer-XL, OpenAI's DALL-E (Dali Language Model), and MidJourney. These models have been pre-trained on vast amounts of data, and they can be fine-tuned for specific tasks, such as language translation, image generation, and speech recognition, among others.  These AI models are state-of-the-art language models.  They are neural networks that have been pre-trained on a vast amount of data and can generate human-like responses to a wide range of tasks, including natural language processing, language translation, content creation, and conversation."
      />
    </div>
    <div className="gpt3__whatgpt3-heading">
      <h1 className="gradient__text">
        The possibilities are beyond your imagination
      </h1>
      {/* <p>Explore the Library</p> */}
    </div>
    <div className="gpt3__whatgpt3-container">
      <Feature
        title="Chatbots"
        text="AI can be used to build chatbots that can interact with customers in a natural language, answer their questions, and help them navigate through products and services."
      />
      <Feature
        title="Content Creation"
        text="AI can generate high-quality, human-like content, including product descriptions, social media posts, and articles. This can save businesses time and resources in content creation."
      />
      <Feature
        title="Data Analysis"
        text="AI can analyze and process vast amounts of text data, enabling businesses to extract insights and trends from social media, customer feedback, and other sources of textual data."
      />
      <Feature
        title="Language Translation"
        text="AI can translate text between different languages with high accuracy, enabling businesses to expand their reach and communicate with customers in different regions."
      />
    </div>
  </div>
);

export default WhatGPT3;

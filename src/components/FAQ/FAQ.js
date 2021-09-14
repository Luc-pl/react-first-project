import React from 'react';
import { FAQContent } from '../../data/dataStore';
import Container from '../Container/Container';
import Hero from '../Hero/Hero';

const FAQ = () => (
  <Container>
    <Hero titleText={FAQContent.title} imageSource={FAQContent.imageSource} />
    <div>
      {FAQContent.content}
    </div>  
  </Container>
);

export default FAQ;
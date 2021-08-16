import React from 'react';
import Container from '../Container/Container';
import {settings} from '../../data/dataStore';
import Hero from '../Hero/Hero';

const Info = () => (
  <Container>
    <Hero titleText={settings.info.title} imgSrc={settings.info.image}/>
    <p>{settings.info.text}</p>
  </Container>
);

export default Info;
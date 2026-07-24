import React from 'react';
import MainLayout from '../layouts/MainLayout';
import Hero from '../components/home/Hero';
import WhyChooseUs from '../components/home/WhyChooseUs';
import HardwareGrid from '../components/home/HardwareGrid';
import Performance from '../components/home/Performance';

export const Home = () => {
  return (
    <MainLayout noPaddingTop>
      <Hero />
      <WhyChooseUs />
      <HardwareGrid />
      <Performance />
    </MainLayout>
  );
};

export default Home;

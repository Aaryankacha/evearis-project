import React, { useState } from 'react';
import MainLayout from '../layouts/MainLayout';
import Hero from '../components/home/Hero';
import WhyChooseUs from '../components/home/WhyChooseUs';
import HardwareGrid from '../components/home/HardwareGrid';
import Performance from '../components/home/Performance';

export const Home = () => {
  const [splineLoaded, setSplineLoaded] = useState(false);

  return (
    <MainLayout noPaddingTop isHome={true} splineLoaded={splineLoaded}>
      <Hero splineLoaded={splineLoaded} setSplineLoaded={setSplineLoaded} />
      <WhyChooseUs />
      <HardwareGrid />
      <Performance />
    </MainLayout>
  );
};

export default Home;

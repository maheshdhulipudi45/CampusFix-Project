import React from 'react';
import HeroSection from './HeroSection';
// import WhyUse from './WhyUse';
import AboutCampusFix from './AboutSection';
import PowerfulFeatures from './PowerfulFeatures';
import HeroSection2 from './HeroSection2';
const Home = () => {
  return (
<>
<HeroSection/>
<HeroSection2/>
<PowerfulFeatures/>
{/* <WhyUse/> */}
<AboutCampusFix/>

</>
  );
};

export default Home;
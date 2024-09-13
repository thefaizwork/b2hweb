import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import StepsSection from './components/StepsSection';
import CarsShowcase from './components/CarShowcase';
import CommunitySection from './components/CommunitySection';
import Footer from './components/Footer';
import './index.css'; 



const App = () => {
  return (
    <div>
      <Header />
      <HeroSection />
      <StepsSection />
      <CarsShowcase />
      <CommunitySection />
      <Footer />
    </div>
  );
};

export default App;

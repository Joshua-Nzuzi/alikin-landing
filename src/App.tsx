import React from 'react';
import Header from './components/Header';
import WelcomeSection from './components/WelcomeSection';
import ServicesSection from './components/ServicesSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <WelcomeSection />
      <ServicesSection />
      <Footer />
    </div>
  );
}

export default App;
import React from 'react';
import { Button } from '@/components/ui/button';
import heroImage from '@/assets/hero-water-tanks.jpg';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-hero" />
      
      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          Explore our Water Storage
          <span className="block text-secondary">Solutions Today!</span>
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-2xl mx-auto">
          Professional water storage solutions for industrial, commercial, and residential applications across the Philippines.
        </p>
        <Button variant="hero" size="lg" className="shadow-button">
          View Products
        </Button>
      </div>
    </section>
  );
};

export default Hero;
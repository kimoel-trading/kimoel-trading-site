import React from 'react';
import { Target, Eye, Heart } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-brand-blue-dark mb-6">
            About FIRSTANK
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed mb-12">
            FIRSTANK is a leading provider of water storage solutions in the Philippines, 
            dedicated to delivering innovative and reliable water management systems. 
            With over 15 years of experience, we have built a reputation for excellence, 
            quality, and customer satisfaction.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-brand rounded-full flex items-center justify-center mx-auto mb-6 text-white">
                <Target className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-semibold text-brand-blue-dark mb-4">Mission</h3>
              <p className="text-muted-foreground leading-relaxed">
                To provide sustainable and innovative water storage solutions that meet the diverse needs of our clients while contributing to water security in the Philippines.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-brand rounded-full flex items-center justify-center mx-auto mb-6 text-white">
                <Eye className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-semibold text-brand-blue-dark mb-4">Vision</h3>
              <p className="text-muted-foreground leading-relaxed">
                To be the most trusted and preferred water storage solutions provider in Southeast Asia, known for quality, innovation, and exceptional service.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-brand rounded-full flex items-center justify-center mx-auto mb-6 text-white">
                <Heart className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-semibold text-brand-blue-dark mb-4">Values</h3>
              <p className="text-muted-foreground leading-relaxed">
                Quality, integrity, innovation, and customer satisfaction drive everything we do. We believe in building lasting relationships through excellence.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
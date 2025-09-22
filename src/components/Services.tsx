import React from 'react';
import ServiceCard from './ServiceCard';

// Import service images
import engineeringImage from '@/assets/ENGINEERING SERVICES.jpg';
import machiningImage from '@/assets/MACHINING AND FABRICATION.jpg';
import civilWorksImage from '@/assets/CIVIL WORKS.jpeg';

const Services = () => {
  const services = [
    {
      title: 'Engineering Services',
      description:
        'Automation & machine design, electrical works, sheet metal works, and fabrication of electrical control panels tailored to your requirements.',
      image: engineeringImage,
      imageAlt: 'Engineering services and design',
      buttonText: 'Learn More',
    },
    {
      title: 'Machining & Fabrication',
      description:
        'Equipped with CNC laser cutting, milling, lathe, bending, and shearing machines to deliver precision machining and fabrication services.',
      image: machiningImage,
      imageAlt: 'Machining and fabrication services',
      buttonText: 'View Services',
    },
    {
      title: 'Civil Works',
      description:
        'Comprehensive civil construction works including backhoe rental, road rehabilitation, concreting, structural works, and fire protection systems.',
      image: civilWorksImage,
      imageAlt: 'Civil construction and services',
      buttonText: 'Explore More',
    },
  ];

  return (
    <section id="services" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-brand-blue-dark mb-4">
            Our Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            We provide engineering, machining, and civil works services to support industrial and construction needs with precision and reliability.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              image={service.image}
              imageAlt={service.imageAlt}
              buttonText={service.buttonText}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

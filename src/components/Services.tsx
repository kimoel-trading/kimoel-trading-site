import React from 'react';
import { Wrench, Users, CheckCircle } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Wrench className="w-8 h-8" />,
      title: 'Installation',
      description: 'Professional installation services by our certified technicians'
    },
    {
      icon: <CheckCircle className="w-8 h-8" />,
      title: 'Maintenance',
      description: 'Regular maintenance and repair services to ensure optimal performance'
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Consultation',
      description: 'Expert consultation to help you choose the right water storage solutions'
    }
  ];

  return (
    <section id="services" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-brand-blue-dark mb-6">
            Our Services
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            We provide comprehensive installation, maintenance, and consultation services 
            to ensure your water storage systems operate at peak efficiency. Our experienced 
            team is committed to delivering exceptional service quality and customer satisfaction.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {services.map((service, index) => (
            <div key={index} className="text-center group">
              <div className="w-16 h-16 bg-gradient-brand rounded-full flex items-center justify-center mx-auto mb-6 text-white group-hover:shadow-button transition-all duration-300">
                {service.icon}
              </div>
              <h3 className="text-2xl font-semibold text-brand-blue-dark mb-4">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
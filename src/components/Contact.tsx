import React from 'react';
import { Button } from '@/components/ui/button';
import { Mail, Phone, MapPin } from 'lucide-react';

const Contact = () => {
  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      label: 'Email',
      value: 'kimoel_leotagle@yahoo.com',
      href: 'mailto:kimoel_leotagle@yahoo.com'
    },
    {
      icon: <Phone className="w-6 h-6" />,
      label: 'Phone',
      value: '+63 (043) 233 - 2566',
      href: 'tel:+63432332566'
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      label: 'Address',
      value: 'Purok 1, Brgy. Lodlod, Lipa City, Batangas 4217 Philippines',
      href: '#'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-brand-blue-dark mb-6">
            Contact Us
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Ready to discuss your water storage needs? Get in touch with our team of experts today.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {contactInfo.map((info, index) => (
              <div key={index} className="text-center p-6 bg-background rounded-lg shadow-card">
                <div className="w-12 h-12 bg-gradient-brand rounded-full flex items-center justify-center mx-auto mb-4 text-white">
                  {info.icon}
                </div>
                <h3 className="text-lg font-semibold text-brand-blue-dark mb-2">
                  {info.label}
                </h3>
                {info.href === '#' ? (
                  <p className="text-muted-foreground">{info.value}</p>
                ) : (
                  <a 
                    href={info.href}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {info.value}
                  </a>
                )}
              </div>
            ))}
          </div>

          <div className="text-center">
            <Button variant="hero" size="lg" className="shadow-button">
              Send a Message
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
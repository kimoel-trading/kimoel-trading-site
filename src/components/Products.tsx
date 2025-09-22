import React from 'react';
import ProductCard from './ProductCard';
import electricalImage from '@/assets/ELECTRICAL.jpg';
import mechanicalImage from '@/assets/MECHANICAL COMPONENTS.png';
import pneumaticsImage from '@/assets/PNEUMATICS.png';
import toolsImage from '@/assets/TOOLS.jpeg';

const Products = () => {
  const products = [
    {
      title: 'Electrical',
      description: 'Electrical supplies and equipment including electrical panels, cable trays, and complete electrical supply solutions. Reliable products for safe and efficient power distribution.',
      image: electricalImage,
      imageAlt: 'Industrial water storage tank'
    },
    {
      title: 'Mechanical Components',
      description: 'Industrial-grade AC motors, gear motors, bearings, and seals. Built for durability and precision to support a wide range of mechanical applications.',
      image: mechanicalImage,
      imageAlt: 'Industrial water pump system'
    },
    {
      title: 'Automation & Pneumatics',
      description: 'High-quality pneumatic cylinder accessories and automation parts designed for smooth operation, control, and efficiency in automated systems.',
      image: pneumaticsImage,
      imageAlt: 'Water filtration system'
    },
    {
      title: 'Systems & Tooling',
      description: 'Custom-engineered conveyor systems, jigs, and fixtures. Ideal for manufacturing, assembly, and material handling needs.',
      image: toolsImage,
      imageAlt: 'Water filtration system'
    }
  ];

  return (
    <section id="products" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-brand-blue-dark mb-4">
            Our Products
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Explore our range of electrical, mechanical, automation, and tooling products built for reliability and performance.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {products.map((product, index) => (
            <ProductCard
              key={index}
              title={product.title}
              description={product.description}
              image={product.image}
              imageAlt={product.imageAlt}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;

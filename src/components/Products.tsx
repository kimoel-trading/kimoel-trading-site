import React from 'react';
import ProductCard from './ProductCard';
import waterTankImage from '@/assets/water-tank-product.jpg';
import pumpImage from '@/assets/water-pump-product.jpg';
import filtrationImage from '@/assets/filtration-system-product.jpg';

const Products = () => {
  const products = [
    {
      title: 'Water Tanks',
      description: 'Durable and reliable water storage tanks available in various sizes and materials. Perfect for residential, commercial, and industrial applications.',
      image: waterTankImage,
      imageAlt: 'Industrial water storage tank'
    },
    {
      title: 'Water Pumps',
      description: 'High-efficiency water pumps for optimal water circulation and pressure management. Designed for long-lasting performance and energy efficiency.',
      image: pumpImage,
      imageAlt: 'Industrial water pump system'
    },
    {
      title: 'Filtration Systems',
      description: 'Advanced water filtration and purification systems to ensure clean and safe water for all your needs. Multi-stage filtration technology.',
      image: filtrationImage,
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
            Discover our comprehensive range of water storage and management solutions
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
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
import React from "react";

interface ServiceCardProps {
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  buttonText?: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  image,
  imageAlt,
  buttonText,
}) => {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl hover:scale-105 transform transition-all duration-300">
      {/* Image */}
      <div className="h-48 w-full overflow-hidden">
        <img
          src={image}
          alt={imageAlt}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
        />
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col justify-between">
        <div>
          <h3 className="text-2xl font-semibold text-brand-blue-dark mb-3">
            {title}
          </h3>
          <p className="text-muted-foreground mb-4">{description}</p>
        </div>

        {/* Button */}
        {buttonText && (
          <button className="mt-auto px-4 py-2 bg-brand-gold text-white font-medium rounded-lg hover:bg-brand-gold-dark transition-colors duration-300">
            {buttonText}
          </button>
        )}
      </div>
    </div>
  );
};

export default ServiceCard;

import React from 'react';
import { DivideIcon as LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  subtitle: string;
  description: string;
  buttonText: string;
  onButtonClick?: () => void;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  icon: Icon,
  title,
  subtitle,
  description,
  buttonText,
  onButtonClick
}) => {
  return (
    <div className="bg-white p-8 lg:p-10 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 text-center transform hover:-translate-y-2">
      <div className="mb-6">
        <div className="inline-flex items-center justify-center w-16 h-16 lg:w-20 lg:h-20 bg-yellow-100 rounded-2xl mb-6">
          <Icon className="w-8 h-8 lg:w-10 lg:h-10 text-yellow-600" />
        </div>
        
        <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-3">{title}</h3>
        <h4 className="text-lg lg:text-xl font-semibold text-gray-800 mb-4">{subtitle}</h4>
        
        <p className="text-gray-600 text-base leading-relaxed">{description}</p>
      </div>

      <button 
        onClick={onButtonClick}
        className="w-full bg-yellow-600 hover:bg-yellow-700 text-white font-semibold py-4 px-6 rounded-xl transition-all duration-200 transform hover:scale-105"
      >
        {buttonText}
      </button>
    </div>
  );
};

export default ServiceCard;
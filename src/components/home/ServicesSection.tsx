import React from 'react';
import * as LucideIcons from 'lucide-react';
import { Card, CardContent } from '../ui/Card';
import { popularServices } from '../../data/services';

const ServicesSection: React.FC = () => {
  const getIcon = (iconName: string) => {
    const Icon = LucideIcons[iconName as keyof typeof LucideIcons];
    return Icon ? <Icon className="h-6 w-6" /> : null;
  };

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Government Services
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Access official government services quickly and easily.
            Find what you need for citizenship, business, education, and more.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {popularServices.map((service) => (
            <Card key={service.id} hoverable className="border-t-4 border-primary-500">
              <CardContent className="flex flex-col items-start p-6">
                <div className="bg-primary-100 text-primary-600 p-3 rounded-md mb-4">
                  {getIcon(service.icon)}
                </div>
                <h3 className="text-lg font-semibold mb-2 text-gray-900">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <a
                  href={service.url}
                  className="mt-auto text-primary-600 hover:text-primary-700 font-medium transition-colors"
                >
                  Access Service
                </a>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-8">
          <a
            href="/services"
            className="inline-flex items-center justify-center rounded-md font-medium transition-colors px-6 py-3 bg-primary-500 text-white hover:bg-primary-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 shadow-sm"
          >
            View All Services
          </a>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
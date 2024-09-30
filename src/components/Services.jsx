import React from 'react';
import { motion } from 'framer-motion';
import { Home, Search, Key, Briefcase } from 'lucide-react';

const services = [
  {
    title: 'Property Search',
    description: 'Find your perfect home with our extensive database of Tokyo properties.',
    icon: Search,
  },
  {
    title: 'Rental Assistance',
    description: 'Get expert help in finding and securing your ideal rental property.',
    icon: Home,
  },
  {
    title: 'Purchase Support',
    description: 'Navigate the buying process with our experienced team by your side.',
    icon: Key,
  },
  {
    title: 'Investment Consulting',
    description: 'Make informed decisions with our real estate investment advisory services.',
    icon: Briefcase,
  },
];

const Services = () => {
  return (
    <section id="services" className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="lg:text-center"
        >
          <h2 className="text-base text-primary-600 font-semibold tracking-wide uppercase">Services</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Comprehensive Real Estate Solutions
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Mirai Housing offers a wide range of services to meet all your Tokyo real estate needs.
          </p>
        </motion.div>

        <div className="mt-10">
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="pt-6"
              >
                <div className="flow-root bg-white rounded-lg px-6 pb-8">
                  <div className="-mt-6">
                    <div>
                      <span className="inline-flex items-center justify-center p-3 bg-primary-500 rounded-md shadow-lg">
                        <service.icon className="h-6 w-6 text-white" aria-hidden="true" />
                      </span>
                    </div>
                    <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">{service.title}</h3>
                    <p className="mt-5 text-base text-gray-500">{service.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
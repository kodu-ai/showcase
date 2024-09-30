import React from 'react';
import { motion } from 'framer-motion';

const properties = [
  {
    id: 1,
    title: 'Modern Apartment in Shibuya',
    description: 'Sleek 2-bedroom apartment with stunning city views',
    price: '¥280,000/month',
    image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
  },
  {
    id: 2,
    title: 'Traditional Home in Asakusa',
    description: 'Charming 3-bedroom house with a beautiful garden',
    price: '¥95,000,000',
    image: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
  },
  {
    id: 3,
    title: 'Luxury Condo in Roppongi',
    description: 'High-end 4-bedroom condo with premium amenities',
    price: '¥750,000/month',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
  },
];

const FeaturedProperties = () => {
  return (
    <section id="properties" className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Featured Properties
          </h2>
          <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
            Discover our handpicked selection of Tokyo's finest properties
          </p>
        </motion.div>
        <div className="mt-12 grid gap-8 lg:grid-cols-3 lg:gap-x-8">
          {properties.map((property, index) => (
            <motion.div
              key={property.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="flex flex-col rounded-lg shadow-lg overflow-hidden"
            >
              <div className="flex-shrink-0">
                <img className="h-48 w-full object-cover" src={property.image} alt={property.title} />
              </div>
              <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                <div className="flex-1">
                  <p className="text-sm font-medium text-primary-600">
                    Featured Property
                  </p>
                  <a href="#" className="block mt-2">
                    <p className="text-xl font-semibold text-gray-900">{property.title}</p>
                    <p className="mt-3 text-base text-gray-500">{property.description}</p>
                  </a>
                </div>
                <div className="mt-6 flex items-center">
                  <div className="flex-shrink-0">
                    <span className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-primary-100 text-primary-800">
                      {property.price}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProperties;
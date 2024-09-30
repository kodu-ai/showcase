import React from 'react';
import { motion } from 'framer-motion';

const testimonials = [
  {
    id: 1,
    quote: "Mirai Housing made finding my dream apartment in Tokyo a breeze. Their expertise and personalized service are unmatched!",
    author: "Sarah Johnson",
    role: "Expat Professional",
  },
  {
    id: 2,
    quote: "As a first-time homebuyer in Japan, I was nervous about the process. Mirai Housing guided me every step of the way, making it smooth and stress-free.",
    author: "Takeshi Yamamoto",
    role: "Tech Entrepreneur",
  },
  {
    id: 3,
    quote: "The team at Mirai Housing truly understands the unique needs of international clients. They found us the perfect family home in Tokyo.",
    author: "Maria Rodriguez",
    role: "University Professor",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="bg-gray-50 py-12 sm:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            What Our Clients Say
          </h2>
          <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
            Hear from satisfied clients who found their perfect home with Mirai Housing
          </p>
        </motion.div>
        <div className="mt-12 space-y-8 sm:space-y-12 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-x-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="bg-white pt-8 pb-16 px-4 sm:px-6 lg:px-8 rounded-lg shadow-lg relative"
            >
              <div className="absolute inset-0 flex items-center justify-center opacity-5">
                <svg className="h-32 w-32 text-primary-500" fill="currentColor" viewBox="0 0 32 32" aria-hidden="true">
                  <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                </svg>
              </div>
              <div className="relative">
                <blockquote>
                  <p className="text-lg font-medium text-gray-900">{testimonial.quote}</p>
                </blockquote>
                <div className="mt-6">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <span className="inline-block h-10 w-10 rounded-full overflow-hidden bg-gray-100">
                        <svg className="h-full w-full text-gray-300" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                        </svg>
                      </span>
                    </div>
                    <div className="ml-3">
                      <div className="text-base font-medium text-gray-900">{testimonial.author}</div>
                      <div className="text-sm font-medium text-primary-500">{testimonial.role}</div>
                    </div>
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

export default Testimonials;
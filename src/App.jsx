import React from 'react';
import { motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import FeaturedProperties from './components/FeaturedProperties';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';

function App() {
  return (
    <div className="bg-white">
      <Navbar />
      <div className="pt-16"> {/* Add padding to account for the sticky navbar */}
        <Hero />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Services />
          <FeaturedProperties />
          <Testimonials />
          <Contact />
        </motion.div>
      </div>
    </div>
  );
}

export default App;

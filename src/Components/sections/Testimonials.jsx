import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const TestimonialCard = ({ name, role, company, quote, image }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="max-w-2xl p-8 mx-auto bg-white shadow-lg rounded-xl"
    >
      <div className="flex flex-col items-center gap-6 md:flex-row">
        <div className="flex-shrink-0 w-24 h-24 overflow-hidden rounded-full">
          <img
            src={image}
            alt={name}
            className="object-cover w-full h-full"
          />
        </div>
        <div>
          <p className="mb-4 italic text-gray-600">"{quote}"</p>
          <div>
            <h4 className="font-bold text-gray-800">{name}</h4>
            <p className="text-primary">{role}</p>
            <p className="text-sm text-gray-500">{company}</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const testimonials = [
    {
      name: "Dr. Sarah Johnson",
      role: "AI Research Director",
      company: "Tech Innovations Inc.",
      quote: "This platform represents a significant leap forward in AI technology. The potential applications are virtually limitless.",
      image: "https://randomuser.me/api/portraits/women/44.jpg"
    },
    {
      name: "Michael Chen",
      role: "CTO",
      company: "Future Systems",
      quote: "We've been beta testing this solution for months, and the results have exceeded our expectations. The integration capabilities are particularly impressive.",
      image: "https://randomuser.me/api/portraits/men/32.jpg"
    },
    {
      name: "Elena Rodriguez",
      role: "Product Manager",
      company: "AI Solutions",
      quote: "The user experience is intuitive, and the performance is outstanding. This will revolutionize how businesses leverage AI technology.",
      image: "https://randomuser.me/api/portraits/women/68.jpg"
    },
    {
      name: "James Wilson",
      role: "Data Scientist",
      company: "Analytics Corp",
      quote: "The advanced algorithms and processing capabilities are cutting-edge. This platform will set new standards in the industry.",
      image: "https://randomuser.me/api/portraits/men/75.jpg"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);
    
    return () => clearInterval(interval);
  }, [testimonials.length]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="container px-4 mx-auto">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 text-4xl font-bold text-gray-800">What Experts Say</h2>
          <p className="max-w-2xl mx-auto text-xl text-gray-600">
            Hear from industry leaders and technology experts about our AI platform
          </p>
        </motion.div>

        <div className="relative">
          <AnimatePresence mode="wait">
            <TestimonialCard
              key={currentIndex}
              {...testimonials[currentIndex]}
            />
          </AnimatePresence>

          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full ${
                  index === currentIndex ? 'bg-primary' : 'bg-gray-300'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials; 
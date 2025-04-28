import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const TimelineItem = ({ year, title, description, isActive, onClick }) => {
  return (
    <motion.div
      className={`relative pl-8 pb-8 border-l-2 ${
        isActive ? 'border-primary' : 'border-gray-300'
      }`}
      whileHover={{ scale: 1.02 }}
      onClick={onClick}
    >
      <div
        className={`absolute left-[-10px] top-0 w-5 h-5 rounded-full ${
          isActive ? 'bg-primary' : 'bg-gray-300'
        } cursor-pointer`}
      />
      <div
        className={`p-4 rounded-lg shadow-md ${
          isActive ? 'bg-white' : 'bg-gray-50'
        }`}
      >
        <h3 className="text-xl font-bold text-gray-800">{year}</h3>
        <h4 className="text-lg font-semibold text-primary mt-1">{title}</h4>
        <p className="text-gray-600 mt-2">{description}</p>
      </div>
    </motion.div>
  );
};

const About = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const timelineData = [
    {
      year: '2020',
      title: 'Research & Development',
      description:
        'Our team began exploring the potential of advanced AI algorithms and their applications in real-world scenarios.',
    },
    {
      year: '2021',
      title: 'Prototype Development',
      description:
        'Created the first working prototype of our AI platform, demonstrating its core capabilities and potential.',
    },
    {
      year: '2022',
      title: 'Beta Testing',
      description:
        'Conducted extensive beta testing with select partners to refine our technology and gather valuable feedback.',
    },
    {
      year: '2023',
      title: 'Platform Enhancement',
      description:
        'Implemented advanced features and optimizations based on beta testing results and emerging AI trends.',
    },
    {
      year: '2024',
      title: 'Launch Preparation',
      description:
        'Finalizing our platform for public launch, ensuring it meets the highest standards of performance and security.',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Journey</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Follow our path from concept to launch as we revolutionize AI technology
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            variants={itemVariants}
            className="space-y-6"
          >
            {timelineData.map((item, index) => (
              <TimelineItem
                key={index}
                {...item}
                isActive={index === activeIndex}
                onClick={() => setActiveIndex(index)}
              />
            ))}
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="bg-gradient-to-br from-primary/10 to-secondary/10 p-8 rounded-xl shadow-lg"
          >
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              {timelineData[activeIndex].title}
            </h3>
            <p className="text-gray-600 mb-6">
              {timelineData[activeIndex].description}
            </p>
            <div className="flex justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-primary text-white rounded-lg font-semibold"
              >
                Learn More
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About; 
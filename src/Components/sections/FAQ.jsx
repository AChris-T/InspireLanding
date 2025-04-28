import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const FAQItem = ({ question, answer, isOpen, onClick }) => {
  return (
    <div className="border-b border-gray-200 py-4">
      <button
        className="flex justify-between items-center w-full text-left"
        onClick={onClick}
        aria-expanded={isOpen}
      >
        <h3 className="text-lg font-semibold text-gray-800">{question}</h3>
        <svg
          className={`w-6 h-6 text-primary transition-transform duration-300 ${
            isOpen ? 'transform rotate-180' : ''
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className="mt-4 text-gray-600">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const faqData = [
    {
      question: "What makes your AI platform different from others?",
      answer: "Our platform combines cutting-edge machine learning algorithms with intuitive design, making advanced AI accessible to businesses of all sizes. We focus on real-world applications and seamless integration with existing systems."
    },
    {
      question: "When will the platform be available to the public?",
      answer: "We're currently in the final stages of development and will be launching our platform in Q3 2024. Join our waitlist to be among the first to access it and receive exclusive early access benefits."
    },
    {
      question: "What industries can benefit from your AI solution?",
      answer: "Our platform is versatile and can be applied across numerous industries including healthcare, finance, manufacturing, retail, and education. We've designed it to be adaptable to various business needs and use cases."
    },
    {
      question: "How do you ensure data security and privacy?",
      answer: "We implement enterprise-grade security measures including end-to-end encryption, regular security audits, and compliance with international data protection regulations. Your data privacy is our top priority."
    },
    {
      question: "What kind of support do you offer to users?",
      answer: "We provide comprehensive support including 24/7 technical assistance, detailed documentation, video tutorials, and regular webinars. Our dedicated support team is always ready to help you maximize the value of our platform."
    },
    {
      question: "Can I integrate this with my existing systems?",
      answer: "Yes, our platform is designed with integration in mind. We offer APIs, webhooks, and pre-built connectors for popular business tools and platforms, making it easy to incorporate our AI capabilities into your existing workflow."
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Frequently Asked Questions</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Find answers to common questions about our AI platform
          </p>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="max-w-3xl mx-auto bg-white rounded-xl shadow-lg p-6"
        >
          {faqData.map((item, index) => (
            <FAQItem
              key={index}
              question={item.question}
              answer={item.answer}
              isOpen={index === openIndex}
              onClick={() => setOpenIndex(index === openIndex ? -1 : index)}
            />
          ))}
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="text-center mt-12"
        >
          <p className="text-gray-600 mb-4">Still have questions?</p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-primary text-white rounded-lg font-semibold"
          >
            Contact Our Team
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ; 
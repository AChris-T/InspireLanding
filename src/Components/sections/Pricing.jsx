import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const PricingCard = ({ title, price, features, isPopular, monthlyPrice, yearlyPrice, isYearly }) => {
  const currentPrice = isYearly ? yearlyPrice : monthlyPrice;
  const savings = isYearly ? Math.round((monthlyPrice * 12 - yearlyPrice) / (monthlyPrice * 12) * 100) : 0;
  
  return (
    <motion.div
      whileHover={{ y: -10 }}
      className={`relative rounded-xl shadow-lg overflow-hidden ${
        isPopular ? 'border-2 border-primary' : 'border border-gray-200'
      }`}
    >
      {isPopular && (
        <div className="absolute top-0 right-0 bg-primary text-white px-4 py-1 rounded-bl-lg text-sm font-semibold">
          Most Popular
        </div>
      )}
      <div className="p-8">
        <h3 className="text-2xl font-bold text-gray-800 mb-2">{title}</h3>
        <div className="mb-6">
          <span className="text-4xl font-bold text-gray-800">${currentPrice}</span>
          <span className="text-gray-500 ml-2">/ {isYearly ? 'year' : 'month'}</span>
          {isYearly && savings > 0 && (
            <div className="mt-2 text-sm text-green-600 font-semibold">
              Save {savings}% compared to monthly
            </div>
          )}
        </div>
        <ul className="space-y-3 mb-8">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <svg
                className="w-5 h-5 text-primary mr-2 mt-0.5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span className="text-gray-600">{feature}</span>
            </li>
          ))}
        </ul>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className={`w-full py-3 rounded-lg font-semibold ${
            isPopular
              ? 'bg-primary text-white hover:bg-primary/90'
              : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
          }`}
        >
          Get Started
        </motion.button>
      </div>
    </motion.div>
  );
};

const Pricing = () => {
  const [isYearly, setIsYearly] = useState(false);
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const pricingPlans = [
    {
      title: "Starter",
      monthlyPrice: 49,
      yearlyPrice: 490,
      features: [
        "Basic AI capabilities",
        "Up to 1,000 API calls/month",
        "Standard support",
        "Basic analytics",
        "1 user account"
      ]
    },
    {
      title: "Professional",
      monthlyPrice: 99,
      yearlyPrice: 990,
      features: [
        "Advanced AI capabilities",
        "Up to 10,000 API calls/month",
        "Priority support",
        "Advanced analytics",
        "5 user accounts",
        "Custom integrations"
      ],
      isPopular: true
    },
    {
      title: "Enterprise",
      monthlyPrice: 199,
      yearlyPrice: 1990,
      features: [
        "Full AI capabilities",
        "Unlimited API calls",
        "24/7 dedicated support",
        "Custom analytics",
        "Unlimited user accounts",
        "Custom integrations",
        "Dedicated account manager"
      ]
    }
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
    <section id="pricing" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Simple, Transparent Pricing</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            Choose the plan that's right for your business
          </p>
          
          <div className="flex items-center justify-center mb-12">
            <span className={`mr-3 ${!isYearly ? 'text-gray-800 font-semibold' : 'text-gray-500'}`}>
              Monthly
            </span>
            <button
              onClick={() => setIsYearly(!isYearly)}
              className="relative w-14 h-7 bg-primary rounded-full p-1 transition-colors"
            >
              <motion.div
                className="w-5 h-5 bg-white rounded-full"
                animate={{ x: isYearly ? 28 : 0 }}
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
              />
            </button>
            <span className={`ml-3 ${isYearly ? 'text-gray-800 font-semibold' : 'text-gray-500'}`}>
              Yearly
              {isYearly && (
                <span className="ml-2 text-sm text-green-600 font-semibold">
                  Save up to 20%
                </span>
              )}
            </span>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
            >
              <PricingCard
                {...plan}
                isYearly={isYearly}
              />
            </motion.div>
          ))}
        </div>
        
        <motion.div
          variants={itemVariants}
          className="text-center mt-12"
        >
          <p className="text-gray-600 mb-4">Need a custom solution?</p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-primary text-white rounded-lg font-semibold"
          >
            Contact Sales
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing; 
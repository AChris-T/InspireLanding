import { useState, useEffect } from 'react'

function App() {
  const [email, setEmail] = useState('')
  const [isVisible, setIsVisible] = useState(false)
  const [activeFeature, setActiveFeature] = useState(0)
  const [activeTab, setActiveTab] = useState(0)

  useEffect(() => {
    setIsVisible(true)
    // Auto-rotate through features
    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % 4)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle email submission logic here
    console.log('Email submitted:', email)
    setEmail('')
  }

  const features = [
    {
      icon: '🛠️',
      title: 'Smart Project Diagnosis',
      description: 'Instantly analyzes your codebase, identifies issues, and suggests optimal solutions.',
      color: 'from-blue-500 to-indigo-500'
    },
    {
      icon: '⚙️',
      title: 'Takes Action',
      description: 'Proactively fixes bugs, optimizes performance, and implements best practices.',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: '🤝',
      title: 'Collaboration First',
      description: 'Adapts to your workflow and preferences, making development a seamless experience.',
      color: 'from-green-500 to-teal-500'
    },
    {
      icon: '🔒',
      title: 'Private & Secure',
      description: 'Enterprise-grade security with end-to-end encryption for your code.',
      color: 'from-red-500 to-orange-500'
    }
  ]

  const useCases = [
    {
      title: 'Code Review',
      description: 'Automated code review with intelligent suggestions for improvements.',
      icon: '👀'
    },
    {
      title: 'Bug Fixing',
      description: 'Instant bug detection and automated fixes with explanations.',
      icon: '🐛'
    },
    {
      title: 'Code Generation',
      description: 'Generate boilerplate code and complex implementations.',
      icon: '⚡'
    },
    {
      title: 'Documentation',
      description: 'Auto-generate comprehensive documentation for your codebase.',
      icon: '📚'
    }
  ]

  const testimonials = [
    {
      name: 'Sarah Chen',
      role: 'Senior Developer',
      company: 'TechCorp',
      text: 'InspireEdge AI has transformed how we approach development. Its like having a senior dev available 24/7.',
      avatar: '👩‍💻'
    },
    {
      name: 'Alex Rodriguez',
      role: 'Tech Lead',
      company: 'StartupX',
      text: 'The AIs ability to understand context and provide relevant solutions is impressive. Its a game-changer.',
      avatar: '👨‍💻'
    },
    {
      name: 'Emma Wilson',
      role: 'Full Stack Developer',
      company: 'DevCo',
      text: 'Finally, an AI that actually understands what developers need. The collaboration features are outstanding.',
      avatar: '👩‍💻'
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-black text-white overflow-hidden">
      {/* Animated background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(17,24,39,0.8),rgba(0,0,0,1))]"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0wIDBoNjB2NjBIMHoiLz48cGF0aCBkPSJNMzAgMzBoMXYxaC0xeiIgZmlsbD0icmdiYSgyNTUsMjU1LDI1NSwwLjA1KSIvPjwvZz48L3N2Zz4=')] opacity-20"></div>
      </div>

      {/* Hero Section */}
      <section className="relative z-10 container mx-auto px-4 py-20 text-center">
        <div className={`transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          <div className="inline-block mb-4 px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20">
            <span className="text-indigo-400">🚀 Coming Soon</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-400">
            An AI That Codes, Thinks, and Builds Like a Senior Dev
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            InspireEdge AI is almost here — the intelligent assistant that helps you diagnose, fix, and build projects like a pro.
          </p>
          <form onSubmit={handleSubmit} className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg bg-gray-800/50 border border-gray-700 focus:ring-2 focus:ring-indigo-500 focus:border-transparent backdrop-blur-sm"
                required
              />
              <button
                type="submit"
                className="px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-lg hover:from-indigo-600 hover:to-purple-600 transition-all transform hover:scale-105"
              >
                Notify Me
              </button>
            </div>
            <p className="text-sm text-gray-400 mt-2">
              No spam. Just updates & launch access.
            </p>
          </form>
        </div>
      </section>

      {/* Interactive Features Section */}
      <section className="relative z-10 container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-400">
          Powered by Advanced AI
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`p-6 rounded-xl transition-all duration-500 cursor-pointer ${
                  activeFeature === index
                    ? 'bg-gradient-to-r ' + feature.color + ' scale-105 shadow-lg'
                    : 'bg-gray-800/50 hover:bg-gray-800/70'
                }`}
                onMouseEnter={() => setActiveFeature(index)}
              >
                <div className="flex items-center gap-4">
                  <div className="text-3xl">{feature.icon}</div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                    <p className="text-gray-300">{feature.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="hidden md:block">
            <div className="relative h-full min-h-[400px] rounded-xl bg-gradient-to-br from-gray-800 to-gray-900 p-8">
              <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0wIDBoNjB2NjBIMHoiLz48cGF0aCBkPSJNMzAgMzBoMXYxaC0xeiIgZmlsbD0icmdiYSgyNTUsMjU1LDI1NSwwLjA1KSIvPjwvZz48L3N2Zz4=')] opacity-20"></div>
              <div className="relative z-10">
                <div className="text-4xl font-mono text-indigo-400 mb-4">$ inspire-edge</div>
                <div className="space-y-2 font-mono text-sm">
                  <div className="text-gray-400"> > Initializing AI assistant...</div>
                  <div className="text-green-400">✓ Connected to development environment</div>
                  <div className="text-blue-400"> > Analyzing project structure...</div>
                  <div className="text-purple-400">> Generating optimization suggestions...</div>
                  <div className="text-yellow-400">> Found 3 potential improvements</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="relative z-10 container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-400">
          Transform Your Development Workflow
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {useCases.map((useCase, index) => (
            <div
              key={index}
              className="p-6 rounded-xl bg-gray-800/50 backdrop-blur-sm hover:bg-gray-800/70 transition-all duration-300 cursor-pointer"
              onMouseEnter={() => setActiveTab(index)}
            >
              <div className="text-4xl mb-4">{useCase.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{useCase.title}</h3>
              <p className="text-gray-300">{useCase.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative z-10 container mx-auto px-4 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="p-6 rounded-xl bg-gray-800/50 backdrop-blur-sm">
            <div className="text-4xl font-bold text-indigo-400 mb-2">99%</div>
            <div className="text-gray-300">Accuracy Rate</div>
          </div>
          <div className="p-6 rounded-xl bg-gray-800/50 backdrop-blur-sm">
            <div className="text-4xl font-bold text-purple-400 mb-2">50x</div>
            <div className="text-gray-300">Faster Development</div>
          </div>
          <div className="p-6 rounded-xl bg-gray-800/50 backdrop-blur-sm">
            <div className="text-4xl font-bold text-blue-400 mb-2">24/7</div>
            <div className="text-gray-300">Availability</div>
          </div>
          <div className="p-6 rounded-xl bg-gray-800/50 backdrop-blur-sm">
            <div className="text-4xl font-bold text-green-400 mb-2">10k+</div>
            <div className="text-gray-300">Projects Analyzed</div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="relative z-10 container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-400">
          What Developers Say
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="p-6 rounded-xl bg-gray-800/50 backdrop-blur-sm hover:bg-gray-800/70 transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="text-4xl">{testimonial.avatar}</div>
                <div>
                  <h3 className="font-semibold">{testimonial.name}</h3>
                  <p className="text-sm text-gray-400">{testimonial.role} at {testimonial.company}</p>
                </div>
              </div>
              <p className="text-gray-300 italic">"{testimonial.text}"</p>
            </div>
          ))}
        </div>
      </section>

      {/* Launch Teaser */}
      <section className="relative z-10 container mx-auto px-4 py-16 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-400">
            Launching this quarter — Stay ahead of the curve
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Be the first to try InspireEdge when we launch. Join thousands of developers who are already waiting to experience the future of AI-powered development.
          </p>
          <form onSubmit={handleSubmit} className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg bg-gray-800/50 border border-gray-700 focus:ring-2 focus:ring-indigo-500 focus:border-transparent backdrop-blur-sm"
                required
              />
              <button
                type="submit"
                className="px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-lg hover:from-indigo-600 hover:to-purple-600 transition-all transform hover:scale-105"
              >
                Get Early Access
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 container mx-auto px-4 py-8 text-center border-t border-gray-800">
        <div className="flex justify-center space-x-6 mb-4">
          <a href="#" className="text-gray-400 hover:text-indigo-400 transition-colors">About</a>
          <a href="#" className="text-gray-400 hover:text-indigo-400 transition-colors">Contact</a>
          <a href="#" className="text-gray-400 hover:text-indigo-400 transition-colors">Privacy</a>
        </div>
        <p className="text-sm text-gray-500">
          Built with ❤️ by devs for devs
        </p>
      </footer>
    </div>
  )
}

export default App

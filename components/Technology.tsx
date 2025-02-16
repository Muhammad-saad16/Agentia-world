'use client'
import { motion } from "framer-motion"
import { Brain, MessageSquare, GitMerge, Shield } from "lucide-react"

const technologies = [
  {
    icon: Brain,
    title: "Autonomous Learning",
    description:
      "Self-evolving neural networks that continuously adapt to your business needs through reinforcement learning",
  },
  {
    icon: MessageSquare,
    title: "Multi-Modal Intelligence",
    description: "Advanced agents capable of processing text, voice, and visual data for comprehensive understanding",
  },
  {
    icon: GitMerge,
    title: "Cognitive Integration",
    description: "Seamless integration with existing systems through advanced cognitive APIs and neural bridges",
  },
  {
    icon: Shield,
    title: "Ethical AI Framework",
    description: "Built-in ethical guidelines and safety protocols ensuring responsible AI deployment",
  },
]

export default function Technology() {
  return (
    <section id="technology" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-glow">Neural Capabilities</h2>
          <p className="text-xl text-gray-400">Powered by next-generation artificial intelligence</p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {technologies.map((tech, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-900 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 glow-effect-subtle"
            >
              <div className="flex items-center mb-4">
                <tech.icon className="w-8 h-8 text-purple-500 mr-3 animate-float" />
                <h3 className="text-xl font-semibold text-teal-400">{tech.title}</h3>
              </div>
              <p className="text-gray-400">{tech.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}


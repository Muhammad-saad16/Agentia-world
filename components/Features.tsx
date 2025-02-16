'use client'
import { motion } from "framer-motion"
import { Brain, Cpu, Code, Globe } from "lucide-react"

const features = [
  { icon: Brain, title: "Neural Networks", description: "Advanced neural architectures for complex decision making" },
  { icon: Cpu, title: "Deep Learning", description: "Sophisticated deep learning models for pattern recognition" },
  { icon: Code, title: "Advanced ML", description: "Cutting-edge machine learning algorithms" },
  { icon: Globe, title: "Global Scale", description: "Distributed AI processing across global networks" },
]

export default function Features() {
  return (
    <section id="features" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-glow">Powered by Advanced AI</h2>
          <p className="text-xl text-gray-400">Built on cutting-edge neural architectures</p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 glow-effect-subtle"
            >
              <feature.icon className="w-12 h-12 text-purple-500 mb-4 animate-float" />
              <h3 className="text-xl font-semibold mb-2 text-teal-400">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}


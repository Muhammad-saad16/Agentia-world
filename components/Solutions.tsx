'use client'
import { motion } from "framer-motion"
import { Building2, Network, ShieldCheck } from "lucide-react"

const solutions = [
  {
    icon: Building2,
    title: "Enterprise AI",
    description: "Custom AI agents designed for enterprise-scale operations and decision-making",
  },
  {
    icon: Network,
    title: "Neural Operations",
    description: "Automated workflow optimization through distributed neural networks",
  },
  {
    icon: ShieldCheck,
    title: "Secure Intelligence",
    description: "Privacy-first AI solutions with military-grade security protocols",
  },
]

export default function Solutions() {
  return (
    <section id="solutions" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">AI Solutions</h2>
          <p className="text-xl text-gray-400">Transforming industries with intelligent agents</p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <solution.icon className="w-12 h-12 text-purple-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2">{solution.title}</h3>
              <p className="text-gray-400">{solution.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}


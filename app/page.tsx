"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Sparkles, Zap, Brain, Presentation, Wand2, Play } from "lucide-react"

export default function Component() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  const features = [
    {
      icon: <Brain className="w-6 h-6" />,
      title: "AI-Powered Creation",
      description: "Advanced AI understands your content and creates stunning presentations automatically",
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Lightning Fast",
      description: "Generate professional presentations in seconds, not hours",
    },
    {
      icon: <Wand2 className="w-6 h-6" />,
      title: "Smart Templates",
      description: "Intelligent template selection based on your content and industry",
    },
    {
      icon: <Presentation className="w-6 h-6" />,
      title: "Export Anywhere",
      description: "Export to PowerPoint, Google Slides, or PDF with one click",
    },
  ]

  const stats = [
    { number: "10M+", label: "Presentations Created" },
    { number: "500K+", label: "Happy Users" },
    { number: "99.9%", label: "Uptime" },
    { number: "4.9/5", label: "User Rating" },
  ]

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden relative">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-blue-900/20 to-teal-900/20" />
      <div
        className="absolute inset-0 opacity-30"
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(139, 92, 246, 0.15), transparent 40%)`,
        }}
      />

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white/20 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 3}s`,
            }}
          />
        ))}
      </div>

      {/* Navigation */}
      <nav className="relative z-50 flex items-center justify-between p-6 max-w-7xl mx-auto">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg flex items-center justify-center">
            <Sparkles className="w-5 h-5" />
          </div>
          <span className="text-xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            PPT.AI
          </span>
        </div>
        <div className="hidden md:flex items-center space-x-8">
          <a href="#features" className="text-gray-300 hover:text-white transition-colors">
            Features
          </a>
          <a href="#pricing" className="text-gray-300 hover:text-white transition-colors">
            Pricing
          </a>
          <a href="#about" className="text-gray-300 hover:text-white transition-colors">
            About
          </a>
          <Button
            variant="outline"
            className="border-purple-500/50 text-purple-400 hover:bg-purple-500/10 bg-transparent"
          >
            Sign In
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 pt-20 pb-32">
        <div
          className={`text-center transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <Badge className="mb-6 bg-purple-500/10 text-purple-400 border-purple-500/20 hover:bg-purple-500/20 transition-colors">
            <Sparkles className="w-4 h-4 mr-2" />
            Powered by Advanced AI
          </Badge>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Create Stunning
            <br />
            <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-teal-400 bg-clip-text text-transparent animate-pulse">
              Presentations
            </span>
            <br />
            in Seconds
          </h1>

          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
            Transform your ideas into professional presentations with AI. Just describe what you need, and watch magic
            happen.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button
              size="lg"
              className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 transform hover:scale-105"
            >
              Start Creating Free
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-gray-600 text-gray-300 hover:bg-gray-800 px-8 py-4 text-lg rounded-xl transition-all duration-300 bg-transparent"
            >
              <Play className="mr-2 w-5 h-5" />
              Watch Demo
            </Button>
          </div>

          {/* Demo Preview */}
          <div className="relative max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-2xl p-1 backdrop-blur-sm">
              <div className="bg-gray-900/50 rounded-xl p-8 backdrop-blur-sm">
                <div className="grid grid-cols-3 gap-4 mb-4">
                  <div className="h-2 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full"></div>
                  <div className="h-2 bg-gray-700 rounded-full"></div>
                  <div className="h-2 bg-gray-700 rounded-full"></div>
                </div>
                <div className="aspect-video bg-gradient-to-br from-purple-900/30 to-blue-900/30 rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <Presentation className="w-16 h-16 mx-auto mb-4 text-purple-400" />
                    <p className="text-gray-400">Your AI-generated presentation preview</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent mb-2">
                {stat.number}
              </div>
              <div className="text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="relative z-10 max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Why Choose{" "}
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">PPT.AI</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Experience the future of presentation creation with cutting-edge AI technology
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="bg-gray-900/50 border-gray-800 hover:border-purple-500/50 transition-all duration-300 hover:transform hover:scale-105 backdrop-blur-sm"
            >
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-lg flex items-center justify-center mb-4 text-purple-400">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-white">{feature.title}</h3>
                <p className="text-gray-400 leading-relaxed">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* How It Works */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            How It{" "}
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Works</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              step: "01",
              title: "Describe Your Idea",
              description: "Tell us what presentation you need in plain English",
            },
            {
              step: "02",
              title: "AI Creates Magic",
              description: "Our AI analyzes and generates a professional presentation",
            },
            {
              step: "03",
              title: "Download & Present",
              description: "Export to your favorite format and wow your audience",
            },
          ].map((item, index) => (
            <div key={index} className="text-center relative">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
                {item.step}
              </div>
              <h3 className="text-2xl font-semibold mb-4">{item.title}</h3>
              <p className="text-gray-400 leading-relaxed">{item.description}</p>
              {index < 2 && <ArrowRight className="hidden md:block absolute top-8 -right-4 w-8 h-8 text-purple-400" />}
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 py-20">
        <div className="bg-gradient-to-r from-purple-900/30 to-blue-900/30 rounded-3xl p-12 text-center backdrop-blur-sm border border-purple-500/20">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Create Amazing
            <br />
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Presentations?
            </span>
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join thousands of professionals who trust PPT.AI for their presentation needs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 transform hover:scale-105"
            >
              Get Started Free
              <Sparkles className="ml-2 w-5 h-5" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-gray-600 text-gray-300 hover:bg-gray-800 px-8 py-4 text-lg rounded-xl bg-transparent"
            >
              View Pricing
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-gray-800 mt-20">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg flex items-center justify-center">
                <Sparkles className="w-5 h-5" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                PPT.AI
              </span>
            </div>
            <div className="flex space-x-6 text-gray-400">
              <a href="#" className="hover:text-white transition-colors">
                Privacy
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Terms
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Support
              </a>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 PPT.AI. All rights reserved. Made with ❤️ for creators worldwide.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

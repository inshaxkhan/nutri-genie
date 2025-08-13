import React from 'react'
import { ChefHat, Sparkles, ArrowRight } from 'lucide-react'

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-green-600 via-yellow-400 to-green-800 text-white">
      <div className="container mx-auto px-4 py-20">
        <div className="text-center max-w-4xl mx-auto">
          {/* Logo/Icon */}
          <div className="flex justify-center mb-6">
            <div className="bg-white/20 backdrop-blur-sm rounded-full p-4">
              <ChefHat className="w-12 h-12" />
            </div>
          </div>
          
          {/* Main Heading */}
          <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
            Meet Your AI 
            <span className="bg-gradient-to-r from-yellow-400 to-black bg-clip-text text-transparent">
              {" "}NutriGenie
            </span>
          </h1>
          
          {/* Subtitle */}
          <p className="text-xl md:text-2xl mb-8 text-green-100 leading-relaxed">
            Transform your available ingredients into delicious, nutritious recipes with the power of AI
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-green-600 hover:bg-green-50 font-semibold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2">
              <Sparkles className="w-5 h-5" />
              Generate Recipe Now
              <ArrowRight className="w-5 h-5" />
            </button>
            
            <button className="border-2 border-white text-white hover:bg-white hover:text-green-600 font-semibold py-4 px-8 rounded-full transition-all duration-300">
              Learn More
            </button>
          </div>
          
          {/* Stats */}
          <div className="mt-16 grid grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold mb-2">1000+</div>
              <div className="text-green-200">Recipes Generated</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">50+</div>
              <div className="text-green-200">Dietary Options</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">24/7</div>
              <div className="text-green-200">AI Assistant</div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-20 h-20 bg-yellow-400/20 rounded-full blur-xl"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-yellow-400/20 rounded-full blur-xl"></div>
      </div>
    </section>
  )
}

export default Hero
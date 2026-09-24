import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();
  const [hoveredCard, setHoveredCard] = useState(null);
  const [activePlan, setActivePlan] = useState("pro");

  const features = [
    { icon: "🎨", title: "AI Generated", description: "Create thumbnails with powerful AI models" },
    { icon: "⚡", title: "Fast Workflow", description: "Go from idea to thumbnail in seconds" },
    { icon: "🔁", title: "Recreate Mode", description: "Iterate on existing ideas easily" },
    { icon: "✨", title: "Smart Prompts", description: "Optimized prompts for better results" }
  ];

  const testimonials = [
    { name: "Alex C.", role: "Content Creator", content: "Thumblify changed how I work!", avatar: "👨‍💻", rating: 5 },
    { name: "Sarah W.", role: "YouTuber", content: "The AI suggestions are incredible.", avatar: "👩‍🎨", rating: 5 },
    { name: "Mike T.", role: "Streamer", content: "So fast and easy to use.", avatar: "🎮", rating: 4 }
  ];

  const plans = [
    { id: "free", name: "Free", price: "$0", credits: "15 credits", features: ["Basic styles", "Standard resolution"], popular: false },
    { id: "pro", name: "Pro", price: "$9", credits: "100 credits", features: ["All styles", "High resolution", "Priority generation"], popular: true },
    { id: "max", name: "Max", price: "$29", credits: "Unlimited", features: ["Everything in Pro", "API Access", "Custom models"], popular: false }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-950 via-purple-950 to-gray-950 text-white overflow-hidden">
      {/* Hero Section */}
      <section className="relative px-6 py-20 sm:px-8 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-8 items-center">
            <div className="space-y-6">
              <span className="inline-block py-1 px-3 rounded-full bg-purple-900/50 text-purple-300 text-sm font-semibold border border-purple-700/50">
                🚀 AI Powered Thumbnail Generator
              </span>
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                Create Click-Worthy Thumbnails <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">in Seconds</span>
              </h1>
              <p className="text-lg text-gray-300">
                Stop wasting hours on design. Let AI generate high-converting thumbnails for your next viral video.
              </p>
              <div className="flex gap-4">
                <button onClick={() => navigate("/generate")} className="px-6 py-3 rounded-lg bg-purple-600 hover:bg-purple-700 font-semibold transition-colors">
                  Generate Now
                </button>
                <button onClick={() => navigate("/community")} className="px-6 py-3 rounded-lg bg-gray-800 hover:bg-gray-700 font-semibold transition-colors border border-gray-700">
                  View Creations
                </button>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-video bg-gray-900 rounded-xl border border-gray-800 shadow-2xl overflow-hidden flex items-center justify-center">
                <div className="text-gray-500 text-center">
                  <span className="text-4xl block mb-2">🖼️</span>
                  <p>Interactive Preview</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative px-6 py-20 sm:px-8 lg:px-16 bg-black/30">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Why Choose Thumblify?</h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {features.map((feature, idx) => (
              <div
                key={idx}
                className={`p-6 rounded-xl border transition-all duration-300 ${hoveredCard === idx ? 'bg-purple-900/20 border-purple-500/50 scale-105' : 'bg-gray-900/50 border-gray-800'}`}
                onMouseEnter={() => setHoveredCard(idx)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="relative px-6 py-20 sm:px-8 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Loved by Creators</h2>
          <div className="grid gap-8 md:grid-cols-3">
            {testimonials.map((testimonial, idx) => (
              <div key={idx} className="p-6 rounded-xl bg-gray-900 border border-gray-800">
                <div className="flex gap-1 mb-4 text-yellow-400">
                  {[...Array(testimonial.rating)].map((_, i) => <span key={i}>★</span>)}
                </div>
                <p className="text-gray-300 mb-6">"{testimonial.content}"</p>
                <div className="flex items-center gap-4">
                  <div className="text-3xl">{testimonial.avatar}</div>
                  <div>
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-gray-500">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="relative px-6 py-20 sm:px-8 lg:px-16 bg-black/50">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Simple Pricing</h2>
          <div className="grid gap-8 md:grid-cols-3 lg:gap-6">
            {plans.map((plan) => (
              <div
                key={plan.id}
                onClick={() => setActivePlan(plan.id)}
                className={`relative p-8 rounded-2xl border cursor-pointer transition-all duration-300 ${activePlan === plan.id ? 'bg-purple-900/10 border-purple-500' : 'bg-gray-900 border-gray-800 hover:border-gray-700'}`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-3 py-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-xs font-bold text-white">
                    Most Popular
                  </div>
                )}
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <div className="text-4xl font-bold mb-1">{plan.price}</div>
                <div className="text-purple-400 font-medium mb-6">{plan.credits}</div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 text-gray-300">
                      <span className="text-green-400">✓</span> {feature}
                    </li>
                  ))}
                </ul>
                <button className={`w-full py-3 rounded-lg font-semibold transition-colors ${activePlan === plan.id ? 'bg-purple-600 hover:bg-purple-700' : 'bg-gray-800 hover:bg-gray-700'}`}>
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative px-6 py-20 sm:px-8 lg:px-16">
        <div className="mx-auto max-w-4xl bg-gradient-to-r from-purple-900 to-indigo-900 rounded-3xl p-12 text-center border border-purple-700/50 shadow-2xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to upgrade your channel?</h2>
          <p className="text-xl text-purple-200 mb-8 max-w-2xl mx-auto">
            Join thousands of creators who are already using Thumblify to boost their click-through rates.
          </p>
          <button onClick={() => navigate("/generate")} className="px-8 py-4 rounded-xl bg-white text-purple-900 font-bold text-lg hover:bg-gray-100 transition-colors shadow-lg">
            Generate Your First Thumbnail
          </button>
        </div>
      </section>

    </div>
  );
}

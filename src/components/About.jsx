"use client"
import { useEffect, useRef, useState } from "react"
import { Leaf, Award, ArrowRight, Sparkles, Target, Users, Globe, TrendingUp, CheckCircle } from "lucide-react"

const AboutSection = () => {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const achievements = [
    {
      icon: <Users size={24} className="text-green-600" />,
      title: "Global Reach",
      description: "Serving clients across 50+ countries worldwide",
    },
    {
      icon: <Globe size={24} className="text-green-600" />,
      title: "Sustainability Focus",
      description: "100% commitment to eco-friendly practices",
    },
    {
      icon: <TrendingUp size={24} className="text-green-600" />,
      title: "Innovation Rate",
      description: "20+ new solutions developed annually",
    },
  ]

  const values = [
    "Science-driven innovation",
    "Sustainable practices",
    "Customer-centric approach",
    "Quality excellence",
    "Global collaboration",
    "Continuous improvement",
  ]

  return (
    <section
      ref={sectionRef}
      id="about"
      className="py-32 bg-gradient-to-br from-green-100 to-green-200 relative overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-green-100/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-green-200/30 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-green-300/20 rounded-full blur-2xl animate-pulse delay-500"></div>
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-green-400/15 rounded-full blur-xl animate-pulse delay-1500"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Main Content Grid */}
        <div className="grid md:grid-cols-2 gap-16 items-center mb-20">
          {/* Left Content */}
          <div
            className={`transition-all duration-1000 ease-out ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"
            }`}
          >
            <div className="mb-6">
              <span
                className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-green-200 text-green-800 transition-all duration-700 delay-200 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                }`}
              >
                <Sparkles size={16} className="mr-2" />
                Innovation Meets Tradition
              </span>
            </div>

            <h2
              className={`text-5xl md:text-6xl font-bold text-gray-900 mb-8 leading-tight transition-all duration-700 delay-300 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              Scaling new heights through{" "}
              <span className="text-green-600 relative">
                science
                <div className="absolute -bottom-3 left-0 w-full h-1.5 bg-gradient-to-r from-green-400 to-green-600 rounded-full transform scale-x-0 animate-[scaleX_1s_ease-out_1.5s_forwards]"></div>
              </span>
            </h2>

            <div className="space-y-6 mb-10">
              <p
                className={`text-xl text-gray-600 leading-relaxed transition-all duration-700 delay-500 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                }`}
              >
                We're all about pushing boundaries while staying grounded. We explore the cutting edge of food science
                to create bold, effective, and scalable seasoning solutions that transform the way people experience
                flavor.
              </p>
              <p
                className={`text-xl text-gray-600 leading-relaxed transition-all duration-700 delay-700 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                }`}
              >
                Our ambition? To innovate with purpose — delivering flavour that's not only exciting but also
                responsible for people and the planet. Every solution we create is designed to make a lasting, positive
                impact.
              </p>
            </div>

            <div
              className={`group cursor-pointer transition-all duration-700 delay-900 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
            >
              <div className="flex items-center text-green-600 font-semibold text-lg group-hover:text-green-700 transition-all duration-300">
                <span className="mr-4 group-hover:mr-5 transition-all duration-300">Learn about our process</span>
                <ArrowRight
                  size={24}
                  className="transform group-hover:translate-x-2 transition-transform duration-300"
                />
              </div>
              <div className="w-0 group-hover:w-64 h-1 bg-gradient-to-r from-green-600 to-green-400 transition-all duration-500 mt-2 rounded-full"></div>
            </div>
          </div>

          {/* Right Content - Enhanced Stats Card */}
          <div
            className={`transition-all duration-1000 ease-out delay-300 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"
            }`}
          >
            <div className="relative">
              {/* Main card */}
              <div className="bg-gradient-to-br from-green-50 via-white to-green-100 rounded-3xl p-10 shadow-2xl border border-green-100/50 backdrop-blur-sm relative overflow-hidden group hover:shadow-3xl transition-all duration-500">
                {/* Animated background pattern */}
                <div className="absolute inset-0 bg-gradient-to-br from-green-100/10 to-green-200/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                {/* Floating elements */}
                <div className="absolute top-6 right-6 w-3 h-3 bg-green-400 rounded-full animate-ping"></div>
                <div className="absolute bottom-8 left-8 w-2 h-2 bg-green-500 rounded-full animate-pulse delay-500"></div>

                <div className="grid grid-cols-2 gap-10 relative z-10 mb-8">
                  {/* Years of Expertise */}
                  <div
                    className={`text-center group/item transition-all duration-500 delay-1000 ${
                      isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                    }`}
                  >
                    <div className="bg-gradient-to-br from-green-500 to-green-700 w-24 h-24 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover/item:shadow-xl group-hover/item:scale-110 transition-all duration-300 group-hover/item:rotate-3">
                      <Leaf className="text-white drop-shadow-sm" size={40} />
                    </div>
                    <h3 className="text-4xl font-bold text-gray-900 mb-3 group-hover/item:text-green-700 transition-colors duration-300">
                      90+
                    </h3>
                    <p className="text-gray-600 font-medium text-lg">Years of Expertise</p>
                    <div className="w-0 group-hover/item:w-full h-1 bg-green-400 mx-auto mt-3 transition-all duration-500 rounded-full"></div>
                  </div>

                  {/* Flavour Solutions */}
                  <div
                    className={`text-center group/item transition-all duration-500 delay-1200 ${
                      isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                    }`}
                  >
                    <div className="bg-gradient-to-br from-green-500 to-green-700 w-24 h-24 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover/item:shadow-xl group-hover/item:scale-110 transition-all duration-300 group-hover/item:-rotate-3">
                      <Award className="text-white drop-shadow-sm" size={40} />
                    </div>
                    <h3 className="text-4xl font-bold text-gray-900 mb-3 group-hover/item:text-green-700 transition-colors duration-300">
                      100+
                    </h3>
                    <p className="text-gray-600 font-medium text-lg">Flavour Solutions</p>
                    <div className="w-0 group-hover/item:w-full h-1 bg-green-400 mx-auto mt-3 transition-all duration-500 rounded-full"></div>
                  </div>
                </div>

                {/* Additional stat */}
                <div
                  className={`pt-8 border-t border-green-200/50 text-center transition-all duration-500 delay-1400 ${
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                  }`}
                >
                  <div className="flex items-center justify-center space-x-3 text-green-700 mb-4">
                    <Target size={24} />
                    <span className="font-semibold text-lg">Sustainable Innovation Leader</span>
                  </div>
                  <p className="text-gray-600 text-sm">Leading the industry in eco-friendly seasoning solutions</p>
                </div>
              </div>

              {/* Floating accent elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-green-400 rounded-full opacity-20 animate-bounce delay-1000"></div>
              <div className="absolute -bottom-3 -left-3 w-6 h-6 bg-green-500 rounded-full opacity-30 animate-pulse delay-1500"></div>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div
          className={`bg-white/60 backdrop-blur-sm rounded-3xl p-12 shadow-lg border border-green-100/50 transition-all duration-1000 delay-2400 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          <div className="text-center mb-10">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our <span className="text-green-600">Core Values</span>
            </h3>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do, from research to delivery.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((value, index) => (
              <div
                key={index}
                className={`group flex items-center space-x-3 bg-green-50 p-4 rounded-xl hover:bg-green-100 transition-all duration-300 hover:scale-105 ${
                  isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
                }`}
                style={{
                  transitionDelay: `${2600 + index * 100}ms`,
                }}
              >
                <CheckCircle
                  size={20}
                  className="text-green-600 group-hover:scale-110 transition-transform duration-300"
                />
                <span className="font-medium text-gray-800 group-hover:text-green-700 transition-colors duration-300">
                  {value}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scaleX {
          to {
            transform: scaleX(1);
          }
        }
      `}</style>
    </section>
  )
}

export default AboutSection

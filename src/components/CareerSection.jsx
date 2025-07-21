"use client"
import { useEffect, useRef, useState } from "react"
import { Users, ArrowRight, Sparkles, Heart, Lightbulb, TrendingUp, Star } from "lucide-react"

const CareerSection = () => {
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

  const benefits = [
    {
      title: "Innovation Culture",
      description: "Challenge conventions and embrace curiosity",
      icon: <Lightbulb size={20} className="text-green-600" />,
    },
    {
      title: "Real Impact",
      description: "Create solutions that matter to people and planet",
      icon: <Heart size={20} className="text-green-600" />,
    },
    {
      title: "Growth Opportunities",
      description: "Develop your skills in a supportive environment",
      icon: <TrendingUp size={20} className="text-green-600" />,
    },
  ]

  return (
    <section ref={sectionRef} id="career" className="py-20 bg-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-green-50/40 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-green-100/30 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-green-200/20 rounded-full blur-2xl animate-pulse delay-500"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div
            className={`transition-all duration-500 ease-out ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"
            }`}
          >
            <div className="mb-4">
              <span
                className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800 transition-all duration-300 delay-100 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                }`}
              >
                <Star size={16} className="mr-2" />
                Join Our Mission
              </span>
            </div>

            <h2
              className={`text-4xl md:text-5xl font-bold text-gray-900 mb-6 transition-all duration-300 delay-200 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              Join{" "}
              <span className="text-green-600 relative">
                Yashasveeni
                <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-green-400 to-green-600 rounded-full transform scale-x-0 animate-[scaleX_0.5s_ease-out_0.5s_forwards]"></div>
              </span>
            </h2>

            <h3
              className={`text-2xl font-semibold text-gray-800 mb-4 transition-all duration-300 delay-300 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
            >
              Purpose Starts with <span className="text-green-600 font-bold">People.</span>
            </h3>

            <div className="space-y-4 mb-8">
              <p
                className={`text-lg text-gray-600 leading-relaxed transition-all duration-300 delay-400 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                }`}
              >
                Our purpose is driven by people - people who challenge convention, embrace curiosity, and bring bold
                ideas to the table. From flavour creation to food science, our teams work together to spark innovation
                and deliver real-world impact.
              </p>
              <p
                className={`text-lg text-gray-600 leading-relaxed transition-all duration-300 delay-500 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                }`}
              >
                We're reimagining the future of food — crafting seasoning solutions that not only taste great, but
                support well-being and sustainability.
              </p>
            </div>

            <div
              className={`transition-all duration-300 delay-600 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
            >
              <button className="group bg-green-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-green-700 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl relative overflow-hidden">
                <span className="relative z-10 flex items-center">
                  Discover Careers
                  <ArrowRight
                    size={20}
                    className="ml-2 transform group-hover:translate-x-1 transition-transform duration-200"
                  />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-green-700 opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
              </button>
            </div>
          </div>

          {/* Right Content - Enhanced Card */}
          <div
            className={`transition-all duration-500 ease-out delay-100 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"
            }`}
          >
            <div className="relative">
              {/* Main card */}
              <div className="bg-gradient-to-br from-green-50 via-green-100 to-green-200 rounded-3xl p-8 shadow-2xl border border-green-100/50 backdrop-blur-sm relative overflow-hidden group hover:shadow-3xl transition-all duration-300">
                {/* Animated background pattern */}
                <div className="absolute inset-0 bg-gradient-to-br from-green-100/20 to-green-200/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                {/* Floating elements */}
                <div className="absolute top-4 right-4 w-2 h-2 bg-green-400 rounded-full animate-ping"></div>
                <div className="absolute bottom-6 left-6 w-1 h-1 bg-green-500 rounded-full animate-pulse delay-500"></div>

                {/* Header */}
                <div
                  className={`text-center mb-8 relative z-10 transition-all duration-300 delay-700 ${
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                  }`}
                >
                  <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 mb-4 group-hover:bg-white/80 transition-all duration-200">
                    <Users
                      className="text-green-600 mx-auto mb-4 transform group-hover:scale-110 transition-transform duration-200"
                      size={64}
                    />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Join Our Team</h3>
                  <p className="text-gray-600 font-medium">Be part of something bigger</p>
                  <div className="w-16 h-0.5 bg-green-400 mx-auto mt-3 rounded-full"></div>
                </div>

                {/* Benefits */}
                <div className="space-y-4 relative z-10">
                  {benefits.map((benefit, index) => (
                    <div
                      key={index}
                      className={`group/item bg-white/80 backdrop-blur-sm rounded-xl p-4 shadow-sm hover:shadow-md hover:bg-white transition-all duration-150 hover:scale-[1.02] border border-white/50 ${
                        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                      }`}
                      style={{
                        transitionDelay: `${800 + index * 100}ms`,
                      }}
                    >
                      <div className="flex items-start space-x-3">
                        <div className="bg-green-100 p-2 rounded-lg group-hover/item:bg-green-200 transition-colors duration-150">
                          {benefit.icon}
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-gray-900 group-hover/item:text-green-700 transition-colors duration-200">
                            {benefit.title}
                          </h4>
                          <p className="text-sm text-gray-600 mt-1 leading-relaxed">{benefit.description}</p>
                        </div>
                        <ArrowRight
                          size={16}
                          className="text-gray-400 group-hover/item:text-green-600 transform group-hover/item:translate-x-1 transition-all duration-200 opacity-0 group-hover/item:opacity-100"
                        />
                      </div>
                    </div>
                  ))}
                </div>

                {/* Bottom accent */}
                <div
                  className={`mt-8 pt-6 border-t border-green-300/30 text-center transition-all duration-300 delay-1000 ${
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                  }`}
                >
                  <div className="flex items-center justify-center space-x-2 text-green-700">
                    <Sparkles size={16} />
                    <span className="font-medium text-sm">Ready to make an impact?</span>
                    <Sparkles size={16} />
                  </div>
                </div>
              </div>

              {/* Floating accent elements */}
              <div className="absolute -top-3 -right-3 w-6 h-6 bg-green-300 rounded-full opacity-30 animate-bounce delay-500"></div>
              <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-green-400 rounded-full opacity-40 animate-pulse delay-700"></div>
              <div className="absolute top-1/2 -right-1 w-3 h-3 bg-green-500 rounded-full opacity-20 animate-ping delay-1000"></div>
            </div>
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

export default CareerSection
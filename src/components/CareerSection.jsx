// "use client"
// import { useEffect, useRef, useState } from "react"
// import { Users, ArrowRight, Sparkles, Heart, Lightbulb, TrendingUp, Star } from "lucide-react"

// const CareerSection = () => {
//   const [isVisible, setIsVisible] = useState(false)
//   const sectionRef = useRef(null)

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           setIsVisible(true)
//         }
//       },
//       { threshold: 0.1 },
//     )

//     if (sectionRef.current) {
//       observer.observe(sectionRef.current)
//     }

//     return () => observer.disconnect()
//   }, [])

//   const benefits = [
//     {
//       title: "Innovation Culture",
//       description: "Challenge conventions and embrace curiosity",
//       icon: <Lightbulb size={20} className="text-green-600" />,
//     },
//     {
//       title: "Real Impact",
//       description: "Create solutions that matter to people and planet",
//       icon: <Heart size={20} className="text-green-600" />,
//     },
//     {
//       title: "Growth Opportunities",
//       description: "Develop your skills in a supportive environment",
//       icon: <TrendingUp size={20} className="text-green-600" />,
//     },
//   ]

//   return (
//     <section ref={sectionRef} id="career" className="py-20 bg-white relative overflow-hidden">
//       {/* Background decorative elements */}
//       <div className="absolute inset-0 overflow-hidden">
//         <div className="absolute -top-40 -right-40 w-80 h-80 bg-green-50/40 rounded-full blur-3xl animate-pulse"></div>
//         <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-green-100/30 rounded-full blur-3xl animate-pulse delay-1000"></div>
//         <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-green-200/20 rounded-full blur-2xl animate-pulse delay-500"></div>
//       </div>

//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
//         <div className="grid md:grid-cols-2 gap-12 items-center">
//           {/* Left Content */}
//           <div
//             className={`transition-all duration-500 ease-out ${
//               isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"
//             }`}
//           >
//             <div className="mb-4">
//               <span
//                 className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800 transition-all duration-300 delay-100 ${
//                   isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
//                 }`}
//               >
//                 <Star size={16} className="mr-2" />
//                 Join Our Mission
//               </span>
//             </div>

//             <h2
//               className={`text-4xl md:text-5xl font-bold text-gray-900 mb-6 transition-all duration-300 delay-200 ${
//                 isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
//               }`}
//             >
//               Join{" "}
//               <span className="text-green-600 relative">
//                 Yashasveeni
//                 <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-green-400 to-green-600 rounded-full transform scale-x-0 animate-[scaleX_0.5s_ease-out_0.5s_forwards]"></div>
//               </span>
//             </h2>

//             <h3
//               className={`text-2xl font-semibold text-gray-800 mb-4 transition-all duration-300 delay-300 ${
//                 isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
//               }`}
//             >
//               Purpose Starts with <span className="text-green-600 font-bold">People.</span>
//             </h3>

//             <div className="space-y-4 mb-8">
//               <p
//                 className={`text-lg text-gray-600 leading-relaxed transition-all duration-300 delay-400 ${
//                   isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
//                 }`}
//               >
//                 Our purpose is driven by people - people who challenge convention, embrace curiosity, and bring bold
//                 ideas to the table. From flavour creation to food science, our teams work together to spark innovation
//                 and deliver real-world impact.
//               </p>
//               <p
//                 className={`text-lg text-gray-600 leading-relaxed transition-all duration-300 delay-500 ${
//                   isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
//                 }`}
//               >
//                 We're reimagining the future of food — crafting seasoning solutions that not only taste great, but
//                 support well-being and sustainability.
//               </p>
//             </div>

//             <div
//               className={`transition-all duration-300 delay-600 ${
//                 isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
//               }`}
//             >
//               <button className="group bg-green-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-green-700 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl relative overflow-hidden">
//                 <span className="relative z-10 flex items-center">
//                   Discover Careers
//                   <ArrowRight
//                     size={20}
//                     className="ml-2 transform group-hover:translate-x-1 transition-transform duration-200"
//                   />
//                 </span>
//                 <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-green-700 opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
//               </button>
//             </div>
//           </div>

//           {/* Right Content - Enhanced Card */}
//           <div
//             className={`transition-all duration-500 ease-out delay-100 ${
//               isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"
//             }`}
//           >
//             <div className="relative">
//               {/* Main card */}
//               <div className="bg-gradient-to-br from-green-50 via-green-100 to-green-200 rounded-3xl p-8 shadow-2xl border border-green-100/50 backdrop-blur-sm relative overflow-hidden group hover:shadow-3xl transition-all duration-300">
//                 {/* Animated background pattern */}
//                 <div className="absolute inset-0 bg-gradient-to-br from-green-100/20 to-green-200/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

//                 {/* Floating elements */}
//                 <div className="absolute top-4 right-4 w-2 h-2 bg-green-400 rounded-full animate-ping"></div>
//                 <div className="absolute bottom-6 left-6 w-1 h-1 bg-green-500 rounded-full animate-pulse delay-500"></div>

//                 {/* Header */}
//                 <div
//                   className={`text-center mb-8 relative z-10 transition-all duration-300 delay-700 ${
//                     isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
//                   }`}
//                 >
//                   <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 mb-4 group-hover:bg-white/80 transition-all duration-200">
//                     <Users
//                       className="text-green-600 mx-auto mb-4 transform group-hover:scale-110 transition-transform duration-200"
//                       size={64}
//                     />
//                   </div>
//                   <h3 className="text-2xl font-bold text-gray-900 mb-2">Join Our Team</h3>
//                   <p className="text-gray-600 font-medium">Be part of something bigger</p>
//                   <div className="w-16 h-0.5 bg-green-400 mx-auto mt-3 rounded-full"></div>
//                 </div>

//                 {/* Benefits */}
//                 <div className="space-y-4 relative z-10">
//                   {benefits.map((benefit, index) => (
//                     <div
//                       key={index}
//                       className={`group/item bg-white/80 backdrop-blur-sm rounded-xl p-4 shadow-sm hover:shadow-md hover:bg-white transition-all duration-150 hover:scale-[1.02] border border-white/50 ${
//                         isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
//                       }`}
//                       style={{
//                         transitionDelay: `${800 + index * 100}ms`,
//                       }}
//                     >
//                       <div className="flex items-start space-x-3">
//                         <div className="bg-green-100 p-2 rounded-lg group-hover/item:bg-green-200 transition-colors duration-150">
//                           {benefit.icon}
//                         </div>
//                         <div className="flex-1">
//                           <h4 className="font-semibold text-gray-900 group-hover/item:text-green-700 transition-colors duration-200">
//                             {benefit.title}
//                           </h4>
//                           <p className="text-sm text-gray-600 mt-1 leading-relaxed">{benefit.description}</p>
//                         </div>
//                         <ArrowRight
//                           size={16}
//                           className="text-gray-400 group-hover/item:text-green-600 transform group-hover/item:translate-x-1 transition-all duration-200 opacity-0 group-hover/item:opacity-100"
//                         />
//                       </div>
//                     </div>
//                   ))}
//                 </div>

//                 {/* Bottom accent */}
//                 <div
//                   className={`mt-8 pt-6 border-t border-green-300/30 text-center transition-all duration-300 delay-1000 ${
//                     isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
//                   }`}
//                 >
//                   <div className="flex items-center justify-center space-x-2 text-green-700">
//                     <Sparkles size={16} />
//                     <span className="font-medium text-sm">Ready to make an impact?</span>
//                     <Sparkles size={16} />
//                   </div>
//                 </div>
//               </div>

//               {/* Floating accent elements */}
//               <div className="absolute -top-3 -right-3 w-6 h-6 bg-green-300 rounded-full opacity-30 animate-bounce delay-500"></div>
//               <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-green-400 rounded-full opacity-40 animate-pulse delay-700"></div>
//               <div className="absolute top-1/2 -right-1 w-3 h-3 bg-green-500 rounded-full opacity-20 animate-ping delay-1000"></div>
//             </div>
//           </div>
//         </div>
//       </div>

//       <style jsx>{`
//         @keyframes scaleX {
//           to {
//             transform: scaleX(1);
//           }
//         }
//       `}</style>
//     </section>
//   )
// }

// export default CareerSection


//--------------------------------------------

"use client"

import { useEffect, useRef, useState } from "react"
import { Users, ArrowRight, Sparkles, Heart, Lightbulb, TrendingUp, Star, Zap, Globe, Award } from "lucide-react"

const CareerSection = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [hoveredBenefit, setHoveredBenefit] = useState(null)
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
      description: "Challenge conventions and embrace curiosity in everything we do",
      icon: <Lightbulb size={20} className="text-emerald-500" />,
      // gradient: "from-emerald-500 to-teal-500",
      bgColor: "bg-teal-50",
      hoverBg: "hover:bg-teal-100",
    },
    {
      title: "Global Impact",
      description: "Create solutions that matter to people and planet worldwide",
      icon: <Globe size={20} className="text-emerald-600" />,
      // gradient: "from-emerald-600 to-green-600",
      bgColor: "bg-teal-50",
      hoverBg: "hover:bg-teal-100",
    },
    {
      title: "Growth Excellence",
      description: "Develop your skills with mentorship and learning opportunities",
      icon: <TrendingUp size={20} className="text-teal-500" />,
      // gradient: "from-teal-500 to-emerald-500",
      bgColor: "bg-teal-50",
      hoverBg: "hover:bg-teal-100",
    },
    {
      title: "Recognition & Rewards",
      description: "Your contributions are valued and celebrated",
      icon: <Award size={20} className="text-green-500" />,
      // gradient: "from-green-500 to-emerald-600",
      bgColor: "bg-teal-50",
      hoverBg: "hover:bg-teal-100",
    },
  ]

  return (
    <section
      ref={sectionRef}
      id="career"
      className="py-24 bg-gradient-to-br from-slate-50 via-emerald-50/30 to-white relative overflow-hidden"
    >
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Primary gradient orbs */}
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-emerald-400/20 to-teal-400/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-tr from-green-400/15 to-emerald-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>

        {/* Secondary floating elements */}
        <div className="absolute top-1/4 left-1/3 w-32 h-32 bg-emerald-300/10 rounded-full blur-2xl animate-pulse delay-500"></div>
        <div className="absolute bottom-1/3 right-1/4 w-24 h-24 bg-teal-300/15 rounded-full blur-xl animate-pulse delay-700"></div>

        {/* Geometric patterns */}
        <div className="absolute top-20 right-20 w-2 h-2 bg-emerald-400 rounded-full animate-ping opacity-60"></div>
        <div className="absolute bottom-32 left-32 w-1 h-1 bg-teal-500 rounded-full animate-pulse delay-300 opacity-40"></div>
        <div className="absolute top-1/2 left-20 w-1.5 h-1.5 bg-green-400 rounded-full animate-bounce delay-1000 opacity-50"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Enhanced Left Content */}
          <div
            className={`transition-all duration-700 ease-out ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"
            }`}
          >
            {/* Badge */}
            <div className="mb-6">
              <span
                className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-semibold bg-gradient-to-r from-emerald-100 to-teal-100 text-emerald-800 border border-emerald-200/50 shadow-sm transition-all duration-300 delay-100 hover:shadow-md hover:scale-105 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                }`}
              >
                <Star size={16} className="mr-2 text-emerald-500 animate-pulse" />
                Join Our Mission
                <Zap size={14} className="ml-2 text-teal-500" />
              </span>
            </div>

            {/* Main Heading */}
            <h2
              className={`text-5xl md:text-6xl font-bold text-slate-900 mb-6 transition-all duration-500 delay-200 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              Join{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-teal-600 to-green-600 relative">
                Yashasveeni
                <div className="absolute -bottom-3 left-0 w-full h-1.5 bg-gradient-to-r from-emerald-400 via-teal-400 to-green-400 rounded-full transform scale-x-0 animate-[scaleX_0.8s_ease-out_0.7s_forwards] shadow-sm"></div>
              </span>
            </h2>

            {/* Subheading */}
            <h3
              className={`text-3xl font-bold text-slate-700 mb-6 transition-all duration-500 delay-300 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
            >
              Purpose Starts with{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600 font-extrabold">
                People.
              </span>
            </h3>

            {/* Description */}
            <div className="space-y-5 mb-10">
              <p
                className={`text-lg text-slate-600 leading-relaxed transition-all duration-500 delay-400 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                }`}
              >
                Our purpose is driven by people — people who challenge convention, embrace curiosity, and bring bold
                ideas to the table. From flavour creation to food science, our teams work together to spark innovation
                and deliver real-world impact.
              </p>
              <p
                className={`text-lg text-slate-600 leading-relaxed transition-all duration-500 delay-500 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                }`}
              >
                We're reimagining the future of food — crafting seasoning solutions that not only taste great, but
                support well-being and sustainability for generations to come.
              </p>
            </div>

            {/* CTA Button */}
            <div
              className={`transition-all duration-500 delay-600 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
            >
              <button className="group relative bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-10 py-5 rounded-2xl text-lg font-bold hover:from-emerald-700 hover:to-teal-700 transform hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl overflow-hidden">
                <span className="relative z-10 flex items-center">
                  Discover Careers
                  <ArrowRight
                    size={22}
                    className="ml-3 transform group-hover:translate-x-2 transition-transform duration-300"
                  />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-teal-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
            </div>
          </div>

          {/* Enhanced Right Content */}
          <div
            className={`transition-all duration-700 ease-out delay-200 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"
            }`}
          >
            <div className="relative">
              {/* Main Enhanced Card */}
              <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-10 shadow-2xl border border-emerald-100/50 relative overflow-hidden group hover:shadow-3xl transition-all duration-500 hover:bg-white">
                {/* Animated background gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-50/20 via-teal-50/10 to-green-50/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                {/* Dynamic floating elements */}
                <div className="absolute top-6 right-6 w-3 h-3 bg-emerald-400 rounded-full animate-ping opacity-60"></div>
                <div className="absolute bottom-8 left-8 w-2 h-2 bg-teal-500 rounded-full animate-pulse delay-500 opacity-40"></div>
                <div className="absolute top-1/3 right-12 w-1.5 h-1.5 bg-green-400 rounded-full animate-bounce delay-700 opacity-50"></div>

                {/* Header Section */}
                <div
                  className={`text-center mb-10 relative z-10 transition-all duration-500 delay-700 ${
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                  }`}
                >
                  <div className="bg-gradient-to-br from-slate-50 to-emerald-50/50 rounded-3xl p-8 mb-6 group-hover:from-white group-hover:to-emerald-50 transition-all duration-300 shadow-inner">
                    <Users
                      className="text-emerald-500 mx-auto mb-4 transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 drop-shadow-sm"
                      size={72}
                    />
                  </div>
                  <h3 className="text-3xl font-bold text-slate-900 mb-3 group-hover:text-emerald-700 transition-colors duration-300">
                    Join Our Team
                  </h3>
                  <p className="text-slate-600 font-semibold text-lg">Be part of something extraordinary</p>
                  <div className="w-20 h-1 bg-gradient-to-r from-emerald-500 to-teal-500 mx-auto mt-4 rounded-full shadow-sm"></div>
                </div>

                {/* Enhanced Benefits Grid */}
                <div className="grid gap-4 relative z-10 mb-8">
                  {benefits.map((benefit, index) => (
                    <div
                      key={index}
                      className={`group/item ${benefit.bgColor} ${benefit.hoverBg} rounded-2xl p-5 shadow-sm hover:shadow-lg transition-all duration-500 hover:scale-[1.02] border border-emerald-100/50 cursor-pointer ${
                        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                      }`}
                      
                      onMouseEnter={() => setHoveredBenefit(index)}
                      onMouseLeave={() => setHoveredBenefit(null)}
                    >
                      <div className="flex items-start space-x-4">
                        <div
                          className={`bg-white p-3 rounded-xl group-hover/item:bg-gradient-to-br group-hover/item:text-white transition-all duration-300 shadow-sm`}
                        >
                          {benefit.icon}
                        </div>
                        <div className="flex-1">
                          <h4 className="font-bold text-slate-900 group-hover/item:text-emerald-700 transition-colors duration-300 text-lg">
                            {benefit.title}
                          </h4>
                          <p className="text-slate-600 mt-2 leading-relaxed group-hover/item:text-slate-700 transition-colors duration-300">
                            {benefit.description}
                          </p>
                        </div>
                        <ArrowRight
                          size={18}
                          className={`text-slate-400 group-hover/item:text-emerald-500 transform transition-all duration-300 ${
                            hoveredBenefit === index ? "translate-x-2 opacity-100" : "translate-x-0 opacity-0"
                          }`}
                        />
                      </div>
                    </div>
                  ))}
                </div>

                {/* Enhanced Bottom Section */}
                <div
                  className={`pt-8 border-t border-gradient-to-r from-emerald-200/50 to-teal-200/50 text-center transition-all duration-500 delay-1200 ${
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                  }`}
                >
                  <div className="flex items-center justify-center space-x-3 text-emerald-600 mb-4">
                    <Sparkles size={18} className="animate-pulse" />
                    <span className="font-bold text-lg bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                      Ready to make an impact?
                    </span>
                    <Sparkles size={18} className="animate-pulse delay-500" />
                  </div>
                  <div className="flex justify-center space-x-2">
                    {[...Array(5)].map((_, i) => (
                      <div
                        key={i}
                        className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse opacity-60"
                        style={{ animationDelay: `${i * 200}ms` }}
                      ></div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Enhanced Floating Accent Elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-br from-emerald-400 to-teal-400 rounded-full opacity-40 animate-bounce delay-500 shadow-lg"></div>
              <div className="absolute -bottom-3 -left-3 w-6 h-6 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full opacity-50 animate-pulse delay-700 shadow-md"></div>
              <div className="absolute top-1/2 -right-2 w-4 h-4 bg-gradient-to-br from-teal-400 to-emerald-400 rounded-full opacity-30 animate-ping delay-1000 shadow-sm"></div>
              <div className="absolute bottom-1/4 -left-1 w-3 h-3 bg-gradient-to-br from-emerald-500 to-green-500 rounded-full opacity-40 animate-bounce delay-1200 shadow-sm"></div>
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
        .shadow-3xl {
          box-shadow: 0 35px 60px -12px rgba(0, 0, 0, 0.25);
        }
      `}</style>
    </section>
  )
}

export default CareerSection

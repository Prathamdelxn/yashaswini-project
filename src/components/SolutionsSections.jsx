// "use client"
// import { useEffect, useRef, useState } from "react"
// import { Leaf, Award, Target, ArrowRight, Sparkles } from "lucide-react"

// const SolutionsSection = () => {
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

//   const solutions = [
//     {
//       title: "Custom Seasoning Blends",
//       description:
//         "Tailored flavour profiles crafted to meet your specific product requirements and consumer preferences.",
//       icon: <Leaf className="text-green-800" size={48} />,
//       gradient: "from-green-100 to-green-200",
//     },
//     {
//       title: "Food Science Innovation",
//       description: "Cutting-edge research and development to create next-generation seasoning solutions.",
//       icon: <Award className="text-green-800" size={48} />,
//       gradient: "from-green-100 to-green-200",
//     },
//     {
//       title: "Sustainable Solutions",
//       description: "Environmentally conscious products that support both great taste and planetary health.",
//       icon: <Target className="text-green-800" size={48} />,
//       gradient: "from-green-100 to-green-200",
//     },
//   ]

//   return (
//     <section
//       ref={sectionRef}
//       id="solutions"
//       className="py-20 bg-gradient-to-b from-[#eefbf0] to-[#dcfdc2] relative overflow-hidden"
//     >
//       {/* Background decorative elements */}
//       <div className="absolute inset-0 overflow-hidden">
//         <div className="absolute -top-40 -right-40 w-96 h-96 bg-amber-100/30 rounded-full blur-3xl animate-pulse"></div>
//         <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-orange-100/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
//         <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-yellow-100/20 rounded-full blur-2xl animate-pulse delay-500"></div>
//       </div>

//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
//         {/* Header Section */}
//         <div className="text-center mb-16">
//           <div className="mb-4">
//             <span
//               className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-green-100 text-green-800 transition-all duration-700 delay-200 ${
//                 isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
//               }`}
//             >
//               <Sparkles size={16} className="mr-2" />
//               Comprehensive Solutions
//             </span>
//           </div>

//           <h2
//             className={`text-4xl md:text-5xl font-bold text-gray-900 mb-6 transition-all duration-700 delay-300 ${
//               isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
//             }`}
//           >
//             Our{" "}
//             <span className="text-green-600 relative">
//               Solutions
//               <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-green-400 to-green-600 rounded-full transform scale-x-0 animate-[scaleX_1s_ease-out_1.5s_forwards]"></div>
//             </span>{" "}
//             and Expertise
//           </h2>

//           <p
//             className={`text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed transition-all duration-700 delay-500 ${
//               isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
//             }`}
//           >
//             From creating solutions that are better for consumers to crafting products that have a real, lasting impact.
//           </p>
//         </div>

//         {/* Solutions Cards */}
//         <div className="grid md:grid-cols-3 gap-8 mb-16">
//           {solutions.map((solution, index) => (
//             <div
//               key={index}
//               className={`group relative bg-gradient-to-br ${solution.gradient} rounded-3xl p-8 shadow-xl hover:shadow-2xl transform hover:-translate-y-3 hover:scale-105 transition-all duration-500 overflow-hidden ${
//                 isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
//               }`}
//               style={{
//                 transitionDelay: `${600 + index * 200}ms`,
//               }}
//             >
//               {/* Card background pattern */}
//               <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

//               {/* Floating elements */}
//               <div className="absolute top-4 right-4 w-2 h-2 bg-green-300/50 rounded-full animate-ping"></div>
//               <div className="absolute bottom-6 left-6 w-1 h-1 bg-green-400/40 rounded-full animate-pulse delay-500"></div>

//               {/* Content */}
//               <div className="relative z-10">
//                 <div className="mb-6 transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
//                   <div className="bg-white/30 backdrop-blur-sm rounded-2xl p-4 w-fit">{solution.icon}</div>
//                 </div>

//                 <h3 className="text-2xl font-bold text-green-900 mb-4 group-hover:text-green-800 transition-colors duration-300">
//                   {solution.title}
//                 </h3>

//                 <p className="text-green-700 leading-relaxed mb-6 group-hover:text-green-800 transition-colors duration-300">
//                   {solution.description}
//                 </p>

//                 {/* Learn more link */}
//                 <div className="flex items-center text-green-800/80 group-hover:text-green-800 font-medium cursor-pointer transition-all duration-300">
//                   <span className="mr-2 group-hover:mr-3 transition-all duration-300">Learn more</span>
//                   <ArrowRight
//                     size={16}
//                     className="transform group-hover:translate-x-1 transition-transform duration-300"
//                   />
//                 </div>

//                 {/* Hover line */}
//                 <div className="w-0 group-hover:w-24 h-0.5 bg-green-500/60 transition-all duration-500 mt-2"></div>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Bottom Section */}
//         <div
//           className={`text-center bg-green-50/80 backdrop-blur-sm rounded-3xl p-12 shadow-lg border border-green-100/50 transition-all duration-700 delay-1200 ${
//             isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
//           }`}
//         >
//           <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
//             A Small Detail.{" "}
//             <span className="text-green-600 relative">
//               A Big Difference.
//               <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-green-400 to-green-600 rounded-full"></div>
//             </span>
//           </h3>

//           <p className="text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed">
//             We've spent over 90 years mastering the science of flavour — partnering with the food industry to deliver
//             seasoning solutions that are bold, effective, and built for impact.
//           </p>

//           {/* Decorative elements */}
//           <div className="flex justify-center items-center mt-8 space-x-4">
//             <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
//             <div className="w-1 h-1 bg-green-500 rounded-full animate-pulse delay-200"></div>
//             <div className="w-2 h-2 bg-green-600 rounded-full animate-pulse delay-400"></div>
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

// export default SolutionsSection


//--------------------------------------

"use client"
import { useEffect, useRef, useState } from "react"
import { Leaf, Award, Target, ArrowRight, Sparkles } from "lucide-react"

const SolutionsSection = () => {
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

  const solutions = [
    {
      title: "Custom Seasoning Blends",
      description:
        "Tailored flavour profiles crafted to meet your specific product requirements.",
      icon: <Leaf className="text-emerald-500" size={32} />,
    },
    {
      title: "Food Science Innovation",
      description: "Cutting-edge research and development to create next-generation seasoning solutions.",
      icon: <Award className="text-emerald-500" size={32} />,
    },
    {
      title: "Sustainable Solutions",
      description: "Environmentally conscious products that support both great taste and planetary health.",
      icon: <Target className="text-emerald-500" size={32} />,
    },
  ]

  return (
    <section
      ref={sectionRef}
      id="solutions"
      className="py-20 bg-white relative overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-emerald-100/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-emerald-100/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="mb-4">
            <span
              className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-emerald-100 text-emerald-800 transition-all duration-700 delay-200 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              <Sparkles size={16} className="mr-2 text-emerald-500" />
              Comprehensive Solutions
            </span>
          </div>

          <h2
            className={`text-4xl md:text-5xl font-bold text-slate-900 mb-6 transition-all duration-700 delay-300 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            Our{" "}
            <span className="text-emerald-600 relative">
              Solutions
              <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-emerald-400 to-emerald-600 rounded-full transform scale-x-0 animate-[scaleX_1s_ease-out_1.5s_forwards]"></div>
            </span>{" "}
            and Expertise
          </h2>

          <p
            className={`text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed transition-all duration-700 delay-500 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            From creating solutions that are better for consumers to crafting products that have a real, lasting impact.
          </p>
        </div>

        {/* Solutions Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {solutions.map((solution, index) => (
            <div
              key={index}
              className={`group relative bg-emerald-50/50 rounded-3xl p-4 shadow-lg  hover:shadow-xl transform hover:-translate-y-2 transition-all duration-200 overflow-hidden ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
              }`}
              style={{
                transitionDelay: `${600 + index * 200}ms`,
              }}
            >
              {/* Card background pattern */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              {/* Floating elements */}
              <div className="absolute top-4 right-4 w-2 h-2 bg-emerald-300/50 rounded-full animate-ping"></div>
              <div className="absolute bottom-6 left-6 w-1 h-1 bg-emerald-400/40 rounded-full animate-pulse delay-500"></div>

              {/* Content */}
              <div className="relative z-10">
                <div className="mb-6 transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                  <div className="bg-white backdrop-blur-sm rounded-2xl p-4 w-fit shadow-sm">{solution.icon}</div>
                </div>

                <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-emerald-700 transition-colors duration-300">
                  {solution.title}
                </h3>

                <p className="text-slate-700 leading-relaxed mb-6 transition-colors duration-300">
                  {solution.description}
                </p>

                {/* Learn more link */}
                <div className="flex items-center text-emerald-600 group-hover:text-emerald-700 font-medium cursor-pointer transition-all duration-300">
                  <span className="mr-2 group-hover:mr-3 transition-all duration-300">Learn more</span>
                  <ArrowRight
                    size={16}
                    className="transform group-hover:translate-x-1 transition-transform duration-300"
                  />
                </div>

                {/* Hover line */}
                <div className="w-0 group-hover:w-24 h-0.5 bg-emerald-500 transition-all duration-500 mt-2"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div
          className={`text-center bg-slate-50 rounded-3xl p-12 shadow-sm border border-slate-100 transition-all duration-700 delay-1200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
            A Small Detail.{" "}
            <span className="text-emerald-600 relative">
              A Big Difference.
              <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-emerald-400 to-emerald-600 rounded-full"></div>
            </span>
          </h3>

          <p className="text-lg text-slate-700 max-w-4xl mx-auto leading-relaxed">
            We've spent over 90 years mastering the science of flavour — partnering with the food industry to deliver
            seasoning solutions that are bold, effective, and built for impact.
          </p>

          {/* Decorative elements */}
          <div className="flex justify-center items-center mt-8 space-x-4">
            <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
            <div className="w-1 h-1 bg-emerald-500 rounded-full animate-pulse delay-200"></div>
            <div className="w-2 h-2 bg-emerald-600 rounded-full animate-pulse delay-400"></div>
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

export default SolutionsSection
// "use client"
// import { ChevronDown } from "lucide-react"

// const HeroSection = () => {
//   return (
//     <section
//       id="home"
//       className="min-h-screen flex items-center justify-center bg-[#d3eec5] relative overflow-hidden mt-20"
//     >
//       {/* Background Pattern */}
//       <div className="absolute inset-0 opacity-10">
//         <div className="absolute top-20 left-20 w-32 h-32 bg-green-300 rounded-full animate-pulse"></div>
//         <div className="absolute bottom-20 right-20 w-24 h-24 bg-green-400 rounded-full animate-pulse delay-1000"></div>
//         <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-green-500 rounded-full animate-pulse delay-500"></div>
//       </div>

//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
//         <div className="animate-in fade-in slide-in-from-bottom duration-1000">
//           <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
//             Driven by <span className="text-green-600">vision</span>,
//             <br />
//             anchored by <span className="text-green-600">values</span>
//           </h1>
//           <p className="text-xl md:text-xl text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed">
//             Yashasveeni Processing sees flavour as a force for transformation — rooted in science, powered by innovation, and
//             guided by purpose.
//           </p>
//           <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
//             <button className="bg-green-600 text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-gradient-to-r from-green-50 to-green-100 transform  transition-all hover:text-green-600 duration-300 shadow-lg hover:shadow-xl hover:border-2 border-green-600">
//               Explore Solutions
//             </button>
//             <button className="border-2 border-green-600 text-green-600 px-6 py-3 rounded-full text-lg font-semibold hover:bg-green-600 hover:text-white transition-all duration-300">
//               Learn More
//             </button>
//           </div>

//           {/* Cards Section with Animations */}
//           <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
//             {/* Card 1 */}
//             <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-500 border border-green-50 hover:border-green-100 transform hover:-translate-y-2 animate-in fade-in slide-in-from-bottom delay-300 h-80 flex flex-col justify-between group">
//               <div>
//                 <h3 className="text-2xl font-bold text-green-600 mb-4 group-hover:text-green-700 transition-colors duration-300">
//                   Driven by Purpose
//                 </h3>
//                 <p className="text-gray-600 leading-relaxed">
//                   We believe flavor is more than taste—it's a tool for change. Built on tradition and powered by
//                   innovation, we create seasoning solutions that inspire creativity and deliver real impact.
//                 </p>
//               </div>
//               <div className="mt-4 h-1 bg-gradient-to-r from-green-200 to-green-400 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
//             </div>

//             {/* Card 2 */}
//             <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-500 border border-green-50 hover:border-green-100 transform hover:-translate-y-2 animate-in fade-in slide-in-from-bottom delay-500 h-80 flex flex-col justify-between group">
//               <div>
//                 <h3 className="text-2xl font-bold text-green-600 mb-4 group-hover:text-green-700 transition-colors duration-300">
//                   Science Meets Spice
//                 </h3>
//                 <p className="text-gray-600 leading-relaxed">
//                   Rooted in spice heritage, elevated by food science. We push boundaries responsibly, developing
//                   seasoning systems that scale sustainably for conscious consumers.
//                 </p>
//               </div>
//               <div className="mt-4 h-1 bg-gradient-to-r from-green-200 to-green-400 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
//             </div>

//             {/* Card 3 */}
//             <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-500 border border-green-50 hover:border-green-100 transform hover:-translate-y-2 animate-in fade-in slide-in-from-bottom delay-700 h-80 flex flex-col justify-between group">
//               <div>
//                 <h3 className="text-2xl font-bold text-green-600 mb-4 group-hover:text-green-700 transition-colors duration-300">
//                   Innovation That Matters
//                 </h3>
//                 <p className="text-gray-600 leading-relaxed">
//                   We champion meaningful innovation: nutritious products and sustainable flavor systems. Our solutions
//                   deliver exceptional taste while building a healthier food future.
//                 </p>
//               </div>
//               <div className="mt-4 h-1 bg-gradient-to-r from-green-200 to-green-400 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Scroll Indicator */}
//       <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
//         <ChevronDown className="text-green-600" size={32} />
//       </div>
//     </section>
//   )
// }

// export default HeroSection



//-------------------------------------------------------

"use client"
import { ChevronDown } from "lucide-react"
import Image from "next/image"

const HeroSection = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-emerald-50/30 to-teal-50 relative overflow-hidden mt-6 py-25"
    >
      {/* Enhanced Background Pattern */}
      <div className="absolute inset-0 opacity-15">
        <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-br from-emerald-300 to-teal-300 rounded-full animate-pulse blur-sm"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 bg-gradient-to-br from-emerald-400 to-cyan-400 rounded-full animate-pulse delay-1000 blur-sm"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-full animate-pulse delay-500 blur-sm"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="animate-in fade-in slide-in-from-bottom duration-1000">
          {/* Banner Image */}
          <div className="mb-16">
            <Image
              src="/images/Wireframe-3.png"
              alt="Yashasveeni Processing Banner"
              width={1200}
              height={500}
              className="mx-auto rounded-xl shadow-lg"
              priority
            />
          </div>

          {/* Enhanced Cards Section */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Card 1 - Elegant Glass Effect */}
            <div className="group relative bg-gradient-to-br from-white/90 via-white/80 to-emerald-50/70 backdrop-blur-sm rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-700 border border-white/50 hover:border-emerald-200/80 transform hover:-translate-y-3  animate-in fade-in slide-in-from-bottom delay-300 h-80 flex flex-col overflow-hidden">
              {/* Subtle overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-teal-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>

              {/* Image Top Half */}
              <div className="relative aspect-[5/3] w-full overflow-hidden">
                <Image
                  src="/images/image2.1.png"
                  alt="Driven by Purpose"
                  fill
                  className="object-contain rounded-t-2xl group-hover:scale-105 transition-transform duration-700"
                />
              </div>

              {/* Content Bottom Half */}
              <div className="relative h-1/2 p-6 flex flex-col justify-center">
                <h3 className="text-2xl font-bold bg-gradient-to-r from-slate-700 to-emerald-700 bg-clip-text text-transparent group-hover:from-emerald-600 group-hover:to-teal-600 transition-all duration-500">
                  Driven by Purpose
                </h3>
                <p className="text-slate-600 text-sm mt-2 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-200">
                  Excellence through dedication
                </p>
                <div className="mt-4 h-0.5 bg-gradient-to-r from-emerald-300 via-teal-300 to-cyan-300 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 delay-100"></div>
              </div>
            </div>

            {/* Card 2 - Elegant Glass Effect */}
            <div className="group relative bg-gradient-to-br from-white/90 via-white/80 to-teal-50/70 backdrop-blur-sm rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-700 border border-white/50 hover:border-teal-200/80 transform hover:-translate-y-3 animate-in fade-in slide-in-from-bottom delay-500 h-80 flex flex-col overflow-hidden">
              {/* Subtle overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-teal-500/5 to-emerald-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>

              {/* Image Top Half */}
              <div className="relative aspect-[5/3] w-full overflow-hidden">
                <Image
                  src="/images/image2.2.png"
                  alt="Science Meets Spice"
                  fill
                  className="object-contain rounded-t-2xl group-hover:scale-105 transition-transform duration-700"
                />
              </div>

              {/* Content Bottom Half */}
              <div className="relative h-1/2 p-6 flex flex-col justify-center">
                <h3 className="text-2xl font-bold bg-gradient-to-r from-slate-700 to-teal-700 bg-clip-text text-transparent group-hover:from-teal-600 group-hover:to-cyan-600 transition-all duration-500">
                  Science Meets Spice
                </h3>
                <p className="text-slate-600 text-sm mt-2 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-200">
                  Innovation in every flavor
                </p>
                <div className="mt-4 h-0.5 bg-gradient-to-r from-teal-300 via-emerald-300 to-green-300 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 delay-100"></div>
              </div>
            </div>

            {/* Card 3 - Elegant Glass Effect */}
            <div className="group relative bg-gradient-to-br from-white/90 via-white/80 to-teal-50/70 backdrop-blur-sm rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-700 border border-white/50 hover:border-teal-200/80 transform hover:-translate-y-3 animate-in fade-in slide-in-from-bottom delay-500 h-80 flex flex-col overflow-hidden">
              {/* Subtle overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-teal-500/5 to-emerald-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>

              {/* Image Top Half */}
              <div className="relative aspect-[5/3] w-full overflow-hidden">
                <Image
                  src="/images/image2.3.png"
                  alt="Innovation That Matters"
                  fill
                  className="object-contain rounded-t-2xl group-hover:scale-105 transition-transform duration-700"
                />
              </div>

              {/* Content Bottom Half */}
              <div className="relative h-1/2 p-6 flex flex-col justify-center">
                <h3 className="text-2xl font-bold bg-gradient-to-r from-slate-700 to-teal-700 bg-clip-text text-transparent group-hover:from-teal-600 group-hover:to-cyan-600 transition-all duration-500">
                  Innovation That Matters
                </h3>
                <p className="text-slate-600 text-sm mt-2 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-200">
                  Transforming possibilities
                </p>
                <div className="mt-4 h-0.5 bg-gradient-to-r from-teal-300 via-emerald-300 to-green-300 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 delay-100"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="p-2 rounded-full bg-white/20 backdrop-blur-sm border border-white/30">
          <ChevronDown className="text-emerald-600" size={28} />
        </div>
      </div>
    </section>
  )
}

export default HeroSection
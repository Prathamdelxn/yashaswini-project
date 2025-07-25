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
      className="min-h-screen flex items-center justify-center bg-[#F3F7F5] relative overflow-hidden mt-20 py-25"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-32 h-32 bg-emerald-300 rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 bg-emerald-400 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-emerald-500 rounded-full animate-pulse delay-500"></div>
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

          {/* Cards Section with Animations */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Card 1 */}
            <div className="bg-white/80 rounded-xl shadow-lg hover:shadow-xl transition-all duration-500 border border-emerald-50 hover:border-emerald-100 transform hover:-translate-y-2 animate-in fade-in slide-in-from-bottom delay-300 h-80 flex flex-col group overflow-hidden">
              {/* Image Top Half */}
              <div className="relative aspect-[5/3] w-full">
                <Image
                  src="/images/image2.1.png"
                  alt="Driven by Purpose"
                  fill
                  className="object-contain rounded-t-xl"
                />
              </div>

              {/* Content Bottom Half */}
              <div className="h-1/2 p-6 flex flex-col justify-center">
                <h3 className="text-2xl font-bold text-emerald-600 group-hover:text-emerald-700 transition-colors duration-300">
                  Driven by Purpose
                </h3>
                <div className="mt-4 h-1 bg-gradient-to-r from-emerald-200 to-emerald-400 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white/80 rounded-xl shadow-lg hover:shadow-xl transition-all duration-500 border border-emerald-50 hover:border-emerald-100 transform hover:-translate-y-2 animate-in fade-in slide-in-from-bottom delay-500 h-80 flex flex-col group overflow-hidden">
              {/* Image Top Half */}
              <div className="relative aspect-[5/3] w-full">
                <Image
                  src="/images/image2.2.png"
                  alt="Driven by Purpose"
                  fill
                  className="object-contain rounded-t-xl"
                />
              </div>

              {/* Content Bottom Half */}
              <div className="h-1/2 p-6 flex flex-col justify-center">
                <h3 className="text-2xl font-bold text-emerald-600 group-hover:text-emerald-700 transition-colors duration-300">
                  Science Meets Spice
                </h3>
                <div className="mt-4 h-1 bg-gradient-to-r from-emerald-200 to-emerald-400 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-500 border border-emerald-50 hover:border-emerald-100 transform hover:-translate-y-2 animate-in fade-in-from-bottom delay-700 h-80 flex flex-col group overflow-hidden">
              {/* Image Top Half */}
              <div className="relative aspect-[5/3] w-full">
                <Image
                  src="/images/image2.3.png"
                  alt="Driven by Purpose"
                  fill
                  className="object-contain rounded-t-xl"
                />
              </div>

              {/* Content Bottom Half */}
              <div className="h-1/2 p-6 flex flex-col justify-center">
                <h3 className="text-2xl font-bold text-emerald-600 group-hover:text-emerald-700 transition-colors duration-300">
                  Innovation That Matters
                </h3>
                <div className="mt-4 h-1 bg-gradient-to-r from-emerald-200 to-emerald-400 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="text-emerald-600" size={32} />
      </div>
    </section>
  )
}

export default HeroSection

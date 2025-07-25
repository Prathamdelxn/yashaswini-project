// // "use client"
// // import React from 'react';

// // const Footer = () => {
// //   return (
// //     <footer className="bg-[#2a480e] text-white py-16">
// //       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
// //         <div className="grid md:grid-cols-4 gap-8">
// //           <div>
// //             <div className="flex items-center mb-4">
// //               <div className="text-2xl font-bold text-green-400">Yashasveeni</div>
// //               <div className="ml-2 text-sm">Spices</div>
// //             </div>
// //             <p className="text-gray-400 leading-relaxed">
// //               Driven by vision, anchored by values. Creating flavour solutions that transform the food industry.
// //             </p>
// //           </div>
// //           <div>
// //             <h4 className="text-lg font-semibold mb-4">Solutions</h4>
// //             <ul className="space-y-2 text-gray-400">
// //               <li><a href="#" className="hover:text-green-400 transition-colors duration-300">Custom Seasoning</a></li>
// //               <li><a href="#" className="hover:text-green-400 transition-colors duration-300">Food Science</a></li>
// //               <li><a href="#" className="hover:text-green-400 transition-colors duration-300">Sustainability</a></li>
// //             </ul>
// //           </div>
// //           <div>
// //             <h4 className="text-lg font-semibold mb-4">Company</h4>
// //             <ul className="space-y-2 text-gray-400">
// //               <li><a href="#" className="hover:text-green-400 transition-colors duration-300">About Us</a></li>
// //               <li><a href="#" className="hover:text-green-400 transition-colors duration-300">Careers</a></li>
// //               <li><a href="#" className="hover:text-green-400 transition-colors duration-300">News</a></li>
// //             </ul>
// //           </div>
// //           <div>
// //             <h4 className="text-lg font-semibold mb-4">Connect</h4>
// //             <ul className="space-y-2 text-gray-400">
// //               <li><a href="#contact" className="hover:text-green-400 transition-colors duration-300">Contact</a></li>
// //               <li><a href="#" className="hover:text-green-400 transition-colors duration-300">LinkedIn</a></li>
// //               <li><a href="#" className="hover:text-green-400 transition-colors duration-300">Twitter</a></li>
// //             </ul>
// //           </div>
// //         </div>
// //         <div className="border-t border-gray-800 mt-22 text-center text-gray-400">
// //           <p>&copy; 2025 VKL Spices. All rights reserved.</p>
// //         </div>
// //       </div>
// //     </footer>
// //   );
// // };

// // export default Footer;

// //--------------------------------

// "use client"
// import React from 'react';
// import Image from 'next/image';

// const Footer = () => {
//   return (
//     <footer className="bg-emerald-900 text-emerald-100 py-16">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="grid md:grid-cols-4 gap-8">
//           <div>
//             <div className="relative h-20 w-48"> {/* Adjusted container size */}
//               <Image 
//                 src="/images/resized-logo.png" 
//                 alt="Yashasveeni Logo"
//                 fill
//                 style={{ objectFit: 'contain' }}
//                 className="h-20 w-20" // If you really need the red background
//               />
//             </div>
//             <p className="text-emerald-300 leading-relaxed mt-4">
//               Driven by vision, anchored by values. Creating flavour solutions that transform the food industry.
//             </p>
//           </div>
//           {/* Rest of your footer content remains the same */}
//           <div>
//             <h4 className="text-lg font-semibold mb-4 text-emerald-100">Solutions</h4>
//             <ul className="space-y-2 text-emerald-200">
//               <li><a href="#" className="hover:text-white transition-colors duration-300">Custom Seasoning</a></li>
//               <li><a href="#" className="hover:text-white transition-colors duration-300">Food Science</a></li>
//               <li><a href="#" className="hover:text-white transition-colors duration-300">Sustainability</a></li>
//             </ul>
//           </div>
//           <div>
//             <h4 className="text-lg font-semibold mb-4 text-emerald-100">Company</h4>
//             <ul className="space-y-2 text-emerald-200">
//               <li><a href="#about" className="hover:text-white transition-colors duration-300">About Us</a></li>
//               <li><a href="#career" className="hover:text-white transition-colors duration-300">Careers</a></li>
//               <li><a href="#" className="hover:text-white transition-colors duration-300">News</a></li>
//             </ul>
//           </div>
//           <div>
//             <h4 className="text-lg font-semibold mb-4 text-emerald-100">Connect</h4>
//             <ul className="space-y-2 text-emerald-200">
//               <li><a href="#contact" className="hover:text-white transition-colors duration-300">Contact</a></li>
//               <li><a href="#" className="hover:text-white transition-colors duration-300">LinkedIn</a></li>
//               <li><a href="#" className="hover:text-white transition-colors duration-300">Twitter</a></li>
//             </ul>
//           </div>
//         </div>
//         <div className="border-t border-emerald-700 mt-12 pt-8 text-center text-emerald-300">
//           <p>&copy; 2025 Yashasveeni. All rights reserved.</p>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;


//----------------------------------------- new footer ---------------------------------------------



"use client"
import Image from "next/image"
import { Twitter, Instagram, Facebook, Youtube , ArrowUp } from "lucide-react"

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  const socialLinks = [
    { icon: Twitter, label: "Twitter", href: "#" },
    { icon: Instagram, label: "Instagram", href: "#" },
    { icon: Facebook, label: "Facebook", href: "#" },
    { icon: Youtube, label: "YouTube", href: "#" },
  ]

  return (
    <footer className="bg-gradient-to-br from-emerald-950 via-emerald-900 to-green-900 text-emerald-50 py-5 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width%3D%2260%22 height%3D%2260%22 viewBox%3D%220 0 60 60%22 xmlns%3D%22http://www.w3.org/2000/svg%22%3E%3Cg fill%3D%22none%22 fillRule%3D%22evenodd%22%3E%3Cg fill%3D%22%23ffffff%22 fillOpacity%3D%220.1%22%3E%3Ccircle cx%3D%2230%22 cy%3D%2230%22 r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 mt-12">
        <div className="grid md:grid-cols-4 gap-12">
          {/* Logo and Brand Section */}
          <div className="md:col-span-1">
            <div className="relative h-20 w-48 mb-6 group">
              <Image
                src="/images/logo-without-bg.png"
                alt="Yashasveeni Logo"
                fill
                style={{ objectFit: "contain" }}
                className="transition-all duration-300 group-hover:scale-105"
              />
            </div>

            {/* Brand Text Lines */}
            <div className="mb-6">
              <p className="text-emerald-200 text-lg font-medium mb-2">Premium Spice Solutions</p>
              <p className="text-emerald-300 leading-relaxed text-sm">
                Driven by vision, anchored by values. Creating flavour solutions that transform the food industry with
                authentic taste and quality.
              </p>
            </div>

            {/* Social Media Icons */}
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon
                return (
                  <button
                    key={index}
                    onClick={scrollToTop}
                    className="group relative p-3 bg-emerald-800/50 rounded-full border border-emerald-700/50 hover:bg-emerald-700 hover:border-emerald-600 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-emerald-500/25"
                    aria-label={social.label}
                  >
                    <IconComponent className="w-5 h-5 text-emerald-300 group-hover:text-white transition-colors duration-300" />
                    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-400/20 to-green-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </button>
                )
              })}
            </div>
          </div>

          {/* Solutions Section */}
          <div className="ml-10">
            <h4 className="text-md font-bold mb-6 text-emerald-100 relative">
              Solutions
              <div className="absolute bottom-0 left-0 w-23 h-0.5 bg-gradient-to-r from-emerald-400 to-green-400"></div>
            </h4>
            <ul className="space-y-3">
              {["Custom Seasoning", "Food Science", "Sustainability", "Quality Assurance"].map((item, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="text-emerald-200 hover:text-white transition-all duration-300 hover:translate-x-2 inline-block group relative"
                  >
                    <span className="relative z-10">{item}</span>
                    <div className="absolute inset-0 w-0  bg-gradient-to-r from-emerald-600/20 to-transparent group-hover:w-full transition-all duration-300 -z-10 rounded"></div>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Section */}
          <div className="ml-10">
            <h4 className="text-md font-bold mb-6 text-emerald-100 relative">
              Company
              <div className="absolute bottom-0 left-0 w-23 h-0.5 bg-gradient-to-r from-emerald-400 to-green-400"></div>
            </h4>
            <ul className="space-y-3">
              {[
                { name: "About Us", href: "#about" },
                { name: "Careers", href: "#career" },
                { name: "News & Updates", href: "#" },
                { name: "Our Story", href: "#" },
              ].map((item, index) => (
                <li key={index}>
                  <a
                    href={item.href}
                    className="text-emerald-200 hover:text-white transition-all duration-300 hover:translate-x-2 inline-block group relative"
                  >
                    <span className="relative z-10">{item.name}</span>
                    <div className="absolute inset-0 w-0 bg-gradient-to-r from-emerald-600/20 to-transparent group-hover:w-full transition-all duration-300 -z-10 rounded"></div>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect Section */}
          <div className="ml-10">
            <h4 className="text-md font-bold mb-6 text-emerald-100 relative">
              Connect
              <div className="absolute bottom-0 left-0 w-21 h-0.5 bg-gradient-to-r from-emerald-400 to-green-400"></div>
            </h4>
            <ul className="space-y-3">
              {[
                { name: "Contact Us", href: "#contact" },
                { name: "Support", href: "#" },
                { name: "Partnership", href: "#" },
                { name: "Feedback", href: "#" },
              ].map((item, index) => (
                <li key={index}>
                  <a
                    href={item.href}
                    className="text-emerald-200 hover:text-white transition-all duration-300 hover:translate-x-2 inline-block group relative"
                  >
                    <span className="relative z-10">{item.name}</span>
                    <div className="absolute inset-0 w-0 bg-gradient-to-r from-emerald-600/20 to-transparent group-hover:w-full transition-all duration-300 -z-10 rounded"></div>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-emerald-800/50 pt-4 mt-4 flex flex-col md:flex-row justify-between items-center">
          <p className="text-emerald-300 text-sm mb-4 md:mb-0">&copy; 2025 Yashasveeni Spices. All rights reserved.</p>

          {/* Scroll to Top Button */}
          <button
            onClick={scrollToTop}
            className="group flex items-center space-x-2 px-4 py-2 bg-emerald-800/50 hover:bg-emerald-700 rounded-full border border-emerald-700/50 hover:border-emerald-600 transition-all duration-300 hover:scale-105"
          >
            <span className="text-emerald-200 group-hover:text-white text-sm transition-colors duration-300">
              Back to Top
            </span>
            <ArrowUp className="w-4 h-4 text-emerald-300 group-hover:text-white group-hover:-translate-y-1 transition-all duration-300" />
          </button>
        </div>
      </div>
    </footer>
  )
}

export default Footer

// "use client"
// import { useEffect, useRef, useState } from "react"
// import { Mail, Phone, MapPin, Send, Clock, ArrowRight, Sparkles, MessageCircle } from "lucide-react"

// const ContactSection = () => {
//   const [isVisible, setIsVisible] = useState(false)
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     company: "",
//     message: "",
//   })
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

//   const handleInputChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     })
//   }

//   const handleSubmit = (e) => {
//     e.preventDefault()
//     // Handle form submission here
//     console.log("Form submitted:", formData)
//   }

//   const contactInfo = [
//     {
//       icon: <Mail size={24} className="text-green-600" />,
//       title: "Email Us",
//       details: "hello@yashasveeni.com",
//       description: "Send us an email anytime",
//     },
//     {
//       icon: <Phone size={24} className="text-green-600" />,
//       title: "Call Us",
//       details: "+9999999999",
//       description: "Mon-Fri from 8am to 5pm",
//     },
//     {
//       icon: <MapPin size={24} className="text-green-600" />,
//       title: "Visit Us",
//       details: "Audumbar Complex B",
//       description: "Narhe",
//     },
//   ]

//   return (
//     <section
//       ref={sectionRef}
//       id="contact"
//       className="py-20 bg-gradient-to-br from-green-100 to-green-200 relative overflow-hidden"
//     >
//       {/* Background decorative elements */}
//       <div className="absolute inset-0 overflow-hidden">
//         <div className="absolute -top-40 -right-40 w-96 h-96 bg-green-200/20 rounded-full blur-3xl animate-pulse"></div>
//         <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-green-300/15 rounded-full blur-3xl animate-pulse delay-1000"></div>
//         <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-green-100/30 rounded-full blur-2xl animate-pulse delay-500"></div>
//       </div>

//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
//         {/* Header */}
//         <div className="text-center mb-16">
//           <div className="mb-4">
//             <span
//               className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-green-200 text-green-800 transition-all duration-700 delay-200 ${
//                 isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
//               }`}
//             >
//               <MessageCircle size={16} className="mr-2" />
//               Get In Touch
//             </span>
//           </div>

//           <h2
//             className={`text-4xl md:text-5xl font-bold text-gray-900 mb-6 transition-all duration-700 delay-300 ${
//               isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
//             }`}
//           >
//             Let's Start a{" "}
//             <span className="text-green-600 relative">
//               Conversation
//               <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-green-400 to-green-600 rounded-full transform scale-x-0 animate-[scaleX_1s_ease-out_1.5s_forwards]"></div>
//             </span>
//           </h2>

//           <p
//             className={`text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed transition-all duration-700 delay-500 ${
//               isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
//             }`}
//           >
//             Ready to explore how we can help transform your food products? We'd love to hear from you.
//           </p>
//         </div>

//         <div className="grid lg:grid-cols-2 gap-12">
//           {/* Contact Form */}
//           <div
//             className={`transition-all duration-1000 ease-out ${
//               isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"
//             }`}
//           >
//             <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-green-100/50 relative overflow-hidden group">
//               {/* Card background pattern */}
//               <div className="absolute inset-0 bg-gradient-to-br from-green-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

//               {/* Floating elements */}
//               <div className="absolute top-4 right-4 w-2 h-2 bg-green-400 rounded-full animate-ping"></div>

//               <div className="relative z-10">
//                 <div className="mb-8">
//                   <h3 className="text-2xl font-bold text-gray-900 mb-2">Send us a message</h3>
//                   <p className="text-gray-600">We'll get back to you within 24 hours</p>
//                   <div className="w-16 h-0.5 bg-green-400 mt-3 rounded-full"></div>
//                 </div>

//                 <form onSubmit={handleSubmit} className="space-y-6">
//                   <div className="grid md:grid-cols-2 gap-6">
//                     <div className="group">
//                       <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
//                         Full Name *
//                       </label>
//                       <input
//                         type="text"
//                         id="name"
//                         name="name"
//                         required
//                         value={formData.name}
//                         onChange={handleInputChange}
//                         className="w-full px-4 py-3 border border-green-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300 bg-green-50/50 hover:bg-green-50 group-hover:border-green-300"
//                         placeholder="Your full name"
//                       />
//                     </div>

//                     <div className="group">
//                       <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
//                         Email Address *
//                       </label>
//                       <input
//                         type="email"
//                         id="email"
//                         name="email"
//                         required
//                         value={formData.email}
//                         onChange={handleInputChange}
//                         className="w-full px-4 py-3 border border-green-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300 bg-green-50/50 hover:bg-green-50 group-hover:border-green-300"
//                         placeholder="your@email.com"
//                       />
//                     </div>
//                   </div>

//                   <div className="group">
//                     <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
//                       Company Name
//                     </label>
//                     <input
//                       type="text"
//                       id="company"
//                       name="company"
//                       value={formData.company}
//                       onChange={handleInputChange}
//                       className="w-full px-4 py-3 border border-green-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300 bg-green-50/50 hover:bg-green-50 group-hover:border-green-300"
//                       placeholder="Your company name"
//                     />
//                   </div>

//                   <div className="group">
//                     <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
//                       Message *
//                     </label>
//                     <textarea
//                       id="message"
//                       name="message"
//                       required
//                       rows={5}
//                       value={formData.message}
//                       onChange={handleInputChange}
//                       className="w-full px-4 py-3 border border-green-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300 bg-green-50/50 hover:bg-green-50 group-hover:border-green-300 resize-none"
//                       placeholder="Tell us about your project or ask us a question..."
//                     />
//                   </div>

//                   <button
//                     type="submit"
//                     className="group w-full bg-green-600 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-green-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl relative overflow-hidden"
//                   >
//                     <span className="relative z-10 flex items-center justify-center">
//                       Send Message
//                       <Send
//                         size={20}
//                         className="ml-2 transform group-hover:translate-x-1 group-hover:rotate-12 transition-transform duration-300"
//                       />
//                     </span>
//                     <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-green-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
//                   </button>
//                 </form>
//               </div>
//             </div>
//           </div>

//           {/* Contact Information */}
//           <div
//             className={`transition-all duration-1000 ease-out delay-300 ${
//               isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"
//             }`}
//           >
//             <div className="space-y-6">
//               {/* Contact Info Cards */}
//               {contactInfo.map((info, index) => (
//                 <div
//                   key={index}
//                   className={`group bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl border border-green-100/50 hover:bg-white/80 transition-all duration-300 hover:scale-105 ${
//                     isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
//                   }`}
//                   style={{
//                     transitionDelay: `${700 + index * 200}ms`,
//                   }}
//                 >
//                   <div className="flex items-start space-x-4">
//                     <div className="bg-green-100 p-3 rounded-xl group-hover:bg-green-200 transition-colors duration-300 group-hover:scale-110">
//                       {info.icon}
//                     </div>
//                     <div className="flex-1">
//                       <h3 className="text-lg font-semibold text-gray-900 group-hover:text-green-700 transition-colors duration-300">
//                         {info.title}
//                       </h3>
//                       <p className="text-green-600 font-medium text-lg">{info.details}</p>
//                       <p className="text-gray-600 text-sm mt-1">{info.description}</p>
//                     </div>
//                     <ArrowRight
//                       size={20}
//                       className="text-gray-400 group-hover:text-green-600 transform group-hover:translate-x-1 transition-all duration-300 opacity-0 group-hover:opacity-100"
//                     />
//                   </div>
//                 </div>
//               ))}

//               {/* Business Hours Card */}
//               <div
//                 className={`bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-green-200/50 transition-all duration-500 delay-1300 ${
//                   isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
//                 }`}
//               >
//                 <div className="flex items-start space-x-4">
//                   <div className="bg-white/60 p-3 rounded-xl">
//                     <Clock size={24} className="text-green-600" />
//                   </div>
//                   <div>
//                     <h3 className="text-lg font-semibold text-gray-900 mb-2">Business Hours</h3>
//                     <div className="space-y-1 text-sm text-gray-700">
//                       <p>Monday - Friday: 8:00 AM - 5:00 PM</p>
//                       <p>Saturday: 9:00 AM - 2:00 PM</p>
//                       <p>Sunday: Closed</p>
//                     </div>
//                   </div>
//                 </div>
//               </div>
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

// export default ContactSection


//------------------------------------
"use client"
import { useEffect, useRef, useState } from "react"
import { Mail, Phone, MapPin, Send, Clock, ArrowRight, Sparkles, MessageCircle } from "lucide-react"

const ContactSection = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  })
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

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission here
    console.log("Form submitted:", formData)
  }

  const contactInfo = [
    {
      icon: <Mail size={24} className="text-emerald-500" />,
      title: "Email Us",
      details: "hello@yashasveeni.com",
      description: "Send us an email anytime",
    },
    {
      icon: <Phone size={24} className="text-emerald-500" />,
      title: "Call Us",
      details: "+9999999999",
      type: "tel:+9999999999",
      description: "Mon-Fri from 8am to 5pm",
    },
    {
      icon: <MapPin size={24} className="text-emerald-500" />,
      title: "Visit Us",
      details: "Audumbar Complex B",
      description: "Narhe",
    },
  ]

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="py-20 bg-white relative overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-emerald-100/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-emerald-200/15 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-emerald-100/20 rounded-full blur-2xl animate-pulse delay-500"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="mb-4">
            <span
              className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-emerald-100 text-emerald-800 transition-all duration-700 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                }`}
            >
              <MessageCircle size={16} className="mr-2" />
              Get In Touch
            </span>
          </div>

          <h2
            className={`text-4xl md:text-5xl font-bold text-gray-900 mb-6 transition-all duration-700 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
          >
            Let's Start a{" "}
            <span className="text-emerald-600 relative">
              Conversation
              <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-emerald-400 to-emerald-600 rounded-full transform scale-x-0 animate-[scaleX_1s_ease-out_1.5s_forwards]"></div>
            </span>
          </h2>

          <p
            className={`text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed transition-all duration-700 delay-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
          >
            Ready to explore how we can help transform your food products? We'd love to hear from you.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div
            className={`transition-all duration-1000 ease-out ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"
              }`}
          >
            <div className="bg-slate-50 rounded-3xl p-8 shadow-2xl border border-slate-200 relative overflow-hidden group">
              {/* Card background pattern */}
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-50/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              {/* Floating elements */}
              <div className="absolute top-4 right-4 w-2 h-2 bg-emerald-400 rounded-full animate-ping"></div>

              <div className="relative z-10">
                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Send us a message</h3>
                  <p className="text-slate-600">We'll get back to you within 24 hours</p>
                  <div className="w-16 h-0.5 bg-emerald-500 mt-3 rounded-full"></div>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="group">
                      <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-300 bg-white hover:bg-slate-50 group-hover:border-emerald-400"
                        placeholder="Your full name"
                      />
                    </div>

                    <div className="group">
                      <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-300 bg-white hover:bg-slate-50 group-hover:border-emerald-400"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div className="group">
                    <label htmlFor="company" className="block text-sm font-medium text-slate-700 mb-2">
                      Company Name
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-300 bg-white hover:bg-slate-50 group-hover:border-emerald-400"
                      placeholder="Your company name"
                    />
                  </div>

                  <div className="group">
                    <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-300 bg-white hover:bg-slate-50 group-hover:border-emerald-400 resize-none"
                      placeholder="Tell us about your project or ask us a question..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="group w-full bg-emerald-600 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-emerald-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl relative overflow-hidden"
                  >
                    <span className="relative z-10 flex items-center justify-center">
                      Send Message
                      <Send
                        size={20}
                        className="ml-2 transform group-hover:translate-x-1 group-hover:rotate-12 transition-transform duration-300"
                      />
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-emerald-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </button>
                </form>
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div
            className={`transition-all duration-1000 ease-out delay-300 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"
              }`}
          >
            <div className="space-y-6">
              {/* Contact Info Cards */}
              {contactInfo.map((info, index) => (
                <div
                  key={index}
                  className={`group bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl border border-slate-200 hover:bg-white transition-all duration-300 hover:scale-105 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                    }`}
                  style={{
                    transitionDelay: `${700 + index * 200}ms`,
                  }}
                >
                  <div className="flex items-start space-x-4">
                    <div className="bg-slate-100 p-3 rounded-xl group-hover:bg-emerald-100 transition-colors duration-300 group-hover:scale-110">
                      {info.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-gray-900 group-hover:text-emerald-700 transition-colors duration-300">
                        {info.title}
                      </h3>
                      {info.type ? (
                        <a
                          href={info.type}
                          className="text-slate-600 font-medium text-lg  hover:text-emerald-600 transition-colors duration-300"
                        >
                          {info.details}
                        </a>
                      ) : (
                        <p className="text-slate-600 font-medium text-lg">{info.details}</p>
                      )}

                      <p className="text-slate-500 text-sm mt-1">{info.description}</p>
                    </div>
                    <ArrowRight
                      size={20}
                      className="text-slate-400 group-hover:text-emerald-600 transform group-hover:translate-x-1 transition-all duration-300 opacity-0 group-hover:opacity-100"
                    />
                  </div>
                </div>
              ))}

              {/* Business Hours Card */}
              <div
                className={`bg-white rounded-2xl p-6 shadow-lg border border-slate-200 transition-all duration-500 delay-1300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                  }`}
              >
                <div className="flex items-start space-x-4">
                  <div className="bg-white p-3 rounded-xl">
                    <Clock size={24} className="text-emerald-500" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Business Hours</h3>
                    <div className="space-y-1 text-sm text-slate-600">
                      <p>Monday - Friday: 8:00 AM - 5:00 PM</p>
                      <p>Saturday: 9:00 AM - 2:00 PM</p>
                      <p>Sunday: Closed</p>
                    </div>
                  </div>
                </div>
              </div>
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

export default ContactSection
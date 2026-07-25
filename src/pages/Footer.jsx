import Logo from "../assets/images/SoftNova-Logo.png";

// import { Zap, Timer, ChartColumn, Lock, Heart } from "lucide-react";

// const features = [
//   {
//     icon: <Zap size={14} className="text-yellow-400" />,
//     text: "Real-time tracking enabled",
//   },
//   {
//     icon: <Timer size={14} className="text-gray-200" />,
//     text: "Live attendance timer",
//   },
//   {
//     icon: <ChartColumn size={14} className="text-green-400" />,
//     text: "Admin analytics system",
//   },
//   {
//     icon: <Lock size={14} className="text-yellow-500" />,
//     text: "Secure Firebase backend",
//   },
// ];

// const Footer = () => {
//   return (
//     <footer className="w-full relative mt-16 bg-gradient-to-b from-[#0f0f10] via-[#151515] to-black">
      
//       <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.08)_0%,transparent_60%)]"></div>

//       <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
//         {/* Top */}
//         <div className="grid lg:grid-cols-2">
//           {/* Left */}
//           <div>
//             <h2 className="text-4xl font-bold text-[#ff4d4d]">
//               Attendance System
//             </h2>

//             <p className="mt-6 me-18 pe-14 text-base text-gray-400">
//               A real-time smart attendance management system for employees and
//               admins with live tracking, automation, and advanced reporting
//               features.
//             </p>

//             <span className="
//               mt-8
//               inline-flex
//               items-center
//               gap-2
//               rounded-full
//               border
//               border-neutral-700
//               bg-neutral-900
//               px-5
//               py-3
//               text-sm
//               text-white" >
//               <Zap size={15} />
//               Powered by React & Firebase
//             </span>
//           </div>

//           {/* Right */}
//           <div className="lg:pl-20 sm:pt-3 lg:pt-0">
//             <h3 className="text-2xl font-semibold text-white">
//               System Features
//             </h3>

//             <div className="mt-6 space-y-3">
//               {features.map((item, index) => (
//                 <div
//                   key={index}
//                   className="flex items-center gap-3 text-gray-400"
//                 >
//                   {item.icon}
//                   <span className="text-sm">{item.text}</span>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>

//         {/* Divider */}

//         <div className="my-12 border-t border-neutral-800"></div>

//         {/* Bottom */}

//         <div className="flex flex-col items-center justify-between gap-4 text-sm text-gray-500 md:flex-row">
//           <p>
//             © 2026{" "}
//             <span className="text-gray-300">Soft Nova Tech.</span> All rights
//             reserved.
//           </p>

//           <p className="flex items-center gap-2">
//             Built with
//             <Heart
//               size={15}
//               className="fill-red-500 text-red-500"
//             />
//             using React & Firebase
//           </p>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;




import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  // Quick Links — core sections of the attendance system
  const quickLinks = [
    { name: 'Dashboard', href: '#' },
    { name: 'Attendance', href: '#' },
    { name: 'Employees', href: '#' },
    { name: 'Leave Requests', href: '#' },
    { name: 'Reports', href: '#' },
  ];

  // Support Data Array
  const support = [
    { name: 'Help Center', href: '#' },
    { name: 'User Guide', href: '#' },
    { name: 'Contact Admin', href: '#' },
    { name: 'Privacy Policy', href: '#' },
    { name: 'Terms of Service', href: '#' },
  ];

  return (
    <footer className="relative bg-[#0b0c10] text-[#a6a6a6] font-sans antialiased overflow-hidden">
      {/* Glowing top border */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-red-500/70 to-transparent" />

      {/* Ambient glow behind brand column */}
      <div className="pointer-events-none absolute -top-24 -left-24 w-72 h-72 bg-red-500/10 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6 py-14 grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-0">

        {/* Brand Section */}
        <div className="flex flex-col space-y-6 md:pr-10">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 ">
              <img src={Logo} alt="" className="w-100 h-100" />
            </div>
            <h5 className="text-2xl font-bold text-white tracking-tight">
              SoftNova<span className="text-red-500">Tech</span>
            </h5>
          </div>

          <p className="text-sm leading-relaxed max-w-xs text-zinc-400">
            Employee Attendance System — track attendance, manage leave, and view reports in one place.
          </p>

          <div className="flex flex-col space-y-3 text-sm text-zinc-400">
            <a href="mailto:info@softnovatech.com" className="flex items-center space-x-2.5 hover:text-white transition-colors duration-200 group w-fit">
              <Mail size={15} className="text-red-500 shrink-0" />
              <span>info@softnovatech.com</span>
            </a>
            <a href="tel:+923001234567" className="flex items-center space-x-2.5 hover:text-white transition-colors duration-200 group w-fit">
              <Phone size={15} className="text-red-500 shrink-0" />
              <span>+92 300 1234567</span>
            </a>
            <div className="flex items-center space-x-2.5 w-fit">
              <MapPin size={15} className="text-red-500 shrink-0" />
              <span>Karachi, Pakistan</span>
            </div>
          </div>
        </div>

        {/* Quick Links Section */}
        <div className="md:px-10 md:border-l md:border-white/5">
          <h3 className="text-white font-semibold text-xs uppercase tracking-[0.15em] mb-6 relative after:content-[''] after:absolute after:bottom-[-8px] after:left-0 after:w-8 after:h-[2px] after:bg-red-500">
            Quick Links
          </h3>
          <ul className="space-y-3.5 text-sm">
            {quickLinks.map((link, index) => (
              <li key={index}>
                <a href={link.href} className="flex items-center hover:text-white transition-colors duration-200 group">
                  <span className="text-red-500 mr-2 transform group-hover:translate-x-1 transition-transform duration-200">
                    &gt;
                  </span>
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Support Section */}
        <div className="md:pl-10 md:border-l md:border-white/5">
          <h3 className="text-white font-semibold text-xs uppercase tracking-[0.15em] mb-6 relative after:content-[''] after:absolute after:bottom-[-8px] after:left-0 after:w-8 after:h-[2px] after:bg-red-500">
            Support
          </h3>
          <ul className="space-y-3.5 text-sm">
            {support.map((link, index) => (
              <li key={index}>
                <a href={link.href} className="flex items-center hover:text-white transition-colors duration-200 group">
                  <span className="text-red-500 mr-2 transform group-hover:translate-x-1 transition-transform duration-200">
                    &gt;
                  </span>
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="relative border-t border-zinc-900 bg-[#08090d]">
        <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-zinc-500">

          <div>
            © 2024 <span className="text-red-500 font-medium">SoftNova Tech</span>. All rights reserved.
          </div>

          <div className="flex items-center gap-2 text-zinc-400">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            <span>All systems operational</span>
          </div>

          <div className="flex items-center space-x-4">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <span className="text-zinc-800">|</span>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
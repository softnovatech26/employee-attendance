import { Zap, Timer, ChartColumn, Lock, Heart } from "lucide-react";

const features = [
  {
    icon: <Zap size={14} className="text-yellow-400" />,
    text: "Real-time tracking enabled",
  },
  {
    icon: <Timer size={14} className="text-gray-200" />,
    text: "Live attendance timer",
  },
  {
    icon: <ChartColumn size={14} className="text-green-400" />,
    text: "Admin analytics system",
  },
  {
    icon: <Lock size={14} className="text-yellow-500" />,
    text: "Secure Firebase backend",
  },
];

const Footer = () => {
  return (
    <footer className="border-t border-neutral-800 bg-gradient-to-b from-[#0f0f10] via-[#151515] to-black">
      
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.08)_0%,transparent_70%)]"></div>

      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
        {/* Top */}
        <div className="grid lg:grid-cols-2">
          {/* Left */}
          <div>
            <h2 className="text-4xl font-bold text-[#ff4d4d]">
              Attendance System
            </h2>

            <p className="mt-6 me-18 pe-14 text-base text-gray-400">
              A real-time smart attendance management system for employees and
              admins with live tracking, automation, and advanced reporting
              features.
            </p>

            <span className="
              mt-8
              inline-flex
              items-center
              gap-2
              rounded-full
              border
              border-neutral-700
              bg-neutral-900
              px-5
              py-3
              text-sm
              text-white" >
              <Zap size={15} />
              Powered by React & Firebase
            </span>
          </div>

          {/* Right */}
          <div className="lg:pl-20">
            <h3 className="text-2xl font-semibold text-white">
              System Features
            </h3>

            <div className="mt-6 space-y-3">
              {features.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 text-gray-400"
                >
                  {item.icon}
                  <span className="text-sm">{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}

        <div className="my-12 border-t border-neutral-800"></div>

        {/* Bottom */}

        <div className="flex flex-col items-center justify-between gap-4 text-sm text-gray-500 md:flex-row">
          <p>
            © 2026{" "}
            <span className="text-gray-300">Soft Nova Tech.</span> All rights
            reserved.
          </p>

          <p className="flex items-center gap-2">
            Built with
            <Heart
              size={15}
              className="fill-red-500 text-red-500"
            />
            using React & Firebase
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
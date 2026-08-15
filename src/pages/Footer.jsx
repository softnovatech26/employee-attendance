import {
  Zap,
  Timer,
  BarChart3,
  Lock,
  Heart,
  ArrowUpRight,
} from "lucide-react";

const features = [
  {
    label: "Real-time tracking",
    icon: Zap,
  },
  {
    label: "Live attendance timer",
    icon: Timer,
  },
  {
    label: "Admin analytics",
    icon: BarChart3,
  },
  {
    label: "Secure backend",
    icon: Lock,
  },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-gray-800 bg-black text-white">

      {/* Background Glow */}
      <div className="pointer-events-none absolute -top-32 left-1/4 h-72 w-72 rounded-full bg-red-600/10 blur-[100px]" />

      <div className="relative mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-10">

        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">

          {/* Brand Section */}
          <div>
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-red-500/20 bg-red-500/10">
                <span className="text-lg font-bold text-red-500">
                  SN
                </span>
              </div>

              <h2 className="text-2xl font-bold tracking-tight">
                SoftNova{" "}
                <span className="text-red-500">Tech</span>
              </h2>
            </div>

            <p className="mt-6 max-w-xl text-sm leading-7 text-gray-400 sm:text-base">
              A smart employee attendance management system designed to make
              attendance tracking, employee monitoring, and reporting simple
              and efficient.
            </p>

            {/* Technology Badge */}
            <div className="mt-7 inline-flex items-center gap-2 rounded-full border border-gray-800 bg-gray-900 px-4 py-2.5 text-sm text-gray-400">
              <Zap size={15} className="text-red-500" />

              <span>
                Powered by{" "}
                <span className="font-medium text-gray-200">
                  React & Firebase
                </span>
              </span>
            </div>
          </div>

          {/* Features */}
          <div className="lg:border-l lg:border-gray-800 lg:pl-16">

            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-semibold">
                  System Features
                </h3>

                <div className="mt-2 h-0.5 w-10 rounded-full bg-red-500" />
              </div>

              <span className="hidden text-xs text-gray-600 sm:block">
                Built for modern teams
              </span>
            </div>

            <div className="mt-7 grid grid-cols-1 gap-3 sm:grid-cols-2">

              {features.map(({ label, icon: Icon }) => (
                <div
                  key={label}
                  className="group flex items-center gap-3 rounded-xl border border-gray-800 bg-gray-950 p-4 transition-all duration-300 hover:-translate-y-1 hover:border-red-500/40 hover:bg-gray-900"
                >
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-red-500/10">
                    <Icon
                      size={17}
                      className="text-red-500 transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>

                  <span className="text-sm text-gray-400 transition-colors group-hover:text-white">
                    {label}
                  </span>
                </div>
              ))}

            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="my-12 h-px bg-gray-800" />

        {/* Bottom */}
        <div className="flex flex-col items-center justify-between gap-5 text-center text-sm text-gray-500 sm:flex-row sm:text-left">

          <p>
            © 2026{" "}
            <span className="font-semibold text-gray-300">
              SoftNova Tech
            </span>
            . All rights reserved.
          </p>

          <div className="flex items-center gap-2 text-gray-500">
            <span>Built with</span>

            <Heart
              size={14}
              className="fill-red-500 text-red-500"
            />

            <span>
              using{" "}
              <span className="text-gray-300">
                React & Firebase
              </span>
            </span>

            <ArrowUpRight
              size={14}
              className="ml-1 text-red-500"
            />
          </div>

        </div>
      </div>
    </footer>
  );
}
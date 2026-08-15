

const features = [
  {
    number: "01",
    icon: "◉",
    title: "Live Tracking",
    description:
      "Monitor employee attendance in real-time with accurate check-in, check-out, and session tracking.",
  },
  {
    number: "02",
    icon: "◷",
    title: "5 Hour Limit",
    description:
      "Automatically monitor working sessions with time restrictions and smart attendance controls.",
  },
  {
    number: "03",
    icon: "▣",
    title: "Admin Dashboard",
    description:
      "Get complete attendance analytics, employee management, reports, and Excel export capabilities.",
  },
];

export default function FeatureCards() {
  return (
    <section
  id="features"
  className="relative overflow-hidden bg-black text-white px-6 sm:px-10 lg:px-12 py-20 md:py-24"
>
      {/* Background Glow */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[450px] h-[250px] bg-red-600/10 blur-[120px] pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto">

        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">

          <div className="inline-flex items-center gap-2 px-4 py-2 mb-5 rounded-full border border-red-500/20 bg-red-500/10 text-red-400 text-sm font-medium">
            <span className="w-2 h-2 rounded-full bg-red-500"></span>
            Powerful Features
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
            Everything You Need to
            <span className="text-red-500"> Manage Attendance</span>
          </h2>

          <p className="mt-5 text-gray-400 text-base sm:text-lg leading-7">
            A simple and powerful attendance management system built to make
            employee monitoring easier, faster, and more reliable.
          </p>

        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          {features.map((feature) => (
            <article
              key={feature.title}
              className="group relative overflow-hidden rounded-2xl border border-gray-800 bg-gray-950 p-7 transition-all duration-500 hover:-translate-y-2 hover:border-red-500/50 hover:shadow-2xl hover:shadow-red-600/10"
            >

              {/* Top Red Line */}
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-red-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              {/* Number */}
              <div className="flex items-center justify-between mb-7">

                <div className="flex items-center justify-center w-12 h-12 rounded-xl border border-red-500/20 bg-red-500/10 text-red-500 text-xl">
                  {feature.icon}
                </div>

                <span className="text-sm font-semibold text-gray-700 group-hover:text-red-500/60 transition-colors duration-300">
                  {feature.number}
                </span>

              </div>

              {/* Content */}
              <h3 className="text-xl sm:text-2xl font-bold mb-3 group-hover:text-red-500 transition-colors duration-300">
                {feature.title}
              </h3>

              <p className="text-gray-400 leading-7 text-sm sm:text-base">
                {feature.description}
              </p>

              {/* Bottom Link */}
              <div className="mt-7 flex items-center gap-2 text-sm font-semibold text-gray-500 group-hover:text-red-500 transition-colors duration-300">
                Explore feature
                <span className="transform group-hover:translate-x-1 transition-transform duration-300">
                  →
                </span>
              </div>

              {/* Hover Glow */}
              <div className="absolute -bottom-20 -right-20 w-40 h-40 rounded-full bg-red-600/10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

            </article>
          ))}

        </div>

        {/* Bottom CTA */}
        <div className="mt-14 text-center">

          <p className="text-gray-500 text-sm">
            Built for modern teams that value simplicity and productivity.
          </p>

        </div>

      </div>
    </section>
  );
}
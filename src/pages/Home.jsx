import FeatureCards from "./FeatureCards";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-black text-white">
        
        {/* Background Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-red-600/20 rounded-full blur-[140px] pointer-events-none"></div>

        <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-20 md:py-28">
          
          <div className="max-w-4xl mx-auto text-center">

            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 mb-7 rounded-full border border-red-500/30 bg-red-500/10 text-red-400 text-sm font-medium">
              <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
              Smart Employee Management
            </div>

            {/* Heading */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-tight">
              Smart{" "}
              <span className="text-red-500">
                Attendance
              </span>{" "}
              System
            </h1>

            {/* Description */}
            <p className="max-w-2xl mx-auto mt-7 text-base sm:text-lg md:text-xl text-gray-400 leading-8">
              Manage employee attendance effortlessly with real-time
              tracking, session monitoring, and powerful reporting tools
              designed for modern businesses.
            </p>

            {/* Buttons */}
            <div className="mt-10 flex flex-col sm:flex-row justify-center items-center gap-4">

              <button
                className="w-full sm:w-auto bg-red-600 hover:bg-red-700
                text-white font-semibold px-8 py-3.5 rounded-xl
                shadow-lg shadow-red-600/20
                transition-all duration-300
                hover:-translate-y-1"
              >
                Get Started →
              </button>

              <button
                className="w-full sm:w-auto border border-gray-700
                hover:border-red-500 hover:bg-red-500/10
                text-gray-200 font-semibold px-8 py-3.5 rounded-xl
                transition-all duration-300
                hover:-translate-y-1"
              >
                Learn More
              </button>

            </div>

          </div>

          {/* Dashboard Preview */}
          <div className="relative max-w-5xl mx-auto mt-20">

            <div className="rounded-2xl border border-gray-800 bg-gray-950/80 backdrop-blur-xl shadow-2xl overflow-hidden">

              {/* Browser Header */}
              <div className="flex items-center gap-2 px-5 py-4 border-b border-gray-800 bg-gray-900/70">

                <span className="w-3 h-3 rounded-full bg-red-500"></span>
                <span className="w-3 h-3 rounded-full bg-gray-600"></span>
                <span className="w-3 h-3 rounded-full bg-gray-600"></span>

                <div className="ml-4 flex-1 h-7 rounded-lg bg-gray-800"></div>

              </div>

              {/* Dashboard */}
              <div className="p-5 sm:p-8">

                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-7">

                  <div>
                    <p className="text-gray-500 text-sm">
                      Employee Dashboard
                    </p>

                    <h2 className="text-xl sm:text-2xl font-bold mt-1">
                      Attendance Overview
                    </h2>
                  </div>

                  <div className="px-4 py-2 rounded-lg bg-red-500/10 border border-red-500/20 text-red-400 text-sm">
                    ● Live Tracking
                  </div>

                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">

                  <div className="p-5 rounded-xl bg-gray-900 border border-gray-800 hover:border-red-500/40 transition">
                    <p className="text-gray-500 text-sm">
                      Total Employees
                    </p>
                    <h3 className="text-2xl font-bold mt-2">
                      124
                    </h3>
                  </div>

                  <div className="p-5 rounded-xl bg-gray-900 border border-gray-800 hover:border-red-500/40 transition">
                    <p className="text-gray-500 text-sm">
                      Present Today
                    </p>
                    <h3 className="text-2xl font-bold mt-2 text-red-500">
                      108
                    </h3>
                  </div>

                  <div className="p-5 rounded-xl bg-gray-900 border border-gray-800 hover:border-red-500/40 transition">
                    <p className="text-gray-500 text-sm">
                      Late
                    </p>
                    <h3 className="text-2xl font-bold mt-2">
                      09
                    </h3>
                  </div>

                  <div className="p-5 rounded-xl bg-gray-900 border border-gray-800 hover:border-red-500/40 transition">
                    <p className="text-gray-500 text-sm">
                      Absent
                    </p>
                    <h3 className="text-2xl font-bold mt-2">
                      07
                    </h3>
                  </div>

                </div>

                {/* Activity */}
                <div className="mt-5 p-5 rounded-xl bg-gray-900 border border-gray-800">

                  <div className="flex justify-between items-center mb-5">
                    <h3 className="font-semibold">
                      Recent Activity
                    </h3>

                    <span className="text-sm text-red-500">
                      View All
                    </span>
                  </div>

                  <div className="space-y-4">

                    <div className="flex items-center justify-between gap-3">
                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-full bg-red-500/10 flex items-center justify-center text-red-500">
                          ✓
                        </div>

                        <div>
                          <p className="text-sm font-medium">
                            Employee checked in
                          </p>

                          <p className="text-xs text-gray-500">
                            Today, 09:02 AM
                          </p>
                        </div>
                      </div>

                      <span className="text-xs text-red-400">
                        Present
                      </span>
                    </div>

                    <div className="h-px bg-gray-800"></div>

                    <div className="flex items-center justify-between gap-3">
                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-full bg-gray-800 flex items-center justify-center text-gray-400">
                          →
                        </div>

                        <div>
                          <p className="text-sm font-medium">
                            Session started
                          </p>

                          <p className="text-xs text-gray-500">
                            Today, 09:15 AM
                          </p>
                        </div>
                      </div>

                      <span className="text-xs text-gray-400">
                        Active
                      </span>
                    </div>

                  </div>

                </div>

              </div>
            </div>

            {/* Glow under dashboard */}
            <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-2/3 h-20 bg-red-600/20 blur-3xl"></div>

          </div>
        </div>
      </section>

      {/* Features */}
      <FeatureCards />
    </>
  );
}
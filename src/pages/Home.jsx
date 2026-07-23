import FeatureCards from "./FeatureCards";

export default function Home() {
  return (
    <>
     <section className="bg-black text-white">
      <div className="max-w-3xl mx-auto px-6 py-14 text-center">

        <h1 className="text-xl md:text-5xl font-bold leading-tight">
          Smart{" "}
          <span className="text-red-500">
            Attendance
          </span>{" "}
          System
        </h1>

        <p className="max-w-3xl mx-auto mt-5 text-base text-gray-400 leading-8">
          Manage employee attendance in real-time with live tracking,
          5-hour session limits, and instant reporting dashboard
          for admins.
        </p>

        <div className="mt-9 flex flex-col sm:flex-row justify-center items-center gap-5">

          <button className="bg-red-600 hover:bg-red-700 text-white font-semibold px-6 py-3 rounded-xl transition-all duration-300">
            Get Started
          </button>

          <button className="border border-gray-500 hover:border-white hover:bg-white hover:text-black text-white font-semibold px-6 py-3 rounded-xl transition-all duration-300">
            Learn More
          </button>

        </div>

      </div>
    </section>

      <FeatureCards />
    </>
  );
}
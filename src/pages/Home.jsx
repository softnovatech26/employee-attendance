import FeatureCards from "./FeatureCards";
import Footer from "./Footer";

export default function Home() {
  return (
    <>
      <h1 className="text-5xl font-bold text-white">
        Employee Attendance System
      </h1>

      <FeatureCards />
      <Footer />
    </>
  );
}
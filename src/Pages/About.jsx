import HeroSection from "../Sections/Aboutpage/HeroSection";
import HistorySection from "../Sections/Aboutpage/HistorySection";
import MissionvisonSection from "../Sections/Aboutpage/MissionvisonSection";
import SubscriberSection from "../Sections/Aboutpage/SubscriberSection";
import TestimonySection from "../Sections/Aboutpage/TestimonySection";

const About = () => {
  return (
    <div className="font-montserrat">
      <HeroSection />
      <MissionvisonSection />
      <HistorySection />
      <TestimonySection />
      <SubscriberSection />
    </div>
  );
};

export default About;

import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Audience } from "./components/Audience";
import { OperatingFlow } from "./components/OperatingFlow";
import { Benefits } from "./components/Benefits";
import { SkillSection } from "./components/SkillSection";
import { Opportunity } from "./components/Opportunity";
import { Authority } from "./components/Authority";
import { Curriculum } from "./components/Curriculum";
import { OperatorKit } from "./components/OperatorKit";
import { FitSection } from "./components/FitSection";
import { Pricing } from "./components/Pricing";
import { FAQ } from "./components/FAQ";
import { FinalCTA } from "./components/FinalCTA";
import { Footer } from "./components/Footer";
import { MobileStickyCTA } from "./components/MobileStickyCTA";
export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Audience />
        <OperatingFlow />
        <Benefits />
        <SkillSection />
        <Opportunity />
        <Authority />
        <Curriculum />
        <OperatorKit />
        <FitSection />
        <Pricing />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
      <MobileStickyCTA />
    </>
  );
}

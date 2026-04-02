import { Hero } from '../sections/Hero';
import { Contrast } from '../sections/Contrast';
import { HowItWorks } from '../sections/HowItWorks';
import { ValueStack } from '../sections/ValueStack';
import { SocialProof } from '../sections/SocialProof';
import { Guarantee } from '../sections/Guarantee';
import { FAQ } from '../sections/FAQ';
import { FinalCTA } from '../sections/FinalCTA';
import { Footer } from '../sections/Footer';

export const Home = () => {
  return (
    <>
      <Hero />
      <Contrast />
      <HowItWorks />
      <ValueStack />
      <SocialProof />
      <Guarantee />
      <FAQ />
      <FinalCTA />
      <Footer />
    </>
  );
};

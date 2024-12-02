import CallToAction from "./CallToAction";
import HandPicked from "./HandPicked";
import Hero from "./Hero";
import LatestReceips from "./LatestReceips";
import PopularCategories from "./PopularCategories";
import SuperDelicious from "./SuperDelicious";

const Landing = () => {
  return (
    <>
      <Hero />
      <SuperDelicious />
      <PopularCategories />
      <CallToAction />
      <HandPicked />
      <LatestReceips />
    </>
  );
};

export default Landing;

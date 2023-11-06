import Hero from "components/hero/TwoColumnWithVideo";
import Mission from "components/features/TwoColSingleFeatureWithStats2";
import styled from "styled-components";
import tw from "twin.macro";

function HomeScreen() {
  const Header = tw.div`py-4 bg-[#ffffff]`;
  const MissionText = tw.h2` underline font-semibold text-primary-400 text-3xl md:text-5xl text-center`;

  return (
    <Header className=" mt-10">
      <Hero />
      <MissionText>About Us</MissionText>
      <Mission />
    </Header>
  );
}

export default HomeScreen;

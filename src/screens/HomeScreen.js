import Hero from "components/hero/TwoColumnWithVideo";
import Mission from "components/features/TwoColSingleFeatureWithStats2";
import styled from "styled-components";
import tw from "twin.macro";
import PlayButton from '../components/buttons/videoPlayButton.js'

function HomeScreen() {
  const Header = tw.div`py-4 bg-[#ffffff]`;
  const TextHeader = tw.h2` underline font-semibold text-primary-400 text-2xl md:text-3xl text-center`;
  const VideoFram = tw.div`my-10 w-full py-2 px-3 lg:px-10 mt-10`;
  const VideoContainer = tw.div`bg-primary-200 h-[10cm] w-full rounded-md flex justify-center items-center`;

  return (
    <Header className=" mt-10">
      <Hero />
      <TextHeader>About Us</TextHeader>
      <Mission />
      <TextHeader>How It Works</TextHeader>
      <VideoFram>
        <VideoContainer>
          <PlayButton />
        </VideoContainer>
      </VideoFram>
      <TextHeader>
        Future Plans
      </TextHeader>
    </Header>
  );
}

export default HomeScreen;

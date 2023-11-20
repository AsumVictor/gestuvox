import Hero from "components/hero/TwoColumnWithVideo";
import Mission from "components/features/TwoColSingleFeatureWithStats2";
import styled from "styled-components";
import tw from "twin.macro";
import PlayButton from "../components/buttons/videoPlayButton.js";
import VideoPlayer from "components/video/VideoPlayer.jsx";
import Future from "../images/video/future plan.mp4";

function HomeScreen() {
  const Header = tw.div`py-4 bg-[#ffffff]`;
  const TextHeader = tw.h2` underline font-semibold text-primary-400 text-2xl md:text-3xl text-center`;
  const VideoFram = tw.div`my-10 w-full py-2 px-3 lg:px-10 mt-10`;
  const VideoFram2 = tw.div`my-10 w-full relative h-[15cm]`;
  const VideoContainer = tw.div`bg-primary-200 h-[10cm] w-full rounded-md flex justify-center items-center`;
  const FuturePlan = tw.div` w-full  px-5 py-10 bg-[#00000099] absolute h-full`;
  const FutureHeader = tw.h2` text-gray-200 text-3xl md:text-5xl font-bold`;
  const Para = tw.p` mt-5 text-gray-100 text-[16px] w-full lg:w-9/12 font-normal`
  const Button = tw.button` px-5 py-2 `


  return (
    <Header className=" mt-10">
      <Hero />
      <TextHeader>About Us</TextHeader>
      <Mission />
      <VideoFram2>
        <FuturePlan>
          <FutureHeader tw=" text-white">
            Future of digital connection
          </FutureHeader>
          <Para className=" bg-red-400">
            Lorem nfkebfef erfhefo efew fweoi fwef ewfewo fwe fewfjoewh few few
            feofherf ef ewf wehfwehf we fwf ewoihfwpoiqfjwioe few fiowehf qop fe
            fewf oew few foiqfwe fwe fwof w fwf we fwefwjefo wef.
            Lorem nfkebfef erfhefo efew fweoi fwef ewfewo fwe 
          </Para>
          <Button>Learn more</Button>
        </FuturePlan>
        <VideoPlayer src={Future} className={"bg-red-400 px-20"} />
      </VideoFram2>
      <TextHeader>How It Works</TextHeader>
      <VideoFram>
        <VideoContainer>
          <PlayButton />
        </VideoContainer>
      </VideoFram>
    </Header>
  );
}

export default HomeScreen;

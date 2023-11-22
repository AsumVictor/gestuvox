import Hero from "components/hero/TwoColumnWithVideo";
import Mission from "components/features/TwoColSingleFeatureWithStats2";
import styled from "styled-components";
import tw from "twin.macro";
import PlayButton from "../components/buttons/videoPlayButton.js";
import VideoPlayer from "components/video/VideoPlayer.jsx";
import Future from "../images/video/future plan.mp4";
import TeamMember from "../components/hero/TwoColumnWithFeaturesAndTestimonial.js";
import Profile from "../images/Profile/105683075.jpeg";
import { TeamMembers } from "data/teamMembers.js";

function HomeScreen() {
  const Header = tw.div`py-4 bg-[#ffffff]`;
  const TextHeader = tw.h2` underline font-semibold text-primary-400 text-2xl md:text-3xl text-center`;
  const VideoFram = tw.div`my-10 w-full py-2 px-3 lg:px-10 mt-10`;
  const VideoFram2 = tw.div`my-10 w-full relative h-[15cm]`;
  const VideoContainer = tw.div`bg-primary-200 h-[10cm] w-full rounded-md flex justify-center items-center`;
  const FuturePlan = tw.div` w-full  px-5 py-10 bg-[#00000099] absolute h-full`;
  const FutureHeader = tw.h2` text-gray-200 text-3xl md:text-5xl font-bold`;
  const Para = tw.p` mt-5 text-gray-100 text-[16px] w-full lg:w-9/12 font-normal`;
  const Button = tw.button` px-6 py-2 bg-white mt-10 font-normal rounded-md text-blue-800`;

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
          <Para>
            Our goal is to create a future where everyone, regardless of how
            they communicate, feels understood and connected. We aim to break
            down barriers between sign and spoken language, fostering a world
            where deaf individuals can easily interact and share their stories
            with others.
          </Para>
          <Button>Learn more</Button>
        </FuturePlan>
        <VideoPlayer src={Future} className={"bg-red-400 px-20"} />
      </VideoFram2>
      {/* <TextHeader>How It Works</TextHeader>
      <VideoFram>
        <VideoContainer>
          <PlayButton />
        </VideoContainer>
      </VideoFram> */}
      <TextHeader>Meet The Team</TextHeader>
      {TeamMembers.map(member=>(

      <TeamMember
        imageSrc={member.image}
        heading={member.role}
        description={member.bio}
        primaryButtonUrl = {member.link}
        testimonial={{
          customerCompany: member.title,
          customerName: member.name,
          quote: member.quote,
        }}
      />
      ))}

    </Header>
  );
}

export default HomeScreen;

import Hero from "components/hero/TwoColumnWithVideo.js";
import styled from "styled-components";
import tw from "twin.macro";

function HomeScreen() {

    const Header = tw.div`py-4`;


  return (
    <Header className=" mt-10">
        <Hero />
    </Header>
  )
}

export default HomeScreen
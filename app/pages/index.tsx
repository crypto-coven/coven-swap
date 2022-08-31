import type { NextPage } from "next";
import Head from "next/head";
import { Button } from "../components/Button";
import styled from "styled-components";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Coven Swap</title>
        <meta name="description" content="Find the WITCH you seek" />
        <link rel="icon" href="/" />
      </Head>

      <BackgroundImage>
        <ButtonContainer>
          <Button variant="filled_dark" size="small" href="/dashboard">
            Enter
          </Button>
        </ButtonContainer>
      </BackgroundImage>
    </div>
  );
};

const BackgroundImage = styled.div`
  background-image: url(/homepage.jpg);
  min-width: 100%;
  min-height: 100vh;
  height: 100%;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`;

const ButtonContainer = styled.div`
  position: absolute;
  top: 75%;
  width: 100%;
  display: flex;
  justify-content: center;
`;
export default Home;

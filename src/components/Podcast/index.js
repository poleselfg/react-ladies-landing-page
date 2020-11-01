import React from "react";
import {
  Podcast,
  PodcastContainer,
  PodcastGreeting,
  Text,
  H2,
  P,
  PodcastImage,
  PodcastButton,
} from "../Podcast/podcastElements.js";
import { Button, Title } from "../../Pages/globalElements";
import Audio from "../../Assets/images/podcast.png";

const Podcasts = () => {
  return (
    <>
      <Podcast>
        <Title> 🎙️ Podcast </Title>
        <PodcastContainer>
          <PodcastImage src={Audio} />
          <PodcastGreeting>
            <div>
              <Text>PRESENTAMOS</Text>
              <H2>Podcast de React Ladies</H2>
            </div>
            <P>
              Todas las semanas sacamos un nuevo episodio de todos los temas que
              te podés imaginar del mundo IT.
            </P>
            <PodcastButton md="6">
              <Button primary>Escuchar podcast</Button>
              <Button>Proponer un tema</Button>
            </PodcastButton>
          </PodcastGreeting>
        </PodcastContainer>
      </Podcast>
    </>
  );
};

export default Podcasts;

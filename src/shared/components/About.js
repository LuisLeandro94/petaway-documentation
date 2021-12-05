import React from "react";
import { AboutContent, AboutLogo, AboutText, AboutTitle, ButtonContainer, EndpointButton } from "../styles/AppStyles";
import AppLogo from '../../assets/PetAway_logo.png'

const About = () => {
  return (
      <AboutContent>
        <AboutLogo src={AppLogo} alt='logo' />
        <AboutTitle>What is a Rest API?</AboutTitle>
        <AboutText>
          API is short for ‘Application Programming Interface’ . 
            <br />
            <br />
          An API is a set of rules that lets programs talk to each other, exposing data and functionality across the Internet in a consistent format.
            <br />
            <br />
          REST stands for ‘Representational State Transfer’. This is an architectural pattern that describes how distributed systems can expose a consistent interface. When people use the term ‘REST API’, they are generally referring to an API accessed using the HTTP protocol at a predefined set of URLs.
            <br />
            <br />
          These URLs represent various resources — any information or content accessed at that location, which can be returned as JSON, HTML, audio files, or images. Often resources have one or more methods that can be performed on them over HTTP, like GET, POST, PUT, and DELETE. The action represented by the first and last of these is clear, but POST and PUT have specific meanings. 
            <br />
            <br />
          How they are defined is confusing, but the general rule is: use POST to create resources, and PUT to update resources.
            <br />
            <br />
            <br />
            <br />
          For example, PetAway’s API power its platform to bring together Petsitters and their clients, providing them with resources to, securely and rapidly, sell or buy a service. 
        </AboutText>
        <AboutTitle>About PetAway</AboutTitle>
        <AboutText>
          PetAway is a platform where pet owners can connect with loving pet sitters and walkers.
          <br />
          <br />
          We empower our community of trusted pet sitters and walkers to run their own pet care businesses on PetAway with the tools and security of our company to back them.
          <br />
          <br />
        </AboutText>
        <ButtonContainer>
          <EndpointButton to='/endpoints'>Endpoints</EndpointButton>
        </ButtonContainer>
      </AboutContent>
  )
}

export default About
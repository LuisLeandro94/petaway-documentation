import React from "react";
import logo from '../../assets/PetAway_logo.png';
import { AppLink, AppLogo, Content, Wrapper } from '../styles/AppStyles'

const Landing = () => {
  return (
    <Wrapper>
      <Content>
        <AppLogo src={logo} alt="logo" />
        <p>
          API Specification
        </p>
        <AppLink
          to='/about'
        >
          Continue
        </AppLink>
      </Content>
    </Wrapper>
  )
}

export default Landing
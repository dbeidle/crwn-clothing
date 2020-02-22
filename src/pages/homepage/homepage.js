import React from "react";
import Directory from "../../components/directory/directory";

import { HomePageContainer } from "./homepage-styles";

const HomePage = () => (
  <HomePageContainer>
    <h1>Welcome to the Store!</h1>
    <Directory />{" "}
    {/*This calls the directory component to render the menu that you can choose from */}
  </HomePageContainer>
);

export default HomePage;

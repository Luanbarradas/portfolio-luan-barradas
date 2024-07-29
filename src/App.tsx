import React from "react";

import { Header } from "./components/Header";
import { Main } from "./components/Main";
import { Projects } from "./components/Projects";
import { ToolsSkills } from "./components/ToolsSkills";
import { Footer } from "./components/Footer";

import "./index.css";

const App = () => {
  return (
    <>
      <Header />
      <Main />
      <ToolsSkills />
      <Projects />
      <Footer />
    </>
  );
};

export default App;

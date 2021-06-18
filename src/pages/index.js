import React from "react";

import { TopBackground } from "../components/TopBackground";
import Layout from "../components/Layout";
import Seo from "../components/Seo";
import Header from "../components/Header";
import Portfolio from "../components/Portfolio";
import LastPosts from "../components/LastPosts";

const HomePage = () => (
  <Layout>
    <Seo title="Home" />
    <TopBackground />
    <Header />
    <Portfolio />
    <LastPosts />
  </Layout>
);

export default HomePage;

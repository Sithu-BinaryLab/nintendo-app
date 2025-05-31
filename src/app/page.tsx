import Banners from "@/components/molecules/banners";
import BestSellers from "@/components/organisms/best-sellers";
import Characters from "@/components/organisms/characters";
import Featured from "@/components/organisms/featured";
import GamingSystem from "@/components/organisms/gaming-system";
import NewReleases from "@/components/organisms/new-releases";
import News from "@/components/organisms/news";
import OnlineStore from "@/components/organisms/online-store";
import RecentlyViewed from "@/components/organisms/recently-viewed";
import React from "react";

const HomePage = () => {
  return (
    <section>
      <Banners />
      <Featured />
      <OnlineStore />
      <GamingSystem />
      <News />
      <Characters />
      <BestSellers />
      <NewReleases />
      <RecentlyViewed />
    </section>
  );
};

export default HomePage;

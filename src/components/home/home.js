import classes from "../../styles/components/home.module.scss";
import Image from "next/image";
import HeroSectionHomeText from "./app/heroSectionText";
import HeroSectionHomeImage from "./app/heroSectionImage";
const HomePage = () => {
  return (
    <div className={classes.home} id="home">
      <section className={classes.sectionHero}>
        <HeroSectionHomeText />
        <HeroSectionHomeImage />
      </section>
    </div>
  );
};

export default HomePage;

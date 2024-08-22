import Button from "@/components/app/button";
import classes from "../../../styles/components/home.module.scss";
const HeroSectionHomeText = () => {
  return (
    <div className={classes.sectionText}>
      <h1 className={classes.heading}>
        <span className={classes.headingDesc}>
          iBest Destinations around the world
        </span>
        <br />
        <span className={classes.headingUtama}>
          Travel, enjoy <br /> and live a new <br /> and full life
        </span>
      </h1>
      <p className={classes.desc}>
        Built Wicket longer admire do barton vanity itself do in it. Preferred
        to sportsmen it engrossed listening. Park gate sell they west hard for
        the.
      </p>
      <Button text="Find our More"/>
    </div>
  );
};
export default HeroSectionHomeText;

import classes from "../../../styles/components/home.module.scss";
import Image from "next/image";
import groupImage from "../../../../public/app/image/Group.png";
import travelImage from "../../../../public/app/image/travel.png";
const HeroSectionHomeImage = () => {
  return (
    <div className={classes.sectionImage}>
      <Image
        src={groupImage}
        width={128.04}
        height={69.56}
        style={{
          position: "absolute",
          marginTop: "56px"
        }}
      />
      <Image src={travelImage} width={765} height={764} />
    </div>
  );
};

export default HeroSectionHomeImage;

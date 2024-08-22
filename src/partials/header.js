import style from "../styles/components/partials/header.module.scss";
import Image from "next/image";
import LogoImage from "../../public/app/image/nike.jpg";
import { LogoText, modelMenu } from "@/model/header/model";
import { useEffect, useRef } from "react";
import Link from "next/link";
export const Header = () => {
  const headerRef = useRef(null);
  useEffect(() => {
    window.onscroll = () => {
      let scrollY = Math.round(window.scrollY);
      if (scrollY > 20) {
      }
    };
  });
  return (
    <header className={style.header} ref={headerRef}>
      <div className={style.container}>
        <div className={style.logo}>
          <a href="">
            <Image src={LogoImage} alt="logo" width={100} height={50} />
            <h3>{LogoText}</h3>
          </a>
        </div>
        <div className={style.menu}>
          <nav>
            <ul>
              {modelMenu.map((e) => {
                return (
                  <li key={e.children}>
                    <Link href={e.url}>{e.children}</Link>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>
        <div className={style.profile}>Profile</div>
      </div>
    </header>
  );
};

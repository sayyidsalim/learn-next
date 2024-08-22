import HomePage from "@/components/home/home";
import classes from "../styles/Home.module.css"
import styles from "../styles/components/home.module.scss"
export default function Home() {
  return (
    <div className={styles.home}>
      <HomePage />
    </div>
  );
}

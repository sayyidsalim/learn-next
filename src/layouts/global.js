const { Footer } = require("@/partials/footer");
const { Header } = require("@/partials/header");
import classes from "../styles/Home.module.css"
const GlobalLayout = ({ children }) => {
  return (
    <>
      <Header />
      <div className={classes.wraper}>
        <main>{children}</main>
      </div>
      <Footer />
    </>
  );
};

export default GlobalLayout;

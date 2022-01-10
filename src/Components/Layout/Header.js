import { Fragment } from "react";
import foodImg from "../../assests/cheeseHeader.jpg";
import HeaderCartButton from "./HeaderCartButton";
import classes from "./Header.module.css";

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>Quesos de la peninsula </h1>
        <HeaderCartButton onClick={props.onShowCart} />
      </header>
      <div className={classes["main-image"]}>
        <img src={foodImg} alt="Food-Header" />
      </div>
    </Fragment>
  );
};

export default Header;

// Más sobre Fragments: https://es.reactjs.org/docs/fragments.html

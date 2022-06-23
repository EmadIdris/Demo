import React from "react";
import classes from "./Header.module.css";
import mealsImage from "../../assets/meals.jpg";
import HeaderCartButton from "./HeaderCartButton";
function Header(props) {
  return (
    <React.Fragment>
      <header className={classes.header}>
        <h1>React Meals Page</h1>
        <HeaderCartButton showModal={props.showModalProps} />
      </header>
      <div className={classes["main-image"]}>
        <img src={mealsImage} alt="meal Image" />
      </div>
    </React.Fragment>
  );
}

export default Header;

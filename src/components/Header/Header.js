import React, { useContext } from "react";
import "./Header.css";
import Icon1 from "../../assets/1.svg";
import Icon2 from "../../assets/2.svg";
import Icon3 from "../../assets/3.svg";
import Icon4 from "../../assets/4.svg";
import Icon5 from "../../assets/5.svg";
import Icon6 from "../../assets/6.svg";
import Icon7 from "../../assets/7.svg";
import Icon8 from "../../assets/8.svg";
import Icon9 from "../../assets/9.svg";
import Icon4_2 from "../../assets/4_2.svg";
import backgroundIcon from "../../assets/background.svg";
import ButtonContext from "../../Context/button-context";
const Header = (props) => {
  const ctx = useContext(ButtonContext);
  const first = () => {
    ctx.setPage(0);
  };
  const second = () => {
    ctx.setPage(1);
  };
  const third = () => {
    ctx.setPage(2);
  };
  const fourth = () => {
    ctx.setPage(3);
  };
  const fifth = () => {
    ctx.setPage(4);
  };
  const sixth = () => {
    ctx.setPage(5);
  };
  const seventh = () => {
    ctx.setPage(6);
  };
  const eigth = () => {
    ctx.setPage(7);
  };
  const ninth = () => {
    ctx.setPage(8);
  };

  return (
    <section className="header">
      <button className="b1" onClick={ninth}>
        {ctx.page == 8 && (
          <img className="image-size" src={backgroundIcon} alt="My Happy SVG" />
        )}
        <img className="image-size" src={Icon1} alt="My Happy SVG" />
      </button>
      <button className="b1" onClick={eigth}>
        {ctx.page == 7 && (
          <img className="image-size" src={backgroundIcon} alt="My Happy SVG" />
        )}
        <img className="image-size" src={Icon2} alt="My Happy SVG" />
      </button>
      <button className="b1" onClick={seventh}>
        {ctx.page == 6 && (
          <img className="image-size" src={backgroundIcon} alt="My Happy SVG" />
        )}
        <img className="image-size" src={Icon3} alt="My Happy SVG" />
      </button>
      <button className="b1" onClick={sixth}>
        {ctx.page == 5 && (
          <img className="image-size" src={backgroundIcon} alt="My Happy SVG" />
        )}
        {ctx.page != 5 && (
          <img className="image-size" src={Icon4} alt="My Happy SVG" />
        )}
        {ctx.page == 5 && (
          <img className="image-size" src={Icon4_2} alt="My Happy SVG" />
        )}
      </button>
      <button className="b1" onClick={fifth}>
        {ctx.page == 4 && (
          <img className="image-size" src={backgroundIcon} alt="My Happy SVG" />
        )}
        <img className="image-size" src={Icon5} alt="My Happy SVG" />
      </button>
      <button className="b1" onClick={fourth}>
        {ctx.page == 3 && (
          <img className="image-size" src={backgroundIcon} alt="My Happy SVG" />
        )}
        <img className="image-size" src={Icon6} alt="My Happy SVG" />
      </button>
      <button className="b1" onClick={third}>
        {ctx.page == 2 && (
          <img className="image-size" src={backgroundIcon} alt="My Happy SVG" />
        )}
        <img className="image-size" src={Icon7} alt="My Happy SVG" />
      </button>
      <button className="b1" onClick={second}>
        {ctx.page == 1 && (
          <img className="image-size" src={backgroundIcon} alt="My Happy SVG" />
        )}
        <img className="image-size" src={Icon8} alt="My Happy SVG" />
      </button>
      <button className="b1" onClick={first}>
        {ctx.page == 0 && (
          <img className="image-size" src={backgroundIcon} alt="My Happy SVG" />
        )}
        <img className="image-size" src={Icon9} alt="My Happy SVG" />
      </button>
    </section>
  );
};

export default Header;

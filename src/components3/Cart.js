import { useContext } from "react";
import Modal from "./Modal";
import classes from "./Cart.module.css";
import closesvg from "./../assets/close.svg";
import editSvg from "./../assets/orangeedit.svg";
import ticksvg from "./../assets/tick.svg";
const Cart = (props) => {
  function onHideCart() {
    props.onHideCartHandler();
  }
  return (
    <Modal onClose={props.onClose}>
      <div>
        <button className={classes.cartbtn} onClick={onHideCart}>
          <img src={closesvg} alt="My Happy SVG" />
        </button>
      </div>
      <div className={classes.carteditpart}>
        ویرایش حساب کاربری
        <img src={editSvg} alt="My Happy SVG" />
      </div>
      <div className={classes.linediv}></div>
      <div className="percon">
        <div>
          <label className="infla">نام خانوادگی</label>
          <input value="علی آبادی" className="infinput"></input>
        </div>
        <div>
          <label className="infla">نام </label>
          <input value="علی" className="infinput"></input>
        </div>
      </div>
      <div className="percon2">
        <label className="infla">نام کاربری </label>
        <input value="@ahmadian_ali" className="userinp"></input>
      </div>
      <div className={classes.btncartdiv}>
        <button className={classes.savecart}>
          ثبت تغییرات
          <img src={ticksvg} alt="My Happy SVG" />
        </button>
      </div>
    </Modal>
  );
};

export default Cart;

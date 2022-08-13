import React from "react";
import "./UserInfo.css";
import exitsvg from "./../assets/exit.svg";
import editsvg from "./../assets/edit.svg";
const UserInfo = (props) => {
  function onShowCart() {
    props.onShowCartHandler();
  }
  return (
    <div className="useinf">
      <div>
        <h5 className="centit">اطلاعات کاربری شما</h5>
      </div>
      <div className="percon">
        <div>
          <label className="infla">نام خانوادگی</label>
          <label className="infinput">علی آبادی</label>
        </div>
        <div>
          <label className="infla">نام </label>
          <label className="infinput">علی</label>
        </div>
      </div>
      <div className="percon2">
        <label className="infla">نام کاربری </label>
        <label className="userinp">@ahmadian_ali</label>
      </div>
      <div className="infbut">
        <button className="exitinfbut">
          خروج
          <img src={exitsvg} alt="My Happy SVG" />
        </button>
        <button className="editinfobut" onClick={onShowCart}>
          ویرایش حساب
          <img src={editsvg} alt="My Happy SVG" />
        </button>
      </div>
    </div>
  );
};

export default UserInfo;

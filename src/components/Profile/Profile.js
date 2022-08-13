import "./Profile.css";
import React from "react";
import ProfilePhoto from "../../assets/R.jpg";
import SearchIcon from "../../assets/search.svg";
import BellImage from "../../assets/bell.svg";

const Profile = () => {
  return (
    <div className="prof">
      <div className="attr">
        <img className="photo" src={ProfilePhoto} alt=""></img>
        <span>رحیم رحمانی</span>
      </div>

      <div className="attr">
        <span className="icon">
          <button className="b1">
          <img src={BellImage} alt="My Happy SVG" />
          </button>
        </span>

        <span className="icon">
          <button className="b1">
          <img src={SearchIcon} alt="My Happy SVG" />
          </button>
        </span>
      </div>

    </div>
  );
};

export default Profile;

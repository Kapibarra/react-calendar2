import React from "react";
import classes from "./Card.module.css";
import mainImg from "../../assets/card-image.png";
import timeIcon from "../../assets/icons/time.png";
import locationIcon from "../../assets/icons/location.png";

function Card({ time, location, title, description }) {
  return (
    <div className={classes.Card}>
      <div className={classes.CardImage}>
        <img src={mainImg} alt="event" />
      </div>
      <div className={classes.CardInnerWrapper}>
        <div className={classes.CardTime}>
          <img src={timeIcon} alt="time icon" />
          {time}
        </div>
        <div className={classes.CardLocation}>
          <img src={locationIcon} alt="location icon" />
          {location}
        </div>
        <div className={classes.CardTitle}>{title}</div>
        <div className={classes.CardDescription}>{description}</div>
      </div>
    </div>
  );
}

export default Card;

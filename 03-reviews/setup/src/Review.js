import React, { useState } from "react";
import peoples from "./data";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";

const Review = () => {
  const [index, setIndex] = useState(0);
  const { name, job, image, text } = peoples[index];

  const nextPerson = () => {
    setIndex((index) => {
      let newIndex = index + 1;
      return checkNumber(newIndex);
    });
  };

  const prevPerson = () => {
    setIndex((index) => {
      let newIndex = index - 1;
      return checkNumber(newIndex);
    });
  };

  const checkNumber = (num) => {
    if (num > peoples.length - 1) {
      return 0;
    }
    if (num < 0) {
      return peoples.length - 1;
    }
    return num;
  };

  const randomPerson = () => {
    const newIndex = Math.floor(Math.random() * peoples.length);
    setIndex((index) => {
      if (newIndex === index) {
        return checkNumber(newIndex + 1);
      }

      return newIndex;
    });
  };
  return (
    <article className="review">
      <div className="img-container">
        <img src={image} alt={name} className="person-img" />
        <span className="quote-icon">
          <FaQuoteRight />
        </span>
      </div>
      <h4 className="author">{name}</h4>
      <p className="job">{job}</p>
      <p className="info">{text}</p>
      <div className="button-container">
        <button className="prev-btn" onClick={() => prevPerson()}>
          <FaChevronLeft />
        </button>
        <button className="next-btn" onClick={() => nextPerson()}>
          <FaChevronRight />
        </button>
        <button className="random-btn" onClick={() => randomPerson()}>
          suprise me
        </button>
      </div>
    </article>
  );
};

export default Review;

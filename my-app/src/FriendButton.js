import { useState } from "react";
import "./styles.css";
import "./button.css";
export const FriendButton = ({ setImage }) => {
  var images = [
    "man1.jpg",
    "man2.jpg",
    "man3.jpg",
    "man4.jpg",
    "man5.jpg",
    "man6.jpg",
    "man7.jpg",
    "man8.jpg",
    "man9.jpg",
    "man10.jpg",
    "man11.jpg",
    "man12.jpg",
  ];

  var random = Math.floor(Math.random() * images.length);

  const [show, setShow] = useState(false);
  const [index, setIndex] = useState(0);

  // Randomly upload a photo of a white dude
  // when the Button component is clicked
  const handleClick = (event) => {
    setTimeout(function () {
      setShow(true);
      const idx = Math.floor(Math.random() * images.length);
      setIndex(idx);
      setImage(images[idx]);
    }, 1000);
  };
  // Call a function (passed as a prop from the parent component)
  // to handle the user-selected file

  return (
    <>
      <button
        className="button"
        onClick={handleClick}
        style={{ fontFamily: "Quicksand", backgroundColor: "green" }}
      >
        Friend
      </button>
    </>
  );
};

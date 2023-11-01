import "./App.css";
import React, { useEffect, useState } from "react";

import { FoeButton } from "./FoeButton";
import { FriendButton } from "./FriendButton";
import { NavBar } from "./NavBar";

function App() {
  const [fileName, setFileName] = useState("");
  const [image_src, setImage_Src] = useState("man1.jpg");

  const handleImageSrc = (imagesrc) => {
    setImage_Src(imagesrc);
  };

  return (
    <div className="App">
      <NavBar />

<div class="gendiv">
  <img class="centercrop imagespacer" src={image_src} />
</div>
<header className="App-header">
  <FriendButton setImage={handleImageSrc} />
  <FoeButton setImage={handleImageSrc} />
</header>

<a
  href="https://www.cutercounter.com/"
  target="_blank"
  className="counter"
>
  <img
    src="https://www.cutercounter.com/hits.php?id=hexodkxn&nd=6&style=3"
    border="0"
    alt="hit counter"
  />
</a>

      
      
    </div>
  );
}

export default App;

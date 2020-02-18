import React, { useState } from "react";
import ReactDOM from "react-dom";

export const Image = ({ url, setShowcaseURL }) => {
  const handleOnClick = event => {
    event.preventDefault();
    event.stopPropagation();
    setShowcaseURL(url);
  };

  return <img src={url} height="175" width="200" onClick={handleOnClick}></img>;
};

export const Showcase = ({ url }) => {
  return (
    <>
      <img src={url} height="525" width="600"></img>
    </>
  );
};

export const App = () => {
  const [showcaseURL, setShowcaseURL] = useState("");

  return (
    <div>
      <Image
        url="https://images.unsplash.com/photo-1508138221679-760a23a2285b"
        setShowcaseURL={setShowcaseURL}
      />
      <Image
        url="https://images.unsplash.com/photo-1474487548417-781cb71495f3"
        setShowcaseURL={setShowcaseURL}
      />
      <Image
        url="https://images.unsplash.com/photo-1580109672851-b85640868813"
        setShowcaseURL={setShowcaseURL}
      />
      <Image
        url="https://images.unsplash.com/photo-1580046939256-c377c5b099f1"
        setShowcaseURL={setShowcaseURL}
      />
      <Image
        url="https://images.unsplash.com/photo-1576801488695-2e4d7a14b8b5"
        setShowcaseURL={setShowcaseURL}
      />
      <Showcase url={showcaseURL} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));

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

  const defaultImages = [
    "https://images.unsplash.com/photo-1508138221679-760a23a2285b",
    "https://images.unsplash.com/photo-1474487548417-781cb71495f3",
    "https://images.unsplash.com/photo-1580109672851-b85640868813",
    "https://images.unsplash.com/photo-1580046939256-c377c5b099f1",
    "https://images.unsplash.com/photo-1576801488695-2e4d7a14b8b5"
  ];

  const [images, setImages] = useState(defaultImages);
  const [newImageUrl, setNewImageUrl] = useState("");

  const imgComponents = images.map(url => {
    return <Image url={url} key={url} setShowcaseURL={setShowcaseURL} />;
  });

  const addImage = event => {
    event.preventDefault();
    event.stopPropagation();
    setImages([...images, newImageUrl]);
  };

  return (
    <div>
      <form>
        <input
          type="text"
          placeholder="URL obrazu..."
          value={newImageUrl}
          onChange={e => setNewImageUrl(e.target.value)}
        ></input>
        <button onClick={addImage}>Dodaj</button>
      </form>
      {imgComponents}
      <Showcase url={showcaseURL} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));

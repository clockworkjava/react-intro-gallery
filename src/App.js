import React from "react";
import ReactDOM from "react-dom";

export const Image = ({ url }) => {
  const handleOnClick = event => {
    event.preventDefault();
    event.stopPropagation();
    console.log(url);
  };

  return <img src={url} height="175" width="200" onClick={handleOnClick}></img>;
};

export const App = () => {
  return (
    <div onClick={event => console.log("Event from div")}>
      <Image url="https://images.unsplash.com/photo-1508138221679-760a23a2285b" />
      <Image url="https://images.unsplash.com/photo-1474487548417-781cb71495f3" />
      <Image url="https://images.unsplash.com/photo-1580109672851-b85640868813" />
      <Image url="https://images.unsplash.com/photo-1580046939256-c377c5b099f1" />
      <Image url="https://images.unsplash.com/photo-1576801488695-2e4d7a14b8b5" />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));

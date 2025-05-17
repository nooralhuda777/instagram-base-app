import React, { useState } from "react";

const Composer = () => {
  const [text, setText] = useState("");
  const [image, setImage] = useState(null);

  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Call API to create new post
    console.log("Creating new post with text:", text, "and image:", image);
  };

  return (
    <form onSubmit={handleSubmit}>
      <textarea
        value={text}
        onChange={handleTextChange}
        placeholder="What's on your mind?"
      />
      <input type="file" onChange={handleImageChange} />
      <button type="submit">Post</button>
    </form>
  );
};

export default Composer;

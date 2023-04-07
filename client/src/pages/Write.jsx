import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

let Write = () => {
  let [value, setValue] = useState("");
  console.log(value); //shows what you type in console just for testing purposes
  return (
    <div className="add">
      <div className="content">
        <input type="text" placeholder="Title of Article" />
        <div className="editorContainer">
          <ReactQuill theme="snow" value={value} onChange={setValue} />
        </div>
      </div>
      <div className="menu">
        <div className="item">
          <br></br>
          <h1>Publish</h1>
          <span>
            <b>Status: </b> Draft
          </span>
          <span>
            <b>Visibility: </b> Public
          </span>
          <input style={{ display: "none" }} type="file" id="file" name="" />
          <label htmlFor="file">Upload Image</label>
          <div className="buttons">
            <button>Save Draft</button>
            <button>Update</button>
          </div>
        </div>
        <div className="item">
            <h1>Category</h1>
            <input type="radio" name="cat" value="Mindfulness" id="Mindfulness"/>
            <label htmlFor="Mindfulness">Mindfulness</label>
            <br></br>
            <input type="radio" name="cat" value="Morning Routine" id="Morning Routine"/>
            <label htmlFor="Morning Routine">Morning Routine</label>
            <br></br>
            <input type="radio" name="cat" value="Productivity" id="Productivity"/>
            <label htmlFor="Productivity">Productivity</label>
        </div>
      </div>
    </div>
  );
};

export default Write;

import React, {useState} from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

let Write = () => {

    let [value, setValue] = useState('')
    console.log(value);
  return (
    <div className="add">
      <div className="content">
        <input type="text" placeholder="Title of Article" />
        <div className="editorContainer">
          <ReactQuill
            theme="snow"
            value={value}
            onChange={setValue}
          />
        </div>
      </div>
      <div className="menu">
        <div className="item">item1</div>
        <div className="item">item2</div>
      </div>
    </div>
  );
};

export default Write;

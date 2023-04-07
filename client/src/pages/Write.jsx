import React from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const Write = () => {
    return (
        <div className="add">
            <div className="content">
            <input type="text" placeholder="Title of Article" />
            </div>
            <div className="menu">
            <div className="item">item1</div>
            <div className="item">item2</div>
            </div>

        </div>
    )
}

export default Write
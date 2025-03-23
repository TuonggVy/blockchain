import React from "react";

const EditorCard = ({ name, desc, link }) => {
    return (
      <div className="editor-card">
        <div className="avatar"></div>
        <div className="info">
          <h4>{name}</h4>
          {desc && <p>{desc}</p>}
          {link && <a href={link} target="_blank" rel="noopener noreferrer">{link}</a>}
        </div>
        <button className="follow">Follow</button>
      </div>
    );
  };

export default EditorCard;

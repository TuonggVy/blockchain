import React from "react";

const EditorCard = ({ name, desc, link, avatar }) => {
  return (
    <div className="editor-card">
      <img src={avatar} alt={name} className="avatar" />
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

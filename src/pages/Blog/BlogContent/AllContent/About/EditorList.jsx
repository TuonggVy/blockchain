import React from 'react'
import EditorCard from './EditorCard';

function EditorList() {
  const editors = [
    { name: "LayerEdge", desc: "We are building Bitcoin backed Internet...", link: "https://www.layeredge.io/", avatar: "/assets/images/LayerEdge_logo_2.png" },
    { name: "Ayush Saha", desc: "", link: "", avatar: "/assets/images/Ayush_Saha.png" },
    { name: "Ayush Gupta", desc: "", link: "", avatar: "/assets/images/Ayush_Gupta.png" },
    { name: "Rishsane", desc: "https://x.com/therishabhanand", link: "", avatar: "/assets/images/Rishsane.png" },
];
      
      return (
        <section className="editors">
          <h3>EDITORS</h3>
          {editors.map((editor, index) => (
            <EditorCard key={index} {...editor} />
          ))}
        </section>
      );
}
export default EditorList
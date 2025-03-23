import React from 'react'
import EditorCard from './EditorCard';

function EditorList() {
    const editors = [
        { name: "LayerEdge", desc: "We are building Bitcoin backed Internet...", link: "https://www.layeredge.io/" },
        { name: "Ayush Saha", desc: "", link: "" },
        { name: "Ayush Gupta", desc: "", link: "" },
        { name: "Rishsane", desc: "https://x.com/therishabhanand", link: "" },
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
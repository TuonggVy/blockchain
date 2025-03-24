import React from 'react'
import EditorCard from './EditorCard';

function EditorList() {
  const editors = [
    { name: "LayerEdge", desc: "We are building Bitcoin backed Internet...", link: "https://www.layeredge.io/", avatar: "https://cdn-images-1.medium.com/fit/c/120/120/1*h4_yDoHr9N6E2Ex90XYjxw.png" },
    { name: "Ayush Saha", desc: "", link: "", avatar: "https://cdn-images-1.medium.com/fit/c/120/120/1*fvYHggwYOv4wFi7lcr9XMw.png" },
    { name: "Ayush Gupta", desc: "", link: "", avatar: "https://cdn-images-1.medium.com/fit/c/120/120/0*ee7DbAnYqJzYWjiv" },
    { name: "Rishsane", desc: "https://x.com/therishabhanand", link: "", avatar: "https://cdn-images-1.medium.com/fit/c/120/120/1*n_ThvqmAnY6y65lxYs1Jcg.jpeg" },
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
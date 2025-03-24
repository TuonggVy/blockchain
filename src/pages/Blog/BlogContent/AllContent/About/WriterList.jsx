import React from 'react'
import WriterCard from './WriterCard';

function WriterList() {
  const writers = [
    { name: "Ayush Saha", image: "https://cdn-images-1.medium.com/fit/c/120/120/1*fvYHggwYOv4wFi7lcr9XMw.png" },
  ];
  return (
    <section className="writers">
      <h3>WRITERS</h3>
      {writers.map((writer, index) => (
        <WriterCard key={index} {...writer} />
      ))}
    </section>
  );
}

export default WriterList
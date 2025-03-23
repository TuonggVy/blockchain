import React from 'react'
import WriterCard from './WriterCard';

function WriterList() {
  const writers = [
    { name: "Ayush Saha", image: "https://example.com/ayush-saha.jpg" },
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
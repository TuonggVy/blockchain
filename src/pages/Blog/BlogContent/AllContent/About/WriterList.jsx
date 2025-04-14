import React from "react";
import WriterCard from "./WriterCard";

function WriterList() {
  const writers = [
    { name: "Ayush Saha", image: "/assets/images/Ayush_Saha.png" },
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

export default WriterList;

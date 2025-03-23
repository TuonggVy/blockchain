import React from 'react'

const WriterCard = ({ name, image }) => {
    return (
      <div className="writer-card">
        <img className="avatar" src={image} alt={name} />
        <div className="info">
          <h4>{name}</h4>
        </div>
        <button className="follow">Follow</button>
      </div>
    );
  };

export default WriterCard
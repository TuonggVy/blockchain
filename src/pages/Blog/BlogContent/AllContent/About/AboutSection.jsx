import React from 'react'

function AboutSection() {
    return (
        <section className="about">
          <div className="logo-box">
                <img 
                    src="https://cdn-images-1.medium.com/v2/resize:fill:120:120/1*8lRcWHS3VZRapX8QkaJ4aw.png" 
                    alt="LayerEdge Logo" 
                    className="logo-image"
                />
            </div>
          <div className="text">
            <h2>ABOUT</h2>
            <p className='p1'>LayerEdge</p>
            <p className='p2'>We are building Bitcoin backed Internet using trust minimized verification & proof aggregation for all layers & apps.</p>
          </div>
        </section>
      );
}

export default AboutSection
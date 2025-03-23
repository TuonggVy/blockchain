import React from 'react'

function AboutHeader() {
    return (
        <header className="header-about">
          <div className="logo-about">Medium</div>
          <div className="actions">
            <button className="sign-in">Sign in</button>
            <button className="get-started">Get started</button>
          </div>
        </header>
      );
}

export default AboutHeader
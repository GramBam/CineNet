import React from 'react'

export const Navbar = () => {
  return (
    <div>
    <nav className="navbar bg-dark">
      <h1>
        <a href="index.html"><i className="fas fa-code"></i> CineNet</a>
      </h1>
      <ul>
        <li><a href="profiles.html">Gigs</a></li>
        <li><a href="register.html">Register</a></li>
        <li><a href="login.html">Login</a></li>
      </ul>
    </nav>
    </div>
  )
}

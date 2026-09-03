import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-primary-subtle">
      <div className="container">

        <NavLink
          to="/"
          className="navbar-brand fw-bold text-primary"
        >
          React JS
        </NavLink>

        <div className="navbar-nav ms-auto">
          <NavLink to="/" className="nav-link px-3">
            Home
          </NavLink>

          <NavLink to="/register" className="nav-link px-3">
            Register
          </NavLink>

          <NavLink to="/counter" className="nav-link px-3">
            Counter
          </NavLink>

          <NavLink to="/plus" className="nav-link px-3">
            Plus
          </NavLink>
        </div>

      </div>
    </nav>
  )
}

export default Header
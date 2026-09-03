import React from 'react'
import { Link } from 'react-router-dom'

const Error = () => {
  return (
    <div className="text-center py-5 my-5">

      <h1 className="display-1 fw-bold text-primary">
        404
      </h1>

      <h2 className="fw-bold">
        Page Not Found
      </h2>

      <p className="text-secondary mb-4">
        Sorry, the page you are looking for doesn't exist.
      </p>

      <Link to="/" className="btn btn-primary px-4">
        Go to Home
      </Link>

    </div>
  )
}

export default Error
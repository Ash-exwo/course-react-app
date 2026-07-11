import React from 'react'
import { Link } from 'react-router'

const NavBar = () => {
  return (
    <div>
        <nav
                className="navbar navbar-expand-lg shadow sticky-top"
                style={{ backgroundColor: "#4B2E83" }}
            >
                <div className="container">

                    <a
                        className="navbar-brand fw-bold fs-3"
                        href="/"
                        style={{ color: "#F4F7F2" }}
                    >
                        CourseSync
                    </a>

                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNav"
                        aria-controls="navbarNav"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                        style={{ borderColor: "#9CB080" }}
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div
                        className="collapse navbar-collapse"
                        id="navbarNav"
                    >
                        <div className="navbar-nav ms-auto">

                            <Link
                                className="nav-link fw-semibold mx-2"
                                to="/"
                                style={{ color: "#F4F7F2" }}
                            >
                                Add Course
                            </Link>

                            <Link
                                className="nav-link fw-semibold mx-2"
                                to="/viewall"
                                style={{ color: "#F4F7F2" }}
                            >
                                All Courses
                            </Link>

                        </div>
                    </div>

                </div>
            </nav>
    </div>
  )
}

export default NavBar
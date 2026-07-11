import React from 'react'
import NavBar from './NavBar'

const InsertCourse = () => {
  return (
    <div>
        <div
    style={{
        backgroundColor: "#F7F3FB",
        minHeight: "100vh"
    }}
>
    <NavBar/>
    <div className="container py-5">

        <div className="row justify-content-center">

            <div className="col-12 col-md-10 col-lg-8">

                <div className="card shadow border-0 rounded-4">

                    <div className="card-body p-5">

                        <div className="text-center mb-4">

                            <h2
                                className="fw-bold"
                                style={{ color: "#4B2E83" }}
                            >
                                Add New Course
                            </h2>

                            <p className="text-muted">
                                Enter course details for registration
                            </p>

                        </div>


                        <div className="row g-4">


                            <div className="col-12 col-md-6">

                                <label className="form-label fw-semibold">
                                    Course Name
                                </label>

                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Enter Course Name"
                                />

                            </div>


                            <div className="col-12 col-md-6">

                                <label className="form-label fw-semibold">
                                    Duration
                                </label>

                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Enter Duration"
                                />

                            </div>


                            <div className="col-12 col-md-6">

                                <label className="form-label fw-semibold">
                                    Fee
                                </label>

                                <input
                                    type="number"
                                    className="form-control"
                                    placeholder="Enter Course Fee"
                                />

                            </div>


                            <div className="col-12 col-md-6">

                                <label className="form-label fw-semibold">
                                    Mode
                                </label>

                                <select className="form-select">

                                    <option selected>
                                        Select Mode
                                    </option>

                                    <option>
                                        Online
                                    </option>

                                    <option>
                                        Offline
                                    </option>

                                    <option>
                                        Hybrid
                                    </option>

                                </select>

                            </div>


                            <div className="col-12">

                                <label className="form-label fw-semibold">
                                    Trainer
                                </label>

                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Enter Trainer Name"
                                />

                            </div>


                            <div className="col-12 text-center mt-4">

                                <button
                                    className="btn px-5 py-2 fw-bold"
                                    style={{
                                        backgroundColor: "#4B2E83",
                                        color: "#FFFFFF",
                                        border: "none",
                                        borderRadius: "10px"
                                    }}
                                >
                                    Add Course
                                </button>

                            </div>


                        </div>


                    </div>

                </div>

            </div>

        </div>

    </div>

</div>
    </div>
  )
}

export default InsertCourse
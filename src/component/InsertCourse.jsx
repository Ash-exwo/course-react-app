import React, { useState } from 'react'
import NavBar from './NavBar'
import axios from 'axios'

const InsertCourse = () => {

    const [input, changInput] = useState(
        {
            course_name: "",
            duration: "",
            fee: "",
            mode: "",
            trainer: ""
        }
    )

    // used to store values in variable when user type in the insert form
    const inputHandler = (event)=>{
        changInput({...input,[event.target.name]:event.target.value})
    }

    //readvalue from form by setting name and value are set
    const readValue = ()=>{
        console.log(input)
        axios.post("https://host-demo-app.onrender.com/api/add-course", input).then(
            (response) =>{
                console.log(response.data)
                alert("Course Added Successfully")
            }
        ).catch(
            (error)=>{
                console.error("Error adding course: ", error)
                alert("Failed to add course")
            }
        )
    }

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
                                    name='course_name'
                                    value={input.course_name}
                                    onChange={inputHandler}
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
                                    name='duration'
                                    value={input.duration}
                                    onChange={inputHandler}
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
                                    name='fee'
                                    value={input.fee}
                                    onChange={inputHandler}
                                />

                            </div>


                            <div className="col-12 col-md-6">

                                <label className="form-label fw-semibold">
                                    Mode
                                </label>

                                <select className="form-select" name='mode' value={input.mode} onChange={inputHandler}>

                                    <option selected value="">
                                        Select Mode
                                    </option>

                                    <option value="Online">
                                        Online
                                    </option>

                                    <option value="Offline">
                                        Offline
                                    </option>

                                    <option value="Hybrid">
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
                                    name='trainer'
                                    value={input.trainer}
                                    onChange={inputHandler}
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
                                    onClick={readValue}
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
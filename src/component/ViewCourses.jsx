import axios from 'axios'
import React, { useEffect, useState } from 'react'
import NavBar from './NavBar'

const ViewCourses = () => {

    const [data, changeData] = useState([])

    const fetchCourseData = () =>{
        axios.get(" https://host-demo-app.onrender.com/api/courses").then(
            (response)=>{
                changeData(response.data)
            })
            .catch()
    }

    useEffect(
        ()=>{
            fetchCourseData()
        }
    )

  return (
    <div
    style={{
        backgroundColor: "#F7F3FB",
        minHeight: "100vh"
    }}
>
    <NavBar/>
    <div className="container py-5">

        <h2
            className="text-center mb-5 fw-bold"
            style={{ color: "#4B2E83" }}
        >
            All Courses
        </h2>


        <div className="row g-4">

            {
                data.map(
                    (value, index) => {

                        return (

                            <div
                                className="col-12 col-sm-6 col-md-4 col-lg-4"
                                key={index}
                            >

                                <div
                                    className="card h-100 shadow border-0 rounded-4"
                                >

                                    <div className="card-body">


                                        <h4
                                            className="fw-bold text-center mb-3"
                                            style={{
                                                color: "#4B2E83"
                                            }}
                                        >
                                            {value.courseName}
                                        </h4>


                                        <p className="card-text">

                                            <strong>
                                                Duration :
                                            </strong>
                                            {" "}
                                            {value.duration}

                                            <br />


                                            <strong>
                                                Fee :
                                            </strong>
                                            {" ₹ "}
                                            {value.fee}

                                            <br />


                                            <strong>
                                                Mode :
                                            </strong>
                                            {" "}
                                            {value.mode}

                                            <br />


                                            <strong>
                                                Trainer :
                                            </strong>
                                            {" "}
                                            {value.trainer}

                                            <br />


                                            <strong>
                                                Created At :
                                            </strong>
                                            {" "}
                                            {value.created_at}

                                        </p>


                                    </div>

                                </div>


                            </div>

                        )

                    }
                )
            }


        </div>


    </div>


</div>
  )
}

export default ViewCourses
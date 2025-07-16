import React, { useEffect, useState } from 'react'
import Nav from './Nav'
import axios from 'axios'

const ViewPost = () => {
    const [postData, changePost] = useState(
        []
    )
    const fetchDataFromAPI = () => {
        axios.get("https://jsonplaceholder.typicode.com/posts")
            .then((response) => {
                changePost(response.data);
            })
            .catch()
    }
    useEffect(() => {
        fetchDataFromAPI()
    }, [])
    return (
        <div>
            <Nav />
            <div className="container">
                <div className="row g-4 px-3 py-3">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row g-4 px-3 py-3">
                            {
                                postData.map((value, index) => {
                                    return (
                                        <div className="col col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3">
                                            <div className="card h-100">
                                                <div className="card-body d-flex flex-column">
                                                    <h5 className="card-title">{value.title}</h5>
                                                    <p className="card-text flex-grow-1">{value.body}</p>
                                                    <a href="#" className="btn btn-danger mt-auto">View More Details</a>
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
            </div>
        </div>
    )
}

export default ViewPost
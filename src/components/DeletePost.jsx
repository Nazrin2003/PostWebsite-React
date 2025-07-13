import React from 'react'
import AddPost from './AddPost'
import Nav from './Nav'

const DeletePost = () => {
    return (
        <div>
            <Nav />
            <center><h2>Delete Post</h2></center>
            <div className="container">
                <div className="row g-4 px-3 py-3">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <label htmlFor="" className="form-label">User ID</label>
                        <input type="text" className="form-control" />
                    </div>
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <button className="btn btn-danger">Delete</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DeletePost
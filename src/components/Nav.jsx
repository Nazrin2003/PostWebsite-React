import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
    return (
        <div>
            <nav class="navbar navbar-expand-lg bg-danger">
                <div class="container-fluid">
                    <h1><Link class="navbar-brand" to="/search">Post</Link></h1>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div class="navbar-nav">
                            <Link class="nav-link active" aria-current="page" to="/">Add</Link>
                            <Link class="nav-link" to="/search">Search</Link>
                            <Link class="nav-link" to="/delete">Delete</Link>
                            <Link class="nav-link" to="/view">View</Link>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Nav
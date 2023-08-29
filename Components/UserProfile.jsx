import React, { Component } from 'react';
//import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../css/style.css';

class UserProfile extends Component {
    constructor(props) {
        super(props)
        this.state = {
             Name:"",
             Email:"",
             Password:""
        }
    }

    render() {
        return (
            <React.Fragment>
                <header id='header' className='fixed-top d-flex align-items-cente'>
                        <div className='container-fluid container-xl'>
                            <nav id='nav' class="navbar navbar-expand-lg navbar-dark">
                                <div class="container-fluid ">
                                    <a class="navbar-brand fs-2" href="#">DELICIOUS</a>
                                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                                        <span class="navbar-toggler-icon"></span>
                                    </button>
                                    <div class="collapse navbar-collapse " id="navbarNav">
                                        <ul class="navbar-nav ms-auto">
                                            <li class="nav-item">
                                                <a class="nav-link active" aria-current="page" href="#">Home</a>
                                            </li>
                                            <li class="nav-item">
                                                <a class="nav-link" href="#">Profile</a>
                                            </li>
                                            <li class="nav-item">
                                                <a class="nav-link" href="#">Orders</a>
                                            </li>
                                            <li className='nav-item'>
                                                <button className='btn btn-warning'>Book Table</button>
                                            </li>
                                            <li className='nav-item ms-2'>
                                                <button className='btn btn-danger'>Login</button>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </nav>
                        </div>
                    </header>
                    <div class="reg-img">
                        <div class="mask d-flex align-items-center h-100 gradient-custom-3 pt-5">
                            <div id='reg-div' class="container h-20">
                                <div class="row d-flex justify-content-center align-items-center h-50">
                                    <div class="col-12 col-md-9 col-lg-7 col-xl-6">
                                        <div>
                                            <div class="p-5 mb-3 ">
                                                <h2 class="text-uppercase text-center pt-5">Profile</h2>
                                                <form>
                                                    <div class="form-outline mb-2">
                                                        <input type="text" id="form3Example1cg" class="form-control form-control-lg" />
                                                        <label class="form-label" for="form3Example1cg">Your Name</label>
                                                    </div>

                                                    <div class="form-outline mb-2">
                                                        <input type="email" id="form3Example3cg" class="form-control form-control-lg" />
                                                        <label class="form-label" for="form3Example3cg">Your Email</label>
                                                    </div>

                                                    <div class="form-outline mb-2">
                                                        <input type="password" id="form3Example4cg" class="form-control form-control-lg" />
                                                        <label class="form-label" for="form3Example4cg">Password</label>
                                                    </div>

                                                    <div class="form-outline mb-2">
                                                        <input type="password" id="form3Example4cdg" class="form-control form-control-lg" />
                                                        <label class="form-label" for="form3Example4cdg">Repeat your password</label>
                                                    </div>

                                                    <div class="form-check d-flex justify-content-center mb-1"> 
                                                    </div>

                                                    <div class="d-flex justify-content-center">
                                                        <button type="button"
                                                            class="btn btn-warning btn-block btn-lg gradient-custom-4 text-body">Update</button>
                                                    </div>


                                                </form>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                

            </React.Fragment>
        )
    }
}

export default UserProfile;
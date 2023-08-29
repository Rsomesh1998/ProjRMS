import React, { Component } from 'react';
//import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../css/style.css';

class UserReg extends Component {
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
                    <div class="reg-img">
                        <div class="mask d-flex align-items-center h-100 gradient-custom-3">
                            <div id='reg-div' class="container h-20 ">
                                <div class="row d-flex justify-content-center align-items-center h-50">
                                    <div class="col-12 col-md-9 col-lg-7 col-xl-6">
                                        <div>
                                            <div class="p-5 mb-3 mt-5">
                                                <h2 class="text-uppercase text-center mb-5">Create an account</h2>
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
                                                            class="btn btn-warning btn-block btn-lg gradient-custom-4 text-body">Register</button>
                                                    </div>

                                                        <p class="text-center text-muted mt-5 mb-0">Have already an account?<a href="/" class="link-primary link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">Login Here</a></p>

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

export default UserReg;
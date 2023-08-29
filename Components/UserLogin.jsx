import React, { Component } from 'react';
//import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../css/style.css';

class UserLogin extends Component {
    render() {
        return (
            <React.Fragment>
                <div id='userlog' className='container-fluid img-login'>
                <h1 className='text-center mb-4'>Customer Login</h1>
                    <form id='form-lg' className='mx-auto'>
                        <div class="mb-3 row ">
                            <label for="exampleInputEmail1" class="form-label col-5 fs-4 ">Email</label>
                            <div className='col-7'>
                            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                            </div> 
                        </div>
                        <div class="mb-3 row">
                            <label for="exampleInputPassword1" class="form-label col-5 fs-4">Password</label>
                            <div className='col-7'>
                            <input type="password" class="form-control" id="exampleInputPassword1"/>
                            </div>
                        </div>
                        <div className='d-flex justify-content-center mt-4'>
                        <button type="submit" class="btn btn-warning ">Login</button>
                        </div>
                        <a href='userreg' className='link-primary link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover '>Register here...</a>
                        <a className='link-primary link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover ms-5'>Forgot/Reset Password</a>
                    </form>
                    </div>
                
            </React.Fragment>
        )
    }
}

export default UserLogin;
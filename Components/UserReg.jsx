import React, { Component } from 'react'


class UserReg extends Component {
  render() {
    return (
      <React.Fragment>
        <div className='container-fluid'>
                <h1 className='text-center'>Member Login</h1>
                    <form className='mx-auto border border-dark'>
                        <div class="mb-3 row ">
                            <label for="exampleInputEmail1" class="form-label col-5 fs-4">Email</label>
                            <div className='col-7'>
                            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                            </div> 
                        </div>
                        <div class="mb-3 row">
                            <label for="exampleInputPassword1" class="form-label col-5 fs-4">Phone Number</label>
                            <div className='col-7'>
                            <input type="text" class="form-control" id="exampleInputPassword1"/>
                            </div>
                        </div>
                        <div class="mb-3 row">
                            <label for="exampleInputPassword1" class="form-label col-5 fs-4">Password</label>
                            <div className='col-7'>
                            <input type="password" class="form-control" id="exampleInputPassword1"/>
                            </div>
                        </div>
                        <div class="mb-3 row">
                            <label for="exampleInputPassword1" class="form-label col-5 fs-4">Password</label>
                            <div className='col-7'>
                            <input type="password" class="form-control" id="exampleInputPassword1"/>
                            </div>
                        </div>
                        <div className='d-flex justify-content-center'>
                        <button type="submit" class="btn btn-success">Login</button>
                        </div>
                    </form>
                    </div>
      </React.Fragment>
    )
  }
}

export default UserReg
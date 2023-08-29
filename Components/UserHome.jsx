import React, { Component } from 'react';
import '../css/style.css';
import hero from '../img/hero-bg.jpg';
import {Link} from 'react-router-dom';

class UserHome extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="container-fluid img">
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
                        <a href='BookTable.jsx'><button className='btn btn-warning'>Book Table </button></a>
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
          {/* Hero Section */}
          <div id="hero" class="d-flex align-items-center">
            <div class="container position-relative text-center text-lg-start" data-aos="zoom-in" data-aos-delay="100">
              <div class="row">
                <div class="col-lg-8">
                  <h1>Welcome to <span>Delicious</span></h1>
                  <h2>Delivering great food for more than 18 years!</h2>
                </div>
              </div>
            </div>
          </div>
        </div>

      </React.Fragment>
    )
  }
}

export default UserHome
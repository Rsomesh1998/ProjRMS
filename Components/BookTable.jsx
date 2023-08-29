import React, { Component } from 'react';
import '../css/style.css';
import Gallery from '../img/gallery-3.jpg';
import table from '../img/about-bg.jpg';

class BookTable extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="container-fluid img-table">
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

                    <div className='container '>
                        
                        <form id='form2'>
                        <h1 className='d-flex justify-content-center mb-4' >Table Reservation</h1>
                            <div class="form-outline mb-4 ">
                                <input type="text" id="form1Example1" class="form-control" />
                                <label class="form-label" for="form1Example1">Name</label>
                            </div>
                            <div class="form-outline mb-4">
                                <input type="date" id="form1Example2" class="form-control" />
                                <label class="form-label" for="form1Example2">Date</label>
                            </div>
                            <div class="form-outline mb-4">
                                <input type="time" id="form1Example2" class="form-control" />
                                <label class="form-label" for="form1Example2">Time</label>
                            </div>
                            <div className='d-flex justify-content-center'>
                            <button type="submit" class="btn btn-warning btn-block d">Book Table</button>
                            </div>
                        </form>
                    </div>
                </div>

            </React.Fragment>
        )
    }
}

export default BookTable;
import React, { Component } from 'react';
import '../css/style.css';
import Gallery from '../img/gallery-3.jpg';
import table from '../img/about-bg.jpg';

class Orders extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="container-fluid img-order">
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

                    <div id='order-tb' className='container'>
                        <table  class="table table-dark table-striped table-borderless">
                            <thead className='table-dark'>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">First</th>
                                    <th scope="col">Last</th>
                                    <th scope="col">Handle</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row">1</th>
                                    <td>Mark</td>
                                    <td>Otto</td>
                                    <td>@mdo</td>
                                </tr>
                                <tr>
                                    <th scope="row">2</th>
                                    <td>Jacob</td>
                                    <td>Thornton</td>
                                    <td>@fat</td>
                                </tr>
                                <tr>
                                    <th scope="row">3</th>
                                    <td colspan="2">Larry the Bird</td>
                                    <td>@twitter</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                </div>

            </React.Fragment>
        )
    }
}

export default Orders;
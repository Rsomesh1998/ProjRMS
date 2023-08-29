import React, { Component } from 'react';
import '../css/style.css';


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
                        <div className="row">
                        <div className="col-4">
                        <select  class="form-select" aria-label="Default select example">
                            <option selected>Veg</option>
                            <option value="1">Non-Veg</option>
                        </select>
                        </div>
                        </div>

                        <div className="row mt-2">
                        <div className="col-4">
                        <select  class="form-select" aria-label="Default select example">
                            <option selected>MENU</option>
                            <option value="1">Starter</option>
                            <option value="2">Main Course</option>
                            <option value="3">Chinese</option>
                            <option value="4">Deserts</option>
                            <option value="5">Soft Drinks</option>
                        </select> 
                        </div>
                        <div className="col-4">
                        <select  class="form-select" aria-label="Default select example">
                            <option selected>MENU</option>
                            <option value="1">Starter</option>
                            <option value="2">Main Course</option>
                            <option value="3">Chinese</option>
                            <option value="4">Deserts</option>
                            <option value="5">Soft Drinks</option>
                        </select>
                        </div>
                        </div>
                        <br></br>
                        <table class="table table-dark table-striped table-borderless">
                         
                        <thead className='table-dark'>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Dish</th>
                                    <th scope="col">Quantity</th>
                                    <th scope="col">Price</th>
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
                                <tr>
                                </tr>
                                
                            </tbody>
                        </table>
                        <div className='d-flex justify-content-center'>
                        <button className='btn btn-warning '>Confirmed</button>
                        </div>
                    </div>

                </div>

            </React.Fragment>
        )
    }
}

export default Orders;
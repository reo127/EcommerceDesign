import React from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import image from '../images/1.jpg'
import { Link } from 'react-router-dom'

const Cart = () => {
    return (
        <>
            <div className="container d-flex justify-content-around align-items-start flex-wrap">

                <div class="col-md-5 col-lg-4 order-md-last my-4">
                    <h4 class="d-flex justify-content-between align-items-center mb-3">
                        <span class="text-primary">Your cart</span>
                        <span class="badge bg-primary rounded-pill">3</span>
                    </h4>
                    <ul class="list-group mb-3">
                        <li class="list-group-item d-flex justify-content-between lh-sm ">
                            <div>
                                <h6 class="my-0 fs-4">Total Product </h6>
                            </div>
                            <span class=" fs-4"><strong> 8 </strong></span>
                        </li>
                        <li class="list-group-item d-flex justify-content-between lh-sm ">
                            <div>
                                <h6 class="my-0 fs-4">Total Amount </h6>
                            </div>
                            <span class=" fs-4"><strong> $4000 </strong></span>
                        </li>

                        <li class="list-group-item d-flex justify-content-between bg-light">
                            <div class="text-success">
                                <h6 class="my-0">Promo code</h6>
                                <small>EXAMPLECODE</small>
                            </div>
                            <span class="text-success">−$5</span>
                        </li>
                        <li class="list-group-item d-flex justify-content-between">
                            <span>Total (USD)</span>
                            <strong>$20</strong>
                        </li>
                    </ul>

                    <form class="card p-2">
                        <div class="input-group">
                            <input type="text" class="form-control" placeholder="Promo code" />
                            <Button variant="contained"> Redeem </Button>
                        </div>
                    </form>
                    <Button variant="contained" color='warning' className='mt-3'> Place Order </Button>

                </div>




                <div className="searchItems " >

                    <div class="card mb-3" style={{ maxWidth: '940px', padding: '1rem', marginTop: '10px' }}>
                        <div class="row g-0">
                            <div class="col-md-4">
                                <Link to="#">
                                    <img src={image} class="img-fluid rounded-start" alt="..." />
                                </Link>
                            </div>
                            <div class="col-md-8">
                                <div class="card-body">
                                    <h5 class="card-title fs-3"><b>MacBook pro m1 chip</b></h5>
                                    <p class="card-text my-2 fw-normal">This is a wider card with supporting text below as a natur Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, laudantium? al lead-in to additional content. This content is a little bit longer.</p>
                                    <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div class="card mb-3" style={{ maxWidth: '940px', padding: '1rem', marginTop: '10px' }}>
                        <div class="row g-0">
                            <div class="col-md-4">
                                <Link to="#">
                                    <img src={image} class="img-fluid rounded-start" alt="..." />
                                </Link>
                            </div>
                            <div class="col-md-8">
                                <div class="card-body">
                                    <h5 class="card-title fs-3"><b>MacBook pro m1 chip</b></h5>
                                    <p class="card-text my-2 fw-normal">This is a wider card with supporting text below as a natur Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, laudantium? al lead-in to additional content. This content is a little bit longer.</p>
                                    <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div class="card mb-3" style={{ maxWidth: '940px', padding: '1rem', marginTop: '10px' }}>
                        <div class="row g-0">
                            <div class="col-md-4">
                                <Link to="#">
                                    <img src={image} class="img-fluid rounded-start" alt="..." />
                                </Link>
                            </div>
                            <div class="col-md-8">
                                <div class="card-body">
                                    <h5 class="card-title fs-3"><b>MacBook pro m1 chip</b></h5>
                                    <p class="card-text my-2 fw-normal">This is a wider card with supporting text below as a natur Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, laudantium? al lead-in to additional content. This content is a little bit longer.</p>
                                    <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                                </div>
                            </div>
                        </div>
                    </div>

                    
                    <div class="card mb-3" style={{ maxWidth: '940px', padding: '1rem', marginTop: '10px' }}>
                        <div class="row g-0">
                            <div class="col-md-4">
                                <Link to="#">
                                    <img src={image} class="img-fluid rounded-start" alt="..." />
                                </Link>
                            </div>
                            <div class="col-md-8">
                                <div class="card-body">
                                    <h5 class="card-title fs-3"><b>MacBook pro m1 chip</b></h5>
                                    <p class="card-text my-2 fw-normal">This is a wider card with supporting text below as a natur Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, laudantium? al lead-in to additional content. This content is a little bit longer.</p>
                                    <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                                </div>
                            </div>
                        </div>
                    </div>



                </div>
            </div>
        </>
    )
}

export default Cart
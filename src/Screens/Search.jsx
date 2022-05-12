import React from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import image from '../images/1.jpg'
import { Link } from 'react-router-dom'

const Search = () => {
  return (
    <>
      <div className="container d-flex justify-content-around align-items-start flex-wrap">

        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            '& > :not(style)': { m: 1 },
          }}
        >

          <TextField
            id="demo-helper-text-misaligned"
            label="MIN"
            type='number'
            style={{ width: '100px' }}
          />
          <TextField
            id="demo-helper-text-misaligned-no-helper"
            label="MAX"
            type='number'
            style={{ width: '100px' }}
          />
          <Button variant="contained"> Go </Button>
        </Box>


        <div className="searchItems w-75" >

          <div className="card mb-3" style={{ maxWidth: '940px', padding: '1rem', marginTop: '10px' }}>
            <div className="row g-0">
              <div className="col-md-4">
                <Link to="#">
                  <img src={image} className="img-fluid rounded-start" alt="..." />
                </Link>
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title fs-3"><b>MacBook pro m1 chip</b></h5>
                  <p className="card-text my-2 fw-normal">This is a wider card with supporting text below as a natur Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, laudantium? al lead-in to additional content. This content is a little bit longer.</p>
                  <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                </div>
              </div>
            </div>
          </div>


          <div className="card mb-3" style={{ maxWidth: '940px', padding: '1rem', marginTop: '10px' }}>
            <div className="row g-0">
              <div className="col-md-4">
                <Link to="#">
                  <img src={image} className="img-fluid rounded-start" alt="..." />
                </Link>
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title fs-3"><b>MacBook pro m1 chip</b></h5>
                  <p className="card-text my-2 fw-normal">This is a wider card with supporting text below as a natur Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, laudantium? al lead-in to additional content. This content is a little bit longer.</p>
                  <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                </div>
              </div>
            </div>
          </div>


          <div className="card mb-3" style={{ maxWidth: '940px', padding: '1rem', marginTop: '10px' }}>
            <div className="row g-0">
              <div className="col-md-4">
                <Link to="#">
                  <img src={image} className="img-fluid rounded-start" alt="..." />
                </Link>
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title fs-3"><b>MacBook pro m1 chip</b></h5>
                  <p className="card-text my-2 fw-normal">This is a wider card with supporting text below as a natur Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, laudantium? al lead-in to additional content. This content is a little bit longer.</p>
                  <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                </div>
              </div>
            </div>
          </div>


          <div className="card mb-3" style={{ maxWidth: '940px', padding: '1rem', marginTop: '10px' }}>
            <div className="row g-0">
              <div className="col-md-4">
                <Link to="#">
                  <img src={image} className="img-fluid rounded-start" alt="..." />
                </Link>
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title fs-3"><b>MacBook pro m1 chip</b></h5>
                  <p className="card-text my-2 fw-normal">This is a wider card with supporting text below as a natur Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, laudantium? al lead-in to additional content. This content is a little bit longer.</p>
                  <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                </div>
              </div>
            </div>
          </div>


          <div className="card mb-3" style={{ maxWidth: '940px', padding: '1rem', marginTop: '10px' }}>
            <div className="row g-0">
              <div className="col-md-4">
                <Link to="#">
                  <img src={image} className="img-fluid rounded-start" alt="..." />
                </Link>
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title fs-3"><b>MacBook pro m1 chip</b></h5>
                  <p className="card-text my-2 fw-normal">This is a wider card with supporting text below as a natur Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, laudantium? al lead-in to additional content. This content is a little bit longer.</p>
                  <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                </div>
              </div>
            </div>
          </div>


          <div className="card mb-3" style={{ maxWidth: '900px', padding: '1rem', marginTop: '10px' }}>
            <div className="row g-0">
              <div className="col-md-4">
                <Link to="#">
                  <img src={image} className="img-fluid rounded-start" alt="..." />
                </Link>
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title fs-3"><b>MacBook pro m1 chip</b></h5>
                  <p className="card-text my-2 fw-normal">This is a wider card with supporting text below as a natur Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, laudantium? al lead-in to additional content. This content is a little bit longer.</p>
                  <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                </div>
              </div>
            </div>
          </div>


          <div className="card mb-3" style={{ maxWidth: '940px', padding: '1rem', marginTop: '10px' }}>
            <div className="row g-0">
              <div className="col-md-4">
                <Link to="#">
                  <img src={image} className="img-fluid rounded-start" alt="..." />
                </Link>
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title fs-3"><b>MacBook pro m1 chip</b></h5>
                  <p className="card-text my-2 fw-normal">This is a wider card with supporting text below as a natur Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, laudantium? al lead-in to additional content. This content is a little bit longer.</p>
                  <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                </div>
              </div>
            </div>
          </div>




        </div>
      </div>
    </>
  )
}

export default Search
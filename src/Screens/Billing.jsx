import React from 'react'
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';


const Billing = (props) => {

    return (
        <div className='d-flex justify-content-center m-5'>
            <div className="col-md-7 col-lg-8">
                <h4 className="mb-3 fs-2"><strong>Billing address</strong></h4>
                <form className="needs-validation" novalidate="">
                    <div className="row g-3">

                        <FormControl>
                            {/* <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel> */}
                            <RadioGroup
                                aria-labelledby="demo-radio-buttons-group-label"
                                defaultValue="female"
                                name="radio-buttons-group"
                            >
                                <FormControlLabel value="female" control={<Radio />} label={
                                    <div className=" my-3">
                                        <h3> Majhcher kalyani nadia, Kolkata west bengal, word no.6 near a shooole in a place ojk </h3>
                                        <h2 className='mt-2'>Phone +91 6289038527</h2>
                                        <Button variant="contained" color='warning' className='mt-3'> DELIVER HARE </Button>
                                    </div>}
                                />
                                <FormControlLabel value="male" control={<Radio />} label={
                                    <div className=" my-3">
                                        <h3> Majhcher kalyani nadia, Kolkata west bengal, word no.6 near a shooole in a place ojk </h3>
                                        <h2 className='mt-2'>Phone +91 6289038527</h2>
                                        <Button variant="contained" color='warning' className='mt-3'> DELIVER HARE </Button>
                                    </div>}
                                />
                                <FormControlLabel value="other" control={<Radio />} label={
                                    <div className=" my-3">
                                        <h3> Majhcher kalyani nadia, Kolkata west bengal, word no.6 near a shooole in a place ojk </h3>
                                        <h2 className='mt-2'>Phone +91 6289038527</h2>
                                        <Button variant="contained" color='warning' className='mt-3'> DELIVER HARE </Button>
                                    </div>}
                                />

                                <FormControlLabel value="m" control={<Radio />} label={
                                    <div className=" my-3">
                                        <h3> Add Another Address </h3>
                                        <h2 className='mt-2'>Phone +91 6289038527</h2>
                                        <Box sx={{ width: 500, maxWidth: '100%' }}>
                                            <TextField fullWidth label="Address" className='my-3' id="fullWidth"  />
                                        </Box>


                                        <Button variant="contained" color='warning' className='mt-3'> DELIVER HARE </Button>
                                    </div>}
                                />

                            </RadioGroup>
                        </FormControl>





                    </div>

                 <hr className='my-3' />

                    <h2 className="mb-3 fs-2">Payment</h2>

                    <div className="my-3">
                        <div className="form-check">
                            <input id="credit" name="paymentMethod" type="radio" className="form-check-input" checked="" required="" />
                            <label className="form-check-label" htmlFor="credit">Credit card</label>
                        </div>
                        <div className="form-check">
                            <input id="debit" name="paymentMethod" type="radio" className="form-check-input" required="" />
                            <label className="form-check-label" htmlFor="debit">Debit card</label>
                        </div>
                        <div className="form-check">
                            <input id="paypal" name="paymentMethod" type="radio" className="form-check-input" required="" />
                            <label className="form-check-label" htmlFor="paypal">PayPal</label>
                        </div>
                        <div className="form-check">
                            <input id="paypal" name="paymentMethod" type="radio" className="form-check-input" required="" />
                            <label className="form-check-label" htmlFor="paypal">UPI</label>
                        </div>
                        
                    </div>

                    <div className="row gy-3">
                        <div className="col-md-6">
                            <label htmlFor="cc-name" className="form-label">Name on card</label>
                            <input type="text" className="form-control" id="cc-name" placeholder="" required="" />
                            <small className="text-muted">Full name as displayed on card</small>
                            <div className="invalid-feedback">
                                Name on card is required
                            </div>
                        </div>

                        <div className="col-md-6">
                            <label htmlFor="cc-number" className="form-label">Credit card number</label>
                            <input type="text" className="form-control" id="cc-number" placeholder="" required="" />
                            <div className="invalid-feedback">
                                Credit card number is required
                            </div>
                        </div>

                        <div className="col-md-3">
                            <label htmlFor="cc-expiration" className="form-label">Expiration</label>
                            <input type="text" className="form-control" id="cc-expiration" placeholder="" required="" />
                            <div className="invalid-feedback">
                                Expiration date required
                            </div>
                        </div>

                        <div className="col-md-3">
                            <label htmlFor="cc-cvv" className="form-label">CVV</label>
                            <input type="text" className="form-control" id="cc-cvv" placeholder="" required="" />
                            <div className="invalid-feedback">
                                Security code required
                            </div>
                        </div>
                        
                    </div>

                    <hr className="my-4" />

                    <Button variant="contained" color='warning' className='mt-3'> Order </Button>
                </form>
            </div>
        </div>
    )
}

export default Billing
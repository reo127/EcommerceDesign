import React from 'react'
import profileImage from '../images/1.jpg'
import ShopImage from '../images/shop.jpg'
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const Profile = () => {
    return (
        <>
            <section class="text-gray-600 body-font ">
                <div class="container px-5 py-10 mx-auto flex flex-col" style={{ width: "100%" }}>
                    <div class="lg:w-4/6 mx-auto w-75">

                        <div class="flex flex-col sm:flex-row items-center ">
                            <img src={ShopImage} alt="Logo" className='bject-none object-center bg-yellow-300 w-50 h-110  ' />

                            <div class="sm:w-2/3 sm:pl-8 sm:py-8 border-gray-200 mt-4 pt-4 sm:mt-0 text-center sm:text-left">
                                <div class="w-10 h-10 rounded-full inline-flex items-center justify-center bg-gray-200 text-gray-400">
                                    <Stack spacing={2}>
                                        <Avatar className='' src={profileImage} alt='Profile Image' style={{ width: '6rem', height: '6rem' }} />
                                    </Stack>
                                </div>
                                <div class="flex flex-col items-center text-center justify-center">
                                    <h2 class="font-medium title-font mt-4 text-gray-900 text-lg">Rohan Malo</h2> 
                                    <div class="w-50 h-1 bg-indigo-500 rounded mt-2 mb-4"></div>
                                </div>
                                <Box
                                    component="form"
                                    sx={{ '& > :not(style)': { m: 1, width: '25ch' } }}
                                    noValidate
                                    autoComplete="on"
                                    className='d-flex flex-column  items-center  '
                                >
                                    <TextField id="standard-basic" label="Name" className='w-75' variant="standard" />
                                    <TextField id="standard-basic" label="Email" className='w-75' variant="standard" />
                                    <TextField id="standard-basic" label="Phone" className='w-75' variant="standard" />
                                    <TextField id="standard-basic" label="Address" className='w-75' variant="standard" />
                                    <Button variant="contained" className='d-flex justify-content-center mt-3 ' color='warning'> save changes </Button>
                                </Box>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Profile
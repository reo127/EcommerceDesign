import React from 'react'
import '../App.css'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import GoogleIcon from '@mui/icons-material/Google';

// Login Modal
export const LoginModal = () => {
    return (
        <>
            <Box sx={ModalStyle}>
            <div className="LoginModal">
                    <Box
                        component="form"
                        sx={{
                            '& > :not(style)': { m: 1, width: '25ch' },
                        }}
                        noValidate
                        autoComplete="on"
                        sx={inputStyle}
                    >
                        <h1>Register Hare</h1>
                        <TextField id="outlined-basic" label="Email" variant="outlined" type='text' sx={inputStyle} />
                        <TextField id="outlined-basic" label="Password" variant="outlined" sx={inputStyle} />
                        <p style={{ textAlign: "center" }}>Or</p>
                        <Button variant="outlined" startIcon={<GoogleIcon />}
                            style={{ marginBottom: "10px", display: "flex", alignItems: "center", justifyContent: "center", width: "100%" }}
                        >Signup with Google</Button> <br />
                        <Button variant="contained" color="primary" > Submit </Button>

                    </Box>
                </div>

            </Box>

        </>
    )
}

// Register Modal
export const SignupModal = () => {
    return (
        <>
            <Box sx={ModalStyle}>
                <div className="RegisterModal">
                    <Box
                        component="form"
                        sx={{
                            '& > :not(style)': { m: 1, width: '25ch' },
                        }}
                        noValidate
                        autoComplete="on"
                        sx={inputStyle}
                    >
                        <h1>Register Hare</h1>
                        <TextField id="outlined-basic" label="Name" variant="outlined" type='text' name='name' sx={inputStyle} />
                        <TextField id="outlined-basic" label="Email" variant="outlined" type='text' sx={inputStyle} />
                        <TextField id="outlined-basic" label="Phone" variant="outlined" type='text' sx={inputStyle} />
                        <TextField id="outlined-basic" label="Password" variant="outlined" sx={inputStyle} />
                        <TextField id="outlined-basic" label="Confornm Password" variant="outlined" sx={inputStyle} />
                        <p style={{ textAlign: "center" }}>Or</p>
                        <Button variant="outlined" startIcon={<GoogleIcon />}
                            style={{ marginBottom: "10px", display: "flex", alignItems: "center", justifyContent: "center", width: "100%" }}
                        >Signup with Google</Button> <br />
                        <Button variant="contained" color="primary" > Submit </Button>

                    </Box>
                </div>
            </Box>
        </>
    )
}

// Styles for Modal ---------------------------------------------------------------------------------
const ModalStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '20%',
    bgcolor: 'background.paper',
    border: '2px solid blue',
    boxShadow: 24,
    p: 4,
};

const inputStyle = {
    width: "100%",
    margin: "10px 0px",
}

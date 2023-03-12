import { Box, Button, Container } from '@mui/material';
import React, { useContext, useRef } from 'react';
import { CustomTextField, FormBox, Image, RegisterBox } from '../../Styles/AllStyles';
import logo from '../../../logos/logo.png';
import { useNavigate } from 'react-router-dom';
import { AdminLoginContext } from '../../../Contexts/Context';

const AdminLogin = () => {
    const adminEmailRef = useRef();
    const adminPassRef = useRef();
    const navigate = useNavigate();
    const [isAdmin, setIsAdmin] = useContext(AdminLoginContext);
    const handleAdminLogin = (e) =>{
        e.preventDefault();
        const verifyAdmin = {
            email: adminEmailRef.current.value,
            pass: adminPassRef.current.value
        };
        fetch('http://localhost:5000/admin/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(verifyAdmin)
        })
        .then(res => res.json())
        .then(result => {
            if(result){
                setIsAdmin(true);
                navigate('/admin/dashboard');
            }
            else{
                alert('Invalid email or password');
            }
        });
    }


    return (
        <RegisterBox>
            <Container maxWidth="lg">
                <Box textAlign="center"
                    sx={{
                        py: 4,
                    }}
                >
                    <Image src={logo} alt="logo" height="60px" />
                </Box>
                <FormBox height="250px">
                    <form onSubmit={handleAdminLogin}>
                        <CustomTextField
                            InputLabelProps={{
                                style: {
                                    textOverflow: 'ellipsis',
                                    whiteSpace: 'nowrap',
                                    overflow: 'hidden',
                                    width: '100%',
                                    color: '#FF7044'
                                }
                            }}
                            id="outlined-basic"
                            name="email" inputRef={adminEmailRef} label="Enter admin email" variant="outlined" sx={{ input: { color: 'red' } }} fullWidth margin="normal" required />

                        <CustomTextField
                            InputLabelProps={{
                                style: {
                                    textOverflow: 'ellipsis',
                                    whiteSpace: 'nowrap',
                                    overflow: 'hidden',
                                    width: '100%',
                                    color: '#FF7044'
                                }
                            }}
                            id="outlined-basic" inputRef={adminPassRef} label="Enter admin password" name="password" variant="outlined" fullWidth type="password" sx={{ input: { color: 'red' } }} margin="normal" required />

                        <Button fullWidth color="secondary" type='submit' variant="contained">Login</Button>
                    </form>
                </FormBox>
            </Container>
        </RegisterBox>
    );
};

export default AdminLogin;
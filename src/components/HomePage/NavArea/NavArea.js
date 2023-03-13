import { Avatar, Box, Button, Container, IconButton, Menu, Stack, Tooltip, Typography } from '@mui/material';
import React, { useContext, useState } from 'react';
import { LogoImg, MenuLink, MenuStack, ResponsiveLink } from '../../Styles/AllStyles';
import logo from '../../../logos/logo.png';
import { MenuOpen } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { IsSignedInContext, RegistrationData } from '../../../Contexts/Context';
import { getAuth, signOut } from "firebase/auth";

const NavArea = () => {
    const [anchorElUser, setAnchorElUser] = useState(null);
    const [isSignedIn, setIsSignedIn] = useContext(IsSignedInContext);
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };
    const [registrationData, setRegistrationData] = useContext(RegistrationData);

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    const handleSignOut = () => {
        const auth = getAuth();
        signOut(auth).then(() => {
            // Sign-out successful.
            setIsSignedIn(false);
            alert('Signed Out Successfully');
        }).catch((error) => {
            // An error happened.
        })
    }

    return (
        <Container maxWidth='lg'>
            <Stack direction='row' justifyContent='space-between' alignItems='center'>
                <LogoImg src={logo} alt="Logo" />
                <Box display={{ md: 'block', lg: 'block', xs: 'none', sm: 'none' }}>
                    <MenuStack direction='row' spacing={2}>
                        <MenuLink variant="p" component="p" ><Link to='/' style={{
                            textDecoration: 'none',
                        }}>Home</Link></MenuLink>
                        <MenuLink variant="p" component="p">Donations</MenuLink>
                        <MenuLink variant="p" component="p">Events</MenuLink>
                        {
                            registrationData.userEmail ? (<MenuLink variant="p" component="p" ><Link to='/dashboard' style={{
                                textDecoration: 'none',
                            }}>Dashboard</Link></MenuLink>) :
                            (<ResponsiveLink variant="p" component="p">Blog</ResponsiveLink>)
                        }
                        {
                            !isSignedIn ?
                                <Link to="/register/1"><Button variant="contained">Register</Button></Link> :
                                <Button variant="contained" onClick={handleSignOut}>Sign Out</Button>
                        }
                        <Link to="/adminLogin">
                            <Button variant="contained" color="secondary">Admin</Button>
                        </Link>
                    </MenuStack>
                </Box>
                <Box display={{ md: 'none', lg: 'none', xs: 'block', sm: 'block' }}>
                    <Tooltip title="Open Menu">
                        <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                            <MenuOpen />
                        </IconButton>
                    </Tooltip>
                    <Menu
                        sx={{ mt: '45px' }}
                        anchorEl={anchorElUser}
                        anchorOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                        }}
                        keepMounted
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                        }}
                        open={Boolean(anchorElUser)}
                        onClose={handleCloseUserMenu}
                    >
                        <ResponsiveLink variant="p" component="p"><Link to='/' style={{
                            textDecoration: 'none',
                        }}>Home</Link></ResponsiveLink>
                        <ResponsiveLink variant="p" component="p">Donations</ResponsiveLink>
                        <ResponsiveLink variant="p" component="p">Events</ResponsiveLink>
                        {
                            registrationData.userEmail ? (<MenuLink variant="p" component="p" ><Link to='/dashboard' style={{
                                textDecoration: 'none',
                            }}>Dashboard</Link></MenuLink>) :
                            (<ResponsiveLink variant="p" component="p">Blog</ResponsiveLink>)
                        }
                        {
                            !isSignedIn ?
                                <Link to="/register/1"><Button variant="contained">Register</Button></Link> :
                                <Button variant="contained" onClick={handleSignOut}>Sign Out</Button>
                        }
                        <br />
                        <Link to="/adminLogin">
                            <Button variant="contained" color="secondary">Admin</Button>
                        </Link>
                    </Menu>
                </Box>

            </Stack>
        </Container>
    );
};

export default NavArea;